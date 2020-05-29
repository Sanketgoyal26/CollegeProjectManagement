var mongoose = require('mongoose')

var projectDetails=new mongoose.Schema({
    rollno:{type:Number, required:true},
    name:{type:String, required:true},
    project:{type:String, required:true},
    technology:{type:String, required:true},
    synopsis:{type:String, default:"NO"},
    midterm:{type:String,  default:"NO"},
    final:{type:String,  default:"NO"},
    viva:{type:String,  default:"NO"},
    marks:{type:Number,  default:0}

})

module.exports=mongoose.model("Detail", projectDetails)

