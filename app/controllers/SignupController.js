GameUpApp.controller('SignupController', ['$scope', '$rootScope', '$location', function($scope,$rootScope,$location){


    $scope.signup = function() {
	    var user = new Parse.User();
	    user.set("username", $scope.username);
	    user.set("password", $scope.password);

	    user.signUp(null, {
	      success: function(user) {
	        $scope.currentUser = user;
	        $scope.$apply();
	        $location.path("/");
	      },
	      error: function(user, error) {
	        alert("Error: " + error.message + " (" + error.code + ")");
	      }
	    });
    };

}]);