Parse.initialize("gtqTs8Mqc9MdXtS8UiFWBIhcxCjAS1SVwuMwnl26", "9VawOubEqtZK271El0DzWO8wDCSy8txlXsSUwcLZ");

var GameUpApp = angular.module('GameUpApp', ['ngRoute', 'ngMessages', 'parse-angular', 'ngMap']);


GameUpApp.run(['$rootScope', function($scope) {

  $scope.currentUser = Parse.User.current();

  $scope.alerts = {};

  $scope.user = {
    name: Parse.User.current()==null ? "Guest" : Parse.User.current().getUsername(),
    email: Parse.User.current() == null || Parse.User.current().get("email") == null ? "johndoe@example.com" : Parse.User.current().get("email"),
    picture: Parse.User.current() == null || Parse.User.current().get("profileImg") == null? 'assets/img/johndoe.png' : Parse.User.current.get("profileImg"),
    stripe: {
        customerID : "cus_6eu21pogeFxGh6",
        recipientID : "rp_16RazQA1KKgMhpkLTLpIgXgp",
        paid : true,
        amount : 850
    }
  };

  $scope.alerts = [];

  $scope.logOut = function(form) {
    Parse.User.logOut();
    $scope.currentUser = null;
  };

  $scope.isAuthenticated = function() {
    if ($scope.currentUser === null)
        return false;
    return true;
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


// directive
GameUpApp.directive('dismissOnTimeout', ['$timeout', function($timeout) {
  return {
    // require: 'alert',
    link: function(scope, element, attrs) {
      $timeout(function(){
        scope.closeAlert();
      }, parseInt(attrs.dismissOnTimeout, 10));
    }
  }
}]);
