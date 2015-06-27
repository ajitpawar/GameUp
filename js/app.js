Parse.initialize("gtqTs8Mqc9MdXtS8UiFWBIhcxCjAS1SVwuMwnl26", "9VawOubEqtZK271El0DzWO8wDCSy8txlXsSUwcLZ");

var GameUpApp = angular.module('GameUpApp', ['ngRoute']);

GameUpApp.run(['$rootScope', function($scope) {
  $scope.scenario = 'Log in';
  $scope.currentUser = Parse.User.current();
  
  $scope.signUp = function(form) {
    var user = new Parse.User();
    user.set("email", form.email);
    user.set("username", form.username);
    user.set("password", form.password);
    
    user.signUp(null, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to sign up:  " + error.code + " " + error.message);
      }
    });    
  };
  
  $scope.logIn = function(form) {
    Parse.User.logIn(form.username, form.password, {
      success: function(user) {
        $scope.currentUser = user;
        $scope.$apply();
      },
      error: function(user, error) {
        alert("Unable to log in: " + error.code + " " + error.message);
      }
    });
  };
  
  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;
  };

}]);


GameUpApp.config(function ($routeProvider) { 
  $routeProvider 
    .when('/create_event', {
      controller: 'EventController',
      templateUrl: 'views/create_event.html'
    });
});
