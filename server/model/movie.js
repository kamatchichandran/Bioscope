var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));
var movieSchema = mongoose.Schema({

  moviTitle:String,
  moviYear:String,
 // moviLanguage: String,
 // moviGenre: String,
 moviOverview:String,
  moviPoster: String
  //moviPoster: { data: Buffer, contentType: String },
  //moviDirector: String,
 // moviActors: String
 });
module.exports= mongoose.model('Movie', movieSchema, 'Movie');