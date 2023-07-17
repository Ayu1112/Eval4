const {Schema,model}=require('mongoose');

const userSchema=Schema({
    name:String,
    email:String,
    gender:String,
    password:String
},{
    versionKey:false
})

const userModel=model("user",userSchema)

module.exports={
    userModel
}