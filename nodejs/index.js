import express from "express"
import path from "path"
import mongoose from "mongoose"

mongoose.connect("mongodb://localhost:27017",{
   dbName : "backend" ,
})
.then(()=>console.log("Database Connected"))
.catch(()=>console.log(e))

const app = express()
const users = []
app.set("view engine","ejs")

app.use(express.static(path.join(path.resolve(),"public"))
)
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
   res.render("index",{name:"Sanjana"})
})


app.get("/success",(req,res)=>{
    res.render("success")
})
app.post('/',(req,res)=>{
    users.push({username:req.body.name,email:req.body.email})
    res.redirect('/success')
})

app.get("/users",(req,res)=>{
    res.json({
        users,
    })
})

app.listen(5000,()=>{
    console.log("Server is working")
})