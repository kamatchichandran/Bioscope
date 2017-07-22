angular.module("expressapp").controller('bookingController',function($scope,$http){
$scope.data=false;
$scope.d1=false;
var loadMovies = function() {
        $http.get('/mapping/gt4').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details2 = response;
            $scope.mp = "";
            console.log('successfully Read')
        });
    };
    loadMovies();


    var refreshmapping=function(){
	$http.get('/mapping/gt4').success(function(response){
		$scope.details3=response;
		$scope.mp='';
		if($scope.details3.length>0)
		{
$scope.d1=true;
		}
		else
		{
			$scope.d1=false;
		}
		
	});

};
refreshmapping();
    var loadPoster = function() {
        $http.get('/movie/gt2').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details1 = response;
            $scope.m = "";
            console.log('successfully Read')
        });
    };
    loadPoster();
var refreshbooking=function(){
	$http.get('/booking/gt5').success(function(response){
		$scope.details=response;
		$scope.b='';
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
refreshbooking();

$scope.Addb=function()
{
	$http.post('/booking/gt5',$scope.b).success(function(response){
		console.log("Data add successfully");
		refreshbooking();
	});

}

$scope.updateb=function(){
	$http.put('/booking/gt5/'+$scope.b._id,$scope.b).success(function(response){
		console.log("Updated");
		refreshbooking();
	})
}
$scope.Editb=function(id){
	$http.get('/booking/gt5/'+id._id).success(function(response){
		$scope.b=response[0];
	});
}
$scope.Removeb=function(id){
	$http.delete('/booking/gt5/'+id._id).success(function(response){
		console.log("deleted");
		refreshbooking();
	})
}
});