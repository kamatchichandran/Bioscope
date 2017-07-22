var express=require('express');
var router=express.Router();
var theatremodel=require('../model/theatre.js');

router.get('/gt1',function(req,res){
  console.log("get");
  theatremodel.find({},function(err,docs){
    res.json(docs);
  });
  
});

router.get('/gt1/:id',function(req,res){
  console.log("get by id");
  theatremodel.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/gt1',function(req,res){
  var newth=new theatremodel();

  newth.theatreName=req.body.theatreName;
  newth.cityName=req.body.cityName;
  
  newth.save(function(err)
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

router.put('/gt1/:id',function(req,res){
  console.log("update data");
  theatremodel.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
    res.json(docs);
  });
});

router.delete('/gt1/:id',function(req,res){
  console.log("For deletion");
  theatremodel.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

module.exports=router;