GameUpApp.controller('EventDetailsController', ['$scope', '$location', 'eventService', 'events', function($scope, $location, eventService, events){
  var eventId = $location.path().replace('/events/', '');

  $scope.eventObj = null;
  
  events.getEvent(eventId).then(function(data) {
    $scope.eventObj = data[0];
  });

  $scope.formatDate = function(date) {
    var date = date.split("-").join("/");
    var dateOut = new Date(date);
    return dateOut;
  };

}]);