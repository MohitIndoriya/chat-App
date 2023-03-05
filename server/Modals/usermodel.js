let mongoose=require("mongoose")
let userModel=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true,
    },email:{
        type:String,
        required:true,
    },password:{
        type:String,require:true,
    },picture:{
        required:true,
    type:String,default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    }
})