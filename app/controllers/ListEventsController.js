GameUpApp.controller('ListEventsController', ['$scope', '$location', 'eventService', function($scope, $location, eventService){

  $scope.eventList = [];
  $scope.promotedEventList = [];

  $scope.retrieveEventList = function(){
    var events = Parse.Object.extend("Event");
    var query = new Parse.Query(events);
    query.limit(10);
    return query.find();
  };

  $scope.retrievePromotedEventList = function(){
    var query = new Parse.Query("Event");
    query.equalTo("isPromoted", true);
    return query.find();
  };

  $scope.retrieveEventList().then(function(data) {
    $scope.eventList.push(data);
  });

  $scope.retrievePromotedEventList().then(function(data) {
    $scope.promotedEventList.push(data);
  });


  $scope.formatDate = function(date){
    var date = date.split("-").join("/");
    var dateOut = new Date(date);
    return dateOut;
  };

  $scope.openDetail = function(eventObj) {
    eventService.setEventId(eventObj);
    $location.path("/events/" + eventObj.id);
    //$location.path("/events/IcQwR5oKQC");
  };

}]);