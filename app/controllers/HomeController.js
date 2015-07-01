GameUpApp.controller('HomeController', ['$scope', function($scope){

  	$scope.userprofile = {
        name: Parse.User.current().getUsername(),
    };

}]);