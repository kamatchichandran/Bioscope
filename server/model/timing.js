var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


var mongoose = require('mongoose');

var showtimeSchema = mongoose.Schema({
  showTimings: String
});
module.exports=mongoose.model('Showtime',showtimeSchema,'Showtime');