GameUpApp.factory('events', ['$q', function($q){
  var service = {};

  service.create = function(event){
    var deferred = $q.defer();
    var EventObject = Parse.Object.extend("Event");
    var eventObject = new EventObject();

    eventObject.set("eventName", event.eventname);
    eventObject.set("eventLocation", event.eventlocation);
    eventObject.set("eventDate", event.eventdate);
    eventObject.set("eventTime", event.eventtime);
    eventObject.set("eventPrice", event.eventprice);
    eventObject.set("eventDescription", event.eventdescription);

    eventObject.save(null, {
      success: deferred.resolve,
      error: deferred.reject
    });

    return deferred.promise;
  };

  return service;
}]);