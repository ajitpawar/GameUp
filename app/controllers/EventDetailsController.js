GameUpApp.controller('EventDetailsController', ['$scope', '$location', 'eventService', 'events', function($scope, $location, eventService, events){

  var TicketObject = Parse.Object.extend("Tickets");
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

  var clock = $('.your-clock').FlipClock(86000, {
    // clockFace: 'DailyCounter',
    countdown: true
    // zoom: 0.3
  });

	$scope.closeAlert = function(index) {
    	$scope.alerts.splice(index, 1);
  	};

  $scope.chargeStripeCardOfUser = function(){

    	var customerID = $scope.user.stripe.customerID;
    	var recipientID = $scope.user.stripe.recipientID;
    	var paid = $scope.user.stripe.paid;
    	var amount = $scope.user.stripe.amount;

    	// Create & populate new ticket object
    	var ticketObject = new TicketObject();

      Parse.Cloud.run('chargeStripeCardOfUser',
        { customerID: customerID,
          amount: amount
        },
        { success: function(resp) {

      // console.log(resp);
			var mssg = "Your "+resp.source.brand+" was successfully charged $"+ (resp.amount)/100 + " " + resp.currency;
			alert(mssg);
      $scope.alerts.push({type:"success", mssg:mssg});

    	// save ticket in Parse.Tickets
    	ticketObject.set("event", $scope.eventObj);
			ticketObject.set("user", $scope.currentUser);
			ticketObject.set("paid", paid);
			ticketObject.set("stripeCustomerID", customerID);
			ticketObject.set("stripeRecipientID", recipientID);
			ticketObject.set("amount", amount);
			// console.log(ticketObject.attributes);

			ticketObject.save(null, {
			  success: function(ticketObject) {
			  	// console.log(ticketObject);
			    // console.log('New object created with objectId: ' + ticketObject.id);
			  },
			  error: function(ticketObject, error) {
			    console.log('Failed to create new object, with error code: ' + error.message);
			  }
			});
        },

        error: function(error) {
          console.log(error);
        }
      });


    };


}]);