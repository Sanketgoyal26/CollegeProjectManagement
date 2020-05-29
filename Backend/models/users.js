var mongoose = require('mongoose')

var userDetails=new mongoose.Schema({
    name:String,
    username:String,
    password:String
})

module.exports=mongoose.model("User", userDetails)

