angular.module("expressapp").controller('cityController',function($scope,$http){
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
});