const express=require("express")
const {connection}=require("./config/db")
const{UserRouter}=require("./routes/User.route")
const{ClassifiedRouter}=require("./routes/classfied.route")

require("dotenv").config()
let cors = require("cors");


app=express()
app.use(cors());
app.use(express.json())
app.use("",UserRouter)
app.use("",ClassifiedRouter)

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
