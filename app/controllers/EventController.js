GameUpApp.controller('EventController', ['$scope', '$location', 'events', function($scope, $location, events){

  $scope.createEvent = function(form){
    events.create(form)
      .then(function(){
        $location.path('/');
      }, function(){
        $scope.error = "There was an error saving your event.";
      })
  };

  $scope.populateGamesList = function(){
    $scope.allGames = events.getGamesList();
  };

  // Retrieve the games list from parse on page load.
  debugger;
  $scope.populateGamesList();

}]);