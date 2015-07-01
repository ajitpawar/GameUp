GameUpApp.controller('EventController', ['$scope', '$location', 'events', function($scope, $location, events){
  $scope.createEvent = function(form){
    events.create(form)
      .then(function(){
        $location.path('/');
      }, function(){
        $scope.error = "There was an error when saving your event.";
      })
  };

  $scope.retrieveGameList = function(){
    var Games = Parse.Object.extend("Game");
    var query = new Parse.Query(Games);

    //TODO: retrieve list of games from Parse and load them into the Game type drop-down list
  };

}]);