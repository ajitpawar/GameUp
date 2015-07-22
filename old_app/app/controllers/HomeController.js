GameUpApp.controller('HomeController', ['$scope', function($scope){

	function getUser(){
		if(!Parse.User.current())
			return "gamer";
		return Parse.User.current().getUsername();
	}

  	$scope.userprofile = {
        name: getUser()
    };

}]);