//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./chat_schema.js";
import Pusher from "pusher";
import Cors from "cors"

//app config
const app = express();
const port = 9000 || process.env.PORT;

//pusher
const pusher = new Pusher({
  appId: "1278739",
  key: "a34e9696eda41b89e1aa",
  secret: "96198a4fdcfaae19c08b",
  cluster: "mt1",
  useTLS: true,
});

// db configure
const connectionurl = `mongodb+srv://admin:Yj5aloiP5FJ3XL80@cluster0.nymdy.mongodb.net/ChatDB?retryWrites=true&w=majority`;
mongoose.connect(connectionurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// db connected and pusher updated
const db = mongoose.connection;
if(db){
db.once("open", () => {
  console.log("db connected");
  const messagecollection = db.collection("chatcontents");
  const change = messagecollection.watch();
  change.on("change", (change) => {
    console.log(change)
    if(change.operationType=="insert"){
        const messagedetail = change.fullDocument;
        pusher.trigger("messages" , "inserted",{
            name:messagedetail.name,
            message:messagedetail.message,
            time : messagedetail.time 
        })
    }else{
        console.log("error with pusher")
    }
  });
});
}


//middleware
app.use(express.json());
app.use(Cors())

// api route

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.post("/messages/add", (req, res) => {
  const dbmessage = req.body;
  // res.status(200).send(dbmessage)
  Messages.create(dbmessage, (err, data) => {
    if (err) {
      res.status(501);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/messages/show", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(501);
    } else {
      res.status(201).send(data);
    }
  });
});

// api listener
app.listen(port, () => console.log("listening on port 9000"));
