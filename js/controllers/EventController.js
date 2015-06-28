GameUpApp.controller('EventController', ['$scope', function($scope){
  $scope.createEvent = function(form){
    var EventObject = Parse.Object.extend("Event"); 
    var eventObject = new EventObject();

    eventObject.set("eventName", form.eventname);
    //eventObject.set("eventLocation", form.eventlocation);

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

}]);