var express = require('express')
var bodyParser=require('body-parser')
var mongoose = require('mongoose')
var api = require('./routes/api')
var api_2=require('./routes/api_2')
var cors=require('cors')

var app=express()
app.use(cors())
const port = 5000
app.use(bodyParser.json())
mongoose.connect("mongodb://localhost/CPM", err=>{
    if(err){
        console.log("An error occured")
        console.log(err)
    }
    else{
        console.log("Database connected successfully")
    }
})

app.use('/', api)

app.use('/',api_2)

app.listen(port, (req, res)=>{
    console.log(`Server running at port ${port}`)
})