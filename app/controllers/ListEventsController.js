GameUpApp.controller('ListEventsController', ['$scope', '$location', function($scope, $location){

  $scope.eventList = [];
  $scope.promotedEventList = [];

  $scope.retrieveEventList = function(){
    var events = Parse.Object.extend("Event");
    var query = new Parse.Query(events);
    query.limit(100);
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

}]);