Parse.initialize("gtqTs8Mqc9MdXtS8UiFWBIhcxCjAS1SVwuMwnl26", "9VawOubEqtZK271El0DzWO8wDCSy8txlXsSUwcLZ");

var GameUpApp = angular.module('GameUpApp', ['ngRoute']);

GameUpApp.run(['$rootScope', function($scope) {
  $scope.currentUser = Parse.User.current();
  
  $scope.signUp = function(form) {
    var user = new Parse.User();
    user.set("username", form.signup_username);
    user.set("password", form.signup_password);
    
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
    Parse.User.logIn(form.login_username, form.login_password, {
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
    window.location.href = '/';
  };

}]);


GameUpApp.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', {
      controller: 'HomeController',
      templateUrl: '/views/home.html'
    })
    .when('/create_event', {
      controller: 'EventController',
      templateUrl: 'views/create_event.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
