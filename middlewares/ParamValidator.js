module.exports = function (req,res,next) {
	req.require = function(params , method /*default is post*/) {
		method = method === undefined ? 'body' : method;
		var undef = [];
		for(var i in params) {
			if(req[method][params[i]]  === undefined || req[method][params[i]] === '')
				undef.push(params[i]);
		}
		if(undef.length > 0) {
			res.rest(false, null,400, "Invalid parameters, expected params: " + undef.join(' '));
			return false;
		}
		else {
			return true;
		}
	};
	next();
	
};