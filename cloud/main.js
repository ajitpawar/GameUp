
// Setup Stripe
var Stripe = require('stripe');
var STRIPE_SECRET_KEY = 'sk_test_345h7QesWKcqZHsydyOiJd1l';
Stripe.initialize(STRIPE_SECRET_KEY);


Parse.Cloud.define("addStripeCardToUser", function(request, response)
{
	Parse.Cloud.httpRequest({
	    method : 'POST',
	    url : 'https://api.stripe.com/v1/tokens',
	    headers : {
	        'Authorization' : 'Bearer '+STRIPE_SECRET_KEY
	    },
	    body : {
	        "card[number]" : request.params.payload.number,
	        "card[exp_month]" : request.params.payload.month,
	        "card[exp_year]" : request.params.payload.year,
	        "card[cvc]" : request.params.payload.cvc
	    },
	    success : function(httpResponse) {
	        response.success(httpResponse.data.card.id);		// returns cardID
	    },
	    error : function(err) {
	        response.error(err);
	    }
	});
});



Parse.Cloud.define("getStripeToken", function(request, response)
{
	Stripe.Tokens.retrieve(
		request.params.tokenID
	,{
	  success: function(httpResponse) {
	    response.success(httpResponse);		// returns token
	  },
	  error: function(err) {
	    response.error(err);
	  }
	});
});


Parse.Cloud.define("chargeStripeCardOfUser", function(request, response)
{
	Stripe.Charges.create({
	  amount: request.params.amount,
	  currency: "usd",
	  customer: request.params.customerID
	},
	{
	  success: function(httpResponse) {
	    response.success(httpResponse);
	  },
	  error: function(err) {
	    response.error(err);
	  }
	});

});
