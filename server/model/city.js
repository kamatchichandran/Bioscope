var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));
var cityschema=mongoose.Schema({
	
	City:String
	

});

module.exports=mongoose.model('City',cityschema,'City');