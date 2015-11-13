var Promise = require('bluebird');
var request = require('request');
var parseStringCallbacks = require('xml2js');
var xml2js = Promise.promisifyAll(parseStringCallbacks);
var requestAsync = require('request-promise');

module.exports = {
	getProductInfo: function(productId, req, res){
		 return requestAsync("http://open.api.ebay.com/shopping?callname=GetSingleItem&responseencoding=json&appid=eBay6f17a-40e8-48d3-9f0e-a9fedc23fc7&siteid=0&version=515&ItemID=" + productId).then(function(response){
		 	return xml2js.parseStringAsync(response).then(function (result) {
		 		var item = result.GetSingleItemResponse.Item[0];
		 		productInfo = {};
		 		productInfo.picture = item.PictureURL[0];
		 		productInfo.title = item.Title[0]; 
		 		productInfo.url = item.ViewItemURLForNaturalSearch[0];

				return productInfo;
			});
		});
	}

}