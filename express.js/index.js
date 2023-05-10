const express = require('express')
const app = express()
const path = require('path')
const port = 3000

// const sanjanaMiddleware = (req,res,next)=>{
//     console.log(req)
// }

app.use(express.static(path.join(__dirname,"public")))
// app.use(sanjanaMiddleware)

app.get('/hello/:name', (req, res) => {
  res.send('Hello World!' + req.params.name)
})

app.get('/about', (req, res) => {
    // res.sendFile(path.join(__dirname,'index.html'))
    res.json({"Sanjana" : 19})
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 