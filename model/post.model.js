const mongoose=require('mongoose');

const postSchema=mongoose.Schema({
    title:String,
    body:String,
    device:String,
    user:String,
    userId:String
},{
    versionKey:false
})

const userPost=model("user",postSchema)

module.exports={
    userPost
}