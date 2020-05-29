var express=require('express')
var router=express.Router()
var jwt=require('jsonwebtoken')
var cors=require('cors')

var Details=require('../models/details')

router.route('/projectlist').get((req, res) =>{
    Details.find((err, data)=>{
        if(err)
        {
            console.log(err)
        }
        else{
              res.json(data)
        }
    })
})

router.route('/newproject').post((req, res) =>{
    Details.create(req.body, (err, data)=>{
        if(err)
        {
            console.log(err)
        }

        else{
            console.log(data)
            res.json(data)
        }
    })
})

router.route('/projectupdate/:id').put((req, res) =>{
    Details.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) =>{
        if(err){
            console.log(err)
        }
        else{
            res.json(data)
            console.log("Updated Successfully")
        }
    })
})

router.route('/projectdelete/:id').delete((req, res)=>{
    Details.findByIdAndRemove(req.params.id, (err, data) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log("Deleted Successfully")
        }
    })
})

router.route('/getsingle/:id').get((req, res) => {
    Details.findById(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })

module.exports = router;