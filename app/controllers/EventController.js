GameUpApp.controller('EventController', ['$scope', '$location', 'events', function($scope, $location, events){

  $scope.createEvent = function(form){
    // lookup game object with the game name that was selected in the form.
    var gameName = form.eventgame.gameObject.attributes.Name;

    angular.forEach($scope.allGameObjects, function(value){
      debugger;
      if (value.gameObject.attributes.Name == gameName){
        gameObject = value.gameObject;
      }
    });
    /*
    for (int i = 0; i < $scope.allGameObjects; i ++){
      var currentObject = allGameObjects[i].gameObject
      if (currentObject.attributes.Name == gameName){
        gameObject = currentObject;
      }
    }
    */

    events.create(form, gameObject)
      .then(function(){
        $location.path('/');
      }, function(){
        $scope.error = "There was an error saving your event.";
      })
  };

  // $scope.allGames = 
  // [
  //   {
  //     gameTitle: "Test"
  //   },
  //   {
  //     gameTitle: "Test2"
  //   }
  // ]

  // $scope.form = {type : $scope.allGames[0].gameTitle};

  $scope.populateGamesList = function(){

    // Game objects
    $scope.allGameObjects = events.getAllGameObjects();


  };

  // Retrieve the games list from parse on page load.
  $scope.populateGamesList();

}]);