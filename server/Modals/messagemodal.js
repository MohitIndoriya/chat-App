const mongoose=require("mongoose")
const messageModel=mongoose.Schema({
sender:{
     type:mongoose.Schema.Types.ObjectId,
        ref:"User"
},
chat:{
     type:mongoose.Schema.Types.ObjectId,
        ref:"Chat"
},content:{
    type:String,trim:true
}
,timestamp:true
})
let message=mongoose.model("Message",messageModel)
module.exports=message