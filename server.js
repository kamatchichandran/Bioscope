var express= require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var path=require('path');
var app=express();


var cityRoute =require('./server/route/cityRoute.js');
var theatreRoute =require('./server/route/theatreRoute.js');
var timingRoute =require('./server/route/timingRoute.js');
var movieRoute =require('./server/route/movieRoute.js');
var mappingRoute =require('./server/route/mappingRoute.js');
var bookingRoute =require('./server/route/bookingRoute.js');
// var login=require('./server/route/datarouter.js');

app.use(bodyparser.json());
app.use('/',express.static(path.join(__dirname,'./client')));

mongoose.connect('mongodb://localhost:27017/sampledb');
var db=mongoose.connection;

db.on('open',function()
{
 console.log("Connected to db");

});

db.on('error',function(err){
	console.log(err);
})


app.use('/city',cityRoute);
app.use('/theatre',theatreRoute);
app.use('/movie',movieRoute);
app.use('/timing',timingRoute);
app.use('/mapping',mappingRoute);
app.use('/booking',bookingRoute);
// app.use('/signin',login);
app.listen(4567,function(req,res){
	console.log("localhost is running : 4567");
})
