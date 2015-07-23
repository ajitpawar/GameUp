GameUpApp.factory('events', ['$q', function($q){
  var service = {};

  service.create = function(event, gameObject){
    var deferred = $q.defer();
    var EventObject = Parse.Object.extend("Event");
    var eventObject = new EventObject();

    eventObject.set("eventName", event.eventname);
    eventObject.set("eventLocation", event.eventlocation);
    eventObject.set("eventDate", event.eventdate);
    eventObject.set("eventTime", event.eventtime);
    eventObject.set("eventGame", gameObject);
    eventObject.set("eventPrice", event.eventprice);
    eventObject.set("eventDescription", event.eventdescription);

    eventObject.save(null, {
      success: deferred.resolve,
      error: deferred.reject
    });

    return deferred.promise;
  };

  service.getAllGameObjects = function(){
    // var deferred = $q.defer();
    var gameObjects = [];
    var query = new Parse.Query("Game");

    query.each(function(result){
      gameObjects.push(
        {
          // Save the game name, and the game object in an array.
          gameObject: result
        });
    });
    // deferred.resolve;
    // return deferred.promise;
    return gameObjects;
  };

  service.getEvent = function(eventId){
    var eventObj = Parse.Object.extend("Event");
    var query = new Parse.Query(eventObj);
    query.equalTo('objectId', eventId);
    return query.find();
  };

  return service;
}]);

GameUpApp.service('eventService', function() {
  var eventId;

  return {
    getEventId: function() {
      return eventId;
    },
    setEventId: function(id) {
      eventId = id;
    }
  };
});