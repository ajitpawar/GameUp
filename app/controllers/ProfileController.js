GameUpApp.controller('ProfileController', ['$scope', '$rootScope', '$location', function($scope,$rootScope,$location){

	$scope.userprofile = {
        name: Parse.User.current().getUsername(),
        email: Parse.User.current().getEmail() == null ? "not set" : Parse.User.current().getEmail()
      };
}]);