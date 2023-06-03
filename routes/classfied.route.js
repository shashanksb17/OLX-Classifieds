const express=require("express")

require("dotenv").config()


const{ClassifiedModel}=require("../models/classified.model")

const ClassifiedRouter=express.Router()

ClassifiedRouter.post("/classified",(req,res)=>{
    try{
        const {name,description,category,image,location,date,price}=req.body
        const classified=new ClassifiedModel({name,description,category,image,location,date,price})
        classified.save()
        res.send({message:"classfied added successfully"})
    }
    catch(err){
        console.log(err)
        return res.send({message:"server error"})
    }
})

ClassifiedRouter.get("/classified",async(req,res)=>{
    try{
        
        const classified=await ClassifiedModel.find()
        res.send(classified)
    }
    catch(err){
        console.log(err)
        return res.send({message:"server error"})
    }
})

module.exports={ClassifiedRouter}