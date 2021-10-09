//imports
import mongoose from "mongoose"

// defining the way how the data will be stored or the manner how the data will be stored

const chatschema = mongoose.Schema({
    name:String,
    message:String,
    time: String,
    recieved:Boolean
});

const user = mongoose.Schema({
    name:String,
    id : String
})

const Messages =mongoose.model("chatcontent" , chatschema)
//chatcontent is the document
export default Messages
