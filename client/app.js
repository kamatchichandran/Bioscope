var app=angular.module("expressapp",["ngRoute"]);

app.config(function($routeProvider,$locationProvider){
	$routeProvider.when('/',{
		templateUrl:'view/index.html',
		
	})
	.when('/city',{
		templateUrl:'view/city.html',
		controller:'cityController'
	})

	.when('/theatre',{
		templateUrl:'view/theatre.html',
		controller:'theatreController'
	})
	.when('/movie',{
		templateUrl:'view/m1.html',
		//controller:'movieController'
		controller:'m2c'
	})
	.when('/timing',{
		templateUrl:'view/timing.html',
		controller:'timingController'
	})
	.when('/mapping',{
		templateUrl:'view/mapping.html',
		controller:'mappingController'
	})
	.when('/booking',{
		templateUrl:'view/b1.html',
		controller:'bookingController'
	})
	.when('/register',{
		templateUrl:'view/register.html',
		controller:'registerController'
	})
	.when('/home',{
		templateUrl:'view/home.html'
	})
	.when('/login',{
		templateUrl:'view/login.html',
		controller:'loginController'
	});

});
