angular.module("expressapp").controller('movieController',function($scope,$http){
$scope.data=false;
//movie
var refreshmovie=function(){
	$http.get('/movie/gt2').success(function(response){
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
	$http.post('/movie/gt2',$scope.m).success(function(response){
		console.log("Data add successfully");
		refreshmovie();
	});

}

$scope.updatem=function(){
	$http.put('/movie/gt2/'+$scope.m._id,$scope.m).success(function(response){
		console.log("Updated");
		refreshmovie();
	})
}
$scope.Editm=function(id){
	$http.get('/movie/gt2/'+id._id).success(function(response){
		$scope.m=response[0];
	});
}
$scope.Removem=function(id){
	$http.delete('/movie/gt2/'+id._id).success(function(response){
		console.log("deleted");
		refreshmovie();
	})
}
});