angular.module('GameUpApp')
  .controller('NavbarController', function($scope, $auth) {
    $scope.isAuthenticated = function() {
      return $auth.isAuthenticated();
    };
  });