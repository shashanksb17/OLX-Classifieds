const express=require("express")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

require("dotenv").config()

const {UserModel}=require("../models/User.model")
const {ClassfiedModel}=require("../models/classified.model")

const UserRouter=express.Router()

UserRouter.post("/signup",async(req,res)=>{
    const {email,password,confirm_password}=req.body
    try{
       const user= await UserModel.findOne({email})
       if(user){
            return res.send("user already exist")
       }
       if(password!==confirm_password){
            return res.send("password does not match")
       }
       else{
            hashed_password=bcrypt.hashSync(password,6)
            const user=new UserModel({email,password:hashed_password})
            await user.save()
            return res.send({message:"user registered successful"})
       }
    }
    catch(err){
        console.log(err)
        return res.send({message:"server error"})
    }
})

UserRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    try{
        const user= await UserModel.findOne({email})
        if(user){
            hashed_password=user.password
            bcrypt.compare(password,hashed_password,async(err,result)=>{
                if(err){
                    res.send({message:"wrong credientials"})
                }
                else if(result){
                    var token=jwt.sign({id:user._id},process.env.key)
                    // res.status(201).send(,token)
                    console.log(token)
                    res.status(200).send({message:"Login successfull",token:token})
                }
                else{
                    res.send({message:"wrong credientials"})
                }
            })
        }

    }
    catch(err){
        console.log(err)
        return res.send({message:"server error"})
    }
})

module.exports={UserRouter}
