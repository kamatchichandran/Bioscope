var express=require('express');
var router=express.Router();
var timingmodel=require('../model/timing.js');

router.get('/gt3',function(req,res){
  console.log("get");
  timingmodel.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/gt3/:id',function(req,res){
  console.log("get by id");
  timingmodel.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/gt3',function(req,res){
  var newtime=new timingmodel();
  newtime.showTimings=req.body.showTimings;
  
  newtime.save(function(err)
  {
    if(err){
      res.json(err);
      console.log("err")
    }
    else
    {
      console.log("sucess")
      res.json({sucess:true});
    }
  });
});

router.put('/gt3/:id',function(req,res){
  console.log("update data");
  timingmodel.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
    res.json(docs);
  });
});

router.delete('/gt3/:id',function(req,res){
  console.log("For deletion");
  timingmodel.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

module.exports=router;