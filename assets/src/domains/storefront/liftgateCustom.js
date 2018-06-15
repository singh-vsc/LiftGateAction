
var Client = require('mozu-node-sdk/clients/commerce/order');
module.exports = function(context, callback) {
	/*var urlArr = context.request.url.split('/');
	var orderId = urlArr[urlArr.length - 1];*/
	var client = new Client(context);
	client.context['user-claims'] = null;
	/*client.getOrder({orderId:orderId}).then(function(response){
		console.log(response);
		context.response.body = 'tfttfft';
		callback();
	});
	client.context.request.orderId = orderId;*/
	client.priceOrder({refreshShipping: true}).then(function(response) {
	    context.response.body = response;
	    callback();
    }, function(err) {
    	context.response.body = err;
        callback();
    });
};
