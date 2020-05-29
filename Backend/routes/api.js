var express=require('express')
var router=express.Router()
var jwt=require('jsonwebtoken')
var cors=require('cors')

var User = require('../models/users')

process.env.SECRET_KEY = 'secret'

router.post('/login', function(req, res)
{
    let userData=req.body
    User.findOne({username:userData.username}, (error, user)=>
    {
        if(error)
        {
            console.log(error)
        }
        else if(!user)
        {
            res.status(401).send("Invalid Username")
        }
        else if(user.password!==userData.password)
        {
            res.status(401).send("Invalid password")
        }
        else{
            
            const payload = {
                _id: user._id,
                name: user.name,
                username: user.username
              }
              let token = jwt.sign(payload, process.env.SECRET_KEY)
              res.status(200).send(token)
              
        }
    })
    
})
    

module.exports=router