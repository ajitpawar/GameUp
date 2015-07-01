angular.module('GameUpApp')
  .controller('NavbarController', function($scope) {
    $scope.isAuthenticated = function() {
    	if ($scope.currentUser === null)
	      return false;
	 	return true;
    };
  });