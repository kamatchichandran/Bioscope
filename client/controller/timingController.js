angular.module("expressapp").controller('timingController',function($scope,$http){
$scope.data=false;
//city
var refreshtiming=function(){
	$http.get('/timing/gt3').success(function(response){
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
refreshtiming();

$scope.Addt=function()
{
	$http.post('/timing/gt3',$scope.t).success(function(response){
		console.log("Data add successfully");
		refreshtiming();
	});

}

$scope.updatet=function(){
	$http.put('/timing/gt3/'+$scope.t._id,$scope.t).success(function(response){
		console.log("Updated");
		refreshtiming();
	})
}
$scope.Editt=function(id){
	$http.get('/timing/gt3/'+id._id).success(function(response){
		$scope.t=response[0];
	});
}
$scope.Removet=function(id){
	$http.delete('/timing/gt3/'+id._id).success(function(response){
		console.log("deleted");
		refreshtiming();
	})
}
});