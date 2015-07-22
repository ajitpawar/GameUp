GameUpApp.controller('EventDetailsController', ['$scope', '$location', 'eventService', 'events', function($scope, $location, eventService, events){
  $scope.eventObj = eventService.getEventId();

  $scope.formatDate = function(date) {
    var date = date.split("-").join("/");
    var dateOut = new Date(date);
    return dateOut;
  };

}]);