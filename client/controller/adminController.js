angular.module("expressapp").controller('adminController',function($scope,$http){
$scope.data=false;
//city
var refreshcity=function(){
	$http.get('/city/gt').success(function(response){
		$scope.details=response;
		$scope.c='';
		if($scope.details.length>0)
		{
$scope.data=true;
		}
		else
		{
			$scope.data=false;
		}
		
	})

}
refreshcity();

$scope.Addc=function()
{
	$http.post('/city/gt',$scope.c).success(function(response){
		console.log("Data add successfully");
		refreshcity();
	});

}

$scope.updatec=function(){
	$http.put('/city/gt/'+$scope.c._id,$scope.c).success(function(response){
		console.log("Updated");
		refreshcity();
	})
}
$scope.Editc=function(id){
	$http.get('/city/gt/'+id._id).success(function(response){
		$scope.c=response[0];
	});
}
$scope.Removec=function(id){
	$http.delete('/city/gt/'+id._id).success(function(response){
		console.log("deleted");
		refreshcity();
	})
}


//theatre

var refreshtheatre=function(){
	$http.get('/theatre/gt').success(function(response){
		$scope.details=response;
		$scope.th='';
		if($scope.details.length>0)
		{
$scope.data=true;
		}
		else
		{
			$scope.data=false;
		}
		
	})

}
refreshtheatre();

$scope.Addth=function()
{
	$http.post('/theatre/gt',$scope.th).success(function(response){
		console.log("Data add successfully");
		refreshtheatre();
	});

}

$scope.updateth=function(){
	$http.put('/theatre/gt/'+$scope.th._id,$scope.th).success(function(response){
		console.log("Updated");
		refreshtheatre();
	})
}
$scope.Editth=function(id){
	$http.get('/theatre/gt/'+id._id).success(function(response){
		$scope.th=response[0];
	});
}
$scope.Removeth=function(id){
	$http.delete('/theatre/gt/'+id._id).success(function(response){
		console.log("deleted");
		refreshtheatre();
	})
}


//movie
var refreshmovie=function(){
	$http.get('/movie/gt').success(function(response){
		$scope.details=response;
		$scope.m='';
		if($scope.details.length>0)
		{
$scope.data=true;
		}
		else
		{
			$scope.data=false;
		}
		
	})

}
refreshmovie();

$scope.Addm=function()
{
	$http.post('/movie/gt',$scope.m).success(function(response){
		console.log("Data add successfully");
		refreshmovie();
	});

}

$scope.updatem=function(){
	$http.put('/movie/gt/'+$scope.m._id,$scope.m).success(function(response){
		console.log("Updated");
		refreshmovie();
	})
}
$scope.Editm=function(id){
	$http.get('/movie/gt/'+id._id).success(function(response){
		$scope.m=response[0];
	});
}
$scope.Removem=function(id){
	$http.delete('/movie/gt/'+id._id).success(function(response){
		console.log("movie");
		refreshtheatre();
	})
}

//timing
var refreshtiming=function(){
	$http.get('/timing/gt').success(function(response){
		$scope.details=response;
		$scope.t='';
		if($scope.details.length>0)
		{
$scope.data=true;
		}
		else
		{
			$scope.data=false;
		}
		
	})

}
refreshmovie();

$scope.Addt=function()
{
	$http.post('/timing/gt',$scope.t).success(function(response){
		console.log("Data add successfully");
		refreshmovie();
	});

}

$scope.updatet=function(){
	$http.put('/timing/gt/'+$scope.t._id,$scope.t).success(function(response){
		console.log("Updated");
		refreshmovie();
	})
}
$scope.Editt=function(id){
	$http.get('/timing/gt/'+id._id).success(function(response){
		$scope.t=response[0];
	});
}
$scope.Removet=function(id){
	$http.delete('/timing/gt/'+id._id).success(function(response){
		console.log("timing");
		refreshtheatre();
	})
}
});