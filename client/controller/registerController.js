angular.module("expressapp").controller('registerController',function($scope,$http){

  $scope.register= function (user){

    console.log(user);
    if(user.password== user.password2 ){
      $http.post('/register' , user).success(function(user){
        $rootScope.currentUser = user;
        console.log(user);
      });
    }
  };





});
