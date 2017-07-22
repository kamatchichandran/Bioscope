angular.module("expressapp").controller('m1c',function($scope,$http){
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

 $scope.Addm = function(movi,year) {
    console.log(movi);
   
    $http.get('https://api.themoviedb.org/3/search/movie?query='+movi+'&api_key=4e84096d376cf74f22cc1e8d87474b75').success(function(response)
    
    {


        console.log(response);
        var movieObj = {};
        for (var key in response) {
            if (key == 'Title' || key == 'Year' || key == 'Language' || key == 'Poster' || key == 'Genre' || key == 'Director' || key == 'Actors' || key == 'Plot') {
                movieObj[key] = response[key];

            }
        }
       // $http.defaults.headers.post["Content-Type"] = "application/json";

        $http({
                method: 'POST',
                url: '/movie/movie',
                 headers: {'Content-Type': 'application/json'},
                data: movieObj
            })
            .then(function(response) {
                console.log(response);
                console.log("CREATE IS SUCCESSFUL");
                $log.info(response);
                refreshmovie();
            });


           });
    console.log($scope.movi);

};

    $scope.Removem = function (movie) {
        //console.log(id);
        $http.delete('/movie/deleteMovie/' + movie._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
           refreshmovie();
        });
    };

    $scope.Editm = function (movie) {
         $http.get('/movie/getMovie/' + movie._id).success(function (response) {
            $scope.movi = response[0];
        });
    };

    $scope.updatem = function () {
        console.log("REACHED UPDATE");
        console.log($scope.movi._id);
        $http.put('/movie/updateMovie/' + $scope.movi._id, $scope.movi).success(function (response) {
            console.log(response);
            refreshmovie();
        })
    }
});
