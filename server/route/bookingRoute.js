var express=require('express');
var router=express.Router();
var Bookingmodel=require('../model/booking.js');

router.get('/gt5',function(req,res){
	console.log("get");
	Bookingmodel.find({},function(err,docs){
		res.json(docs);
	});
});

router.get('/gt5/:id',function(req,res){
	console.log("get by id");
	Bookingmodel.find({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});

router.post('/gt5',function(req,res){
	var newdata=new Bookingmodel();
	newdata.BookID=req.body.BookID;
	newdata.MovieName=req.body.MovieName;
	newdata.CityName=req.body.CityName;
	newdata.TheatreNam=req.body.TheatreNam;
	newdata.Showtime=req.body.Showtime;
	newdata.Reservation=req.body.Reservation;
	newdata.seatnumbers=req.body.seatnumbers;
	newdata.Amount=req.body.Amount;
	
	
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

router.put('/gt5/:id',function(req,res){
	console.log("update data");
	Bookingmodel.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
		res.json(docs);
	});
});

router.delete('/gt5/:id',function(req,res){
	console.log("For deletion");
	Bookingmodel.remove({_id:req.params.id},function(err,docs){
		res.json(docs);
	});
});

module.exports=router;