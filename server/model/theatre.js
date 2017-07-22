var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));

var theatreSchema = mongoose.Schema({            // i am creating creating schema for theatre
	theatreName: String,
	/*theatreSeats: Number,
	ticketPrice: Number,*/
	cityName: String
});

module.exports=mongoose.model('Theatre',theatreSchema,'Theatre');   // i am defining Theatre model here
