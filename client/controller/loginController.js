angular.module("expressapp").controller('loginController',function($scope,$http){

   $scope.signInUser = function(){
      var auth = firebase.auth();
      var loginSuccess = true;
      firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password)
      .then(function (firebaseUser) {
     
        var cookieInfo = document.cookie;
        $location.path('/home');
      })
      .catch(function (error) {
        var errorCode = error.code;
        console.log(errorCode);
        var loginSuccess = false;
        var errorMessage = error.message;
        alert(errorMessage);
      })
    }
});