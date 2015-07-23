GameUpApp.factory('tickets', ['$q', function($q){
  var service = {};

  service.create = function(ticket, ticketObject){
    var deferred = $q.defer();
    var TicketObject = Parse.Object.extend("Tickets");
    var ticketObject = new TicketObject();

    ticketObject.set("event", event.EventObject);
    ticketObject.set("user", event.UserObject);
    ticketObject.set("paid", event.paid);
    ticketObject.set("stripeCustomerID", event.stripeCustomerID);
    ticketObject.set("stripeRecipientID", event.stripeRecipientID);
    ticketObject.set("amount", event.eventprice);

    ticketObject.save(null, {
      success: deferred.resolve,
      error: deferred.reject
    });

    return deferred.promise;
  };

  service.getAllTicketObjects = function(){

    var ticketObjects = [];
    var query = new Parse.Query("Tickets");

    query.each(function(result){
      ticketObjects.push(
        {
          // Save the game name, and the game object in an array.
          ticketObjects: result
        });
    });
    return ticketObjects;
  }
  return service;
}]);


  GameUpApp.service('ticketService', function() {
  var ticketId;

  return {
    getEventId: function() {
      return ticketId;
    },
    setEventId: function(id) {
      ticketId = id;
    }
  };
});