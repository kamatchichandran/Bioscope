var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var mongoose = require('mongoose');
var bookingSchema = mongoose.Schema({
  BookID: String,
  MovieName: String,
  CityName: String,
  TheatreName: String,
  Showtime: String,
  Reservation : String,
  seatnumbers: Array,
  Amount: String

 });
module.exports= mongoose.model('Booking', bookingSchema, 'Booking');