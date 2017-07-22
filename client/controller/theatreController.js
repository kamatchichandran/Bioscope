angular.module("expressapp").controller('theatreController',function($scope,$http){
$scope.data=false;
var loadCities = function() {
        $http.get('/city/gt').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details1 = response;
            $scope.c = "";
            console.log('successfully Read')
        });
    };
    loadCities();
var refreshtheatre=function(){
	$http.get('/theatre/gt1').success(function(response){
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
	$http.post('/theatre/gt1',$scope.th).success(function(response){
		console.log("Data add successfully");
		refreshtheatre();
	});

}

$scope.updateth=function(){
	$http.put('/theatre/gt1/'+$scope.th._id,$scope.th).success(function(response){
		console.log("Updated");
		refreshtheatre();
	})
}
$scope.Editth=function(id){
	$http.get('/theatre/gt1/'+id._id).success(function(response){
		$scope.th=response[0];
	});
}
$scope.Removeth=function(id){
	$http.delete('/theatre/gt1/'+id._id).success(function(response){
		console.log("deleted");
		refreshtheatre();
	})
}
});

