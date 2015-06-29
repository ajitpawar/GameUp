var GameUpApp = angular.module('GameUpApp', ['ngResource', 'ngRoute', 'ngMessages', 'satellizer']);

GameUpApp.config(function($routeProvider) {
    $routeProvider
    .when('/home', {
      controller: 'HomeController',
      templateUrl: 'app/views/home.html'
    })
    .when('/create_event', {
      controller: 'EventController',
      templateUrl: 'app/views/create_event.html'
    })
    .otherwise({
      redirectTo: '/'
    });

});