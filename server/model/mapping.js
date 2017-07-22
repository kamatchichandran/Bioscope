var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var router=express.Router();
router.use(bodyparser.urlencoded({extended:true}));



var mappingSchema = mongoose.Schema({
    movieTitle: String,
    cityName: String,
    theatreName: String,
    showTime: String,
    fromDate: String,
    toDate: String,
    moviPoster: String
    /*moviLanguage: String,
    moviGenre: String,
    moviPoster: String,
    moviDirector: String,
    moviActors: String,
    theatreSeats: String,
    ticketPrice: String,
    remSeats: String*/
 });

module.exports= mongoose.model('Mapping', mappingSchema, 'Mapping');