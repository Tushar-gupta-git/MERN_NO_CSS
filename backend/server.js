//importing
import express from "express";
import mongoose from "mongoose";
import Messages from "./chat_schema.js";
import Pusher from "pusher";
import Cors from "cors";
import dotenv from "dotenv"; // used dotenv storing mongo api ket in .env file "THAPA TECHNICAL: https://youtu.be/jxv53raRvRU "
//app config
const app = express();
const port = process.env.PORT || 9000;

//pusher
const pusher = new Pusher({
  appId: "1278739",
  key: "a34e9696eda41b89e1aa",
  secret: "96198a4fdcfaae19c08b",
  cluster: "mt1",
  useTLS: true,
});
// DOTENV FOR STORING MONGO PORT AND API
dotenv.config({ path: "./password.env" });

// db configure
const connectionurl = process.env.MONGOURL;
mongoose.connect(connectionurl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// db connected and pusher updated
const db = mongoose.connection;
if (db) {
  db.once("open", () => {
    console.log("db connected");
    const messagecollection = db.collection("chatcontents");
    const change = messagecollection.watch();
    change.on("change", (change) => {
      // console.log(change)
      if (change.operationType == "insert") {
        const messagedetail = change.fullDocument;
        console.log(messagedetail.id)
        pusher.trigger("messages", "inserted", {
          name: messagedetail.name,
          message: messagedetail.message,
          time: messagedetail.time,
          recieved: messagedetail.recieved,
          id:messagedetail.id
        });
        console.log("added to pusher");
      } else {
        console.log("error with pusher");
      }
    });
  });
}

//middleware + CORS
app.use(express.json());
app.use(Cors());

// api route

//TEST API
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});
//MESSAGE ADD ROUTE
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
//MESSAGE FETCH ROUTE
app.get("/messages/show", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(501);
    } else {
      res.status(201).send(data);
    }
  });
});

app.post("/users",(res , req)=>{
  

})

// api listener
app.listen(port, () => console.log("listening on port 9000"));
