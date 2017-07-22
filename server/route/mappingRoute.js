var express=require('express');
var router=express.Router();
var Mappingmodel=require('../model/mapping.js');

router.get('/gt4',function(req,res){
  console.log("get");
Mappingmodel.find({},function(err,docs){
    res.json(docs);
  });
});

router.get('/gt4/:id',function(req,res){
  console.log("get by id");
  Mappingmodel.find({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

router.post('/gt4',function(req,res){
  var mapp=new Mappingmodel();
  mapp.movieTitle=req.body.movieTitle;
  mapp.cityName=req.body.cityName;
  mapp.theatreName=req.body.theatreName;
  mapp.showTime=req.body.showTime;
  mapp.fromDate=req.body.fromDate;
  mapp.toDate=req.body.toDate;
  mapp.moviPoster=req.body.moviPoster;
  mapp.save(function(err)
  {
    if(err){
      res.json(err);
    }
    else
    {
      res.json({sucess:true});
    }
  });
});


router.put('/gt4/:id',function(req,res){
  console.log("update data");
  Mappingmodel.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
    res.json(docs);
  });
});

router.delete('/gt4/:id',function(req,res){
  console.log("For deletion");
  Mappingmodel.remove({_id:req.params.id},function(err,docs){
    res.json(docs);
  });
});

module.exports=router;