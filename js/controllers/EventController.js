app.controller('EventController', ['$rootScope', function($scope){
  $scope.createEvent = function(form){
    alert("test");
    var EventObject = Parse.Object.extend("Event"); 
    var eventObject = new EventObject();

    eventObject.set("eventName", form.eventname);
    eventObject.set("eventLocation", form.eventlocation);

    eventObject.save(null, {
      success: function(eventOBject){
        alert('successfully saved event details');
      },
      error: function(eventObject, error){
        alert('Error when saving, ' + error.message);
      }
    });
  };

}]);