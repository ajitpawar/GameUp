GameUpApp.controller('EventController', ['$scope', '$location', 'events', function($scope, $location, events){

  $scope.createEvent = function(form){
    events.create(form)
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

    $scope.allGames = events.getGamesList();

    // events.getGamesList().then(function(result){
    //     debugger;
    //     $scope.allGames = result;
    //   }, function(){
    //     $scope.error = "There was an error loading the games";
    //   });
    // var Games = Parse.Object.extend("Game");
    // var query = new Parse.Query("Game");
    
    // query.each(function(result){
    //   //console.log(result.attributes.Name);
    //   // Idealy this is implemented with Jquery as this seems like a lot.
    //   var node = document.createElement("option");                 
    //   var textnode = document.createTextNode(result.attributes.Name);
    //   // $('#game').append("<option>" + result.attributes.Name + "</option>");
    //   //node.appendChild(textnode);
    //   //document.getElementById("game").appendChild(node);
    // });


  };

  // Retrieve the games list from parse on page load.
  debugger;
  $scope.populateGamesList();

}]);