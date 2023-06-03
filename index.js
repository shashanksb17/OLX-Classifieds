const express=require("express")
const {connection}=require("./config/db")

require("dotenv").config()

app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("HOME PAGE")
})


app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to DB")
    }
    catch(err){
        console.log("can not connect DB")
        console.log(err)
    }
    console.log(`server is running at port ${process.env.port}`)
})
