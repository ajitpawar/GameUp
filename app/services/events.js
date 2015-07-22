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
    // BUG
    // This is failing because the parse backend expects a Pointer to a game,
    // and instead it is recieving a string.
    
    /* HOW TO SAVE A POINTER TO A GAME OBJECT??*/
    //eventObject.set("eventGame", event.eventgame);

    eventObject.set("eventPrice", event.eventprice);
    eventObject.set("eventDescription", event.eventdescription);

    eventObject.save(null, {
      success: deferred.resolve,
      error: deferred.reject
    });

    return deferred.promise;
  };

  service.getGamesList = function(){
    // var deferred = $q.defer();
    var gamesList = [];
    var query = new Parse.Query("Game");

    query.each(function(result){
      debugger;
      gamesList.push(
        {
          gameTitle: result.attributes.Name
        });
    });
    // deferred.resolve;
    // return deferred.promise;
    return gamesList;
  }

  service.getEvent = function(){

  }

  return service;
}]);