var express=require('express');
var router=express.Router();
var Citymodel=require('../model/city.js');

router.get('/gt',function(req,res){
	console.log("get");
	Citymodel.find({},function(err,docs){
		res.json(docs);
	});
});

router.get('/gt/:id',function(req,res){
	console.log("get by id");
	Citymodel.find({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});

router.post('/gt',function(req,res){
	var newdata=new Citymodel();
	newdata.City=req.body.City;
	
	newdata.save(function(err)
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

router.put('/gt/:id',function(req,res){
	console.log("update data");
	Citymodel.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
		res.json(docs);
	});
});

router.delete('/gt/:id',function(req,res){
	console.log("For deletion");
	Citymodel.remove({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});

module.exports=router;