angular.module("expressapp").controller('mappingController',function($scope,$http){
$scope.data=false;
var loadMovies = function() {
        $http.get('/movie/gt2').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details1 = response;
            $scope.m = "";
            console.log('successfully Read')
        });
    };
    loadMovies();
var loadCities = function() {
        $http.get('/city/gt').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details2 = response;
            $scope.c = "";
            console.log('successfully Read')
        });
    };
    loadCities();
    var loadTheatre = function() {
        $http.get('/theatre/gt1').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details3 = response;
            $scope.th = "";
            console.log('successfully Read')
        });
    };
    loadTheatre();
    var loadTiming = function() {
        $http.get('/timing/gt3').success(function(response) {
            console.log('READ IS SUCCESSFUL');
            $scope.details4 = response;
            $scope.t = "";
            console.log('successfully Read')
        });
    };
    loadTiming();
var refreshmapping=function(){
	$http.get('/mapping/gt4').success(function(response){
		$scope.details=response;
		$scope.mp='';
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
refreshmapping();

$scope.Addmp=function()
{
    console.log($scope.details1);
	if($scope.details1.length>0)
    {
        for(var i=0;i<$scope.details1.length;i++)
        {
            console.log($scope.details1[i].moviTitle);
            if($scope.mp.movieTitle==$scope.details1[i].moviTitle)
            {
                $scope.mp.moviPoster=$scope.details1[i].moviPoster;
                 console.log($scope.details1[i].moviPoster);
            }
        }
    }
    console.log($scope.mp);
    $http.post('/mapping/gt4',$scope.mp).success(function(response){
		console.log("Data add successfully");
		refreshmapping();
	});

}

$scope.updatemp=function(){
	$http.put('/mapping/gt1/'+$scope.mp._id,$scope.mp).success(function(response){
		console.log("Updated");
		refreshmapping();
	})
}
$scope.Editmp=function(id){
	$http.get('/mapping/gt4/'+id._id).success(function(response){
		$scope.mp=response[0];
	});
}
$scope.Removemp=function(id){
	$http.delete('/mapping/gt4/'+id._id).success(function(response){
		console.log("deleted");
		refreshmapping();
	})
}
});

