var express=require('express');
var fs = require('fs');
var router=express.Router();
var Moviemodel=require('../model/movie.js');

router.get('/gt2',function(req,res){
	console.log("get");
Moviemodel.find({},function(err,docs){
		res.json(docs);
	});
});

router.get('/gt2/:id',function(req,res){
	console.log("get by id");
	Moviemodel.find({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});

router.post('/gt2',function(req,res){
	var newdata=new Moviemodel();
	newdata.moviTitle=req.body.moviTitle;
	newdata.moviYear=req.body.moviYear;
	//newdata.moviLanguage=req.body.moviLanguage;
	newdata.moviOverview=req.body.moviOverview;
	newdata.moviPoster=req.body.moviPoster;
//	newdata.moviPoster.data = fs.readFileSync(imgPath);
//newdata.moviPoster.contentType = 'jpg';


	//newdata.moviDirector=req.body.moviDirector;
	//newdata.moviActors=req.body.moviActors;
	newdata.save(function(err)
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

router.put('/gt2/:id',function(req,res){
	console.log("update data");
	Moviemodel.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
		res.json(docs);
	});
});

router.delete('/gt2/:id',function(req,res){
	console.log("For deletion");
	Moviemodel.remove({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});

module.exports=router;