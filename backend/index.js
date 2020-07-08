require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")
var bodyParser = require('body-parser')
// require("./models/user")

mongoose.connect(process.env.mongouri,{ useUnifiedTopology: true ,useNewUrlParser: true })
.then(()=>{
    console.log("connect DB")
})
.catch((err)=>{
    console.log(err)

})
// Middleware

app.use(bodyParser.json())


// Require
const auth = require("./routes/auth")
const post = require("./routes/post")



// routes
app.use("/",auth)
app.use("/",post)

app.get('/', (req, res) => res.send('Hello World!'))

const port = 8080

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))