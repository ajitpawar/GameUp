GameUpApp.controller('EventController', ['$scope', function($scope){
  $scope.createEvent = function(form){
    var EventObject = Parse.Object.extend("Event");
    var eventObject = new EventObject();

    eventObject.set("eventName", form.eventname);
    eventObject.set("eventLocation", form.eventlocation);
    eventObject.set("eventDate", form.eventdate);
    eventObject.set("eventTime", form.eventtime);
    eventObject.set("eventPrice", form.eventprice);
    eventObject.set("eventDescription", form.eventdescription);

    eventObject.save(null, {
      success: function(eventObject){
        alert("Event successfully created!");
        //TODO: clear form.
      },
      error: function(eventObject, error){
        alert('Error when saving: ' + error.message);
      }
    });
  };

  $scope.retrieveGameList = function(){
    var Games = Parse.Object.extend("Game");
    var query = new Parse.Query(Games);

    //TODO: retrieve list of games from Parse and load them into the Game type drop-down list
  };

}]);