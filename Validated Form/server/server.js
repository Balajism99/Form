const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("<h1>Home</h1>")
})

app.post('/createUser', (req, res)=>{
    const userDetails=req.body;
    console.log(userDetails)
    res.send(userDetails)
})


app.listen(9000, err =>{
    if(err) console.log(err)
    console.log("Server is running in port 9000")
})