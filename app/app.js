Parse.initialize("gtqTs8Mqc9MdXtS8UiFWBIhcxCjAS1SVwuMwnl26", "9VawOubEqtZK271El0DzWO8wDCSy8txlXsSUwcLZ");

var GameUpApp = angular.module('GameUpApp', ['ngRoute', 'ngMessages', 'parse-angular', 'ngMap']);


GameUpApp.run(['$rootScope', function($scope) {
  $scope.currentUser = Parse.User.current();

  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;
  };

}]);


GameUpApp.config(function($routeProvider) {
    $routeProvider
    .when('/', {
      controller: 'ListEventsController',
      templateUrl: 'app/views/events.html'
    })
    .when('/create_event', {
      controller: 'EventController',
      templateUrl: 'app/views/create_event.html'
    })
    .when('/login', {
      controller: 'LoginController',
      templateUrl: 'app/views/login.html'
    })
    .when('/signup', {
      controller: 'SignupController',
      templateUrl: 'app/views/signup.html'
    })
    .when('/profile', {
      controller: 'ProfileController',
      templateUrl: 'app/views/profile.html'
    })
    .when('/events/:id', {
      controller: 'EventDetailsController',
      templateUrl: 'app/views/event_detail.html'
    })
    .when('/events', {
      controller: 'ListEventsController',
      templateUrl: 'app/views/events.html'
    })
    .when('/bracket', {
      controller: 'BracketController',
      templateUrl: 'app/views/bracket.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});