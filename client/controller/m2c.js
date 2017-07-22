angular.module("expressapp").controller('m2c',function($scope,$http){
$scope.data=false;
$scope.mo=[];
var arr=[];
$scope.get=function(){
  var a=[];
   var lang=document.getElementById("Ultra").value;
      $http.get('https://api.themoviedb.org/3/search/movie?query='+$scope.moviTitle+'&api_key=4e84096d376cf74f22cc1e8d87474b75').success(function(response){
console.log(response.results);
    arr=response.results;
    console.log(arr);
    for(var i=0;i<arr.length;i++){
if(arr[i].original_language==lang){
  $scope.movieObj=arr[i];
  console.log("data");
   console.log($scope.movieObj);
  
  a.push(arr[i]);


}
}

});$scope.mo=a;
}
  $scope.m={};''
$scope.Edit=function(id){
  var cnt=0;
 for(var i=0;i<$scope.details.length;i++){
  if($scope.details[i].moviTitle!=id.title){
    cnt=cnt+1;
  }
  if(cnt==$scope.details.length)
  {
  $scope.m.moviTitle=id.title;
  $scope.m.moviYear=id.release_date;
  $scope.m.moviOverview=id.overview;
  $scope.m.moviPoster='https://image.tmdb.org/t/p/w300_and_h450_bestv2'+id.poster_path;
  console.log($scope.m)
  
      $http.post('/movie/gt2',$scope.m).success(function(response){
      console.log(response);
      alert("Movie added");
      })
      refreshmovie();
}

}
}
var refreshmovie=function(){
  $http.get('/movie/gt2').success(function(response){
    $scope.details=response;
    $scope.m1='';
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
$scope.Removem=function(id){
  $http.delete('/movie/gt2/'+id._id).success(function(response){
    console.log("deleted");
    refreshmovie();
  })
}

});