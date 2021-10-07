//imports
import mongoose from "mongoose"

// defining the way how the data will be stored or the manner how the data will be stored

const chatschema = mongoose.Schema({
    message:String,
    name:String,
    time: String,
    recieved:Boolean

});
const Messages =mongoose.model("chatcontent" , chatschema)
//chatcontent is the document
export default Messages