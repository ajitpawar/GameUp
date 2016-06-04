GameUpApp.controller('LoginController', ['$scope', '$rootScope', '$location', function($scope,$rootScope,$location){

  	function loginSuccess(user) {
	    $rootScope.$apply(function() {
	      $rootScope.currentUser = Parse.User.current();
	      $location.path("/");
	    });
  	}

  	function loginFailure(user, error) {
   		alert("Error: " + error.message + " (" + error.code + ")");
  	}

    $scope.login = function() {
		var username = $scope.username;
	    var password = $scope.password;

	    Parse.User.logIn(username, password, {
	      success: loginSuccess,
	      error: loginFailure
	    });
    };



}]);