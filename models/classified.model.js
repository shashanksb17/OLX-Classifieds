const mongoose=require("mongoose")

const ClassifiedSchema= new mongoose.Schema({
    name:{type:String,required:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    image:{type:String,required:true},
    location:{type:String,required:true},
    date:{type:Date,required:true},
    price:{type:String,required:true,default:Date.now},
})

const ClassifiedModel=new mongoose.model("class",ClassifiedSchema)
module.exports={ClassifiedModel}