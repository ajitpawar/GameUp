GameUpApp.controller('EventDetailsController', ['$scope', '$location', 'eventService', 'events', function($scope, $location, eventService, events){
  $scope.eventObj = eventService.getEventId();

  $scope.formatDate = function(date) {
    var date = date.split("-").join("/");
    var dateOut = new Date(date);
    return dateOut;
  };

  $scope.chargeStripeCardOfUser = function(){
      var customerID = "cus_6eu21pogeFxGh6";
      var amount = 650;

      Parse.Cloud.run('chargeStripeCardOfUser',
        { customerID: customerID,
          amount: amount
        },
        { success: function(resp) {
          console.log(resp);
          var mssg = "Your "+resp.source.brand+" was successfully charged $"+ (resp.amount)/100 + " " + resp.currency;
          // $scope.alerts.push({type:"", mssg:mssg});
          console.log(mssg);

          // save in Parse.Tickets //
        },
        error: function(error) {
          console.log(error);
        }
      });
    };


}]);