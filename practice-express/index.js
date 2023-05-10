const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const bodyParser = require("body-parser")
const router = require('./userRoutes')

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())
app.use("/api/v1",router)

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + "/index.html"))
    // res.json({
    //     name:"Abhi",
    //     email:"sanjana@gmail.com"
    // })
    
})



// app.post('/api/v1/register',(req, res)=>{
//     res.send(`Succesfully Logged in <h1>${req.body.name}</h1> , your Email is ${req.body.email}`)
//     console.log(req.body)
// })

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})