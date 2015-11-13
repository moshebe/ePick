module.exports = function (req, res, next) {
	res.rest = function (status, data, error_number, error_desc, httpStatus) {
		
		var obj = {};
		obj.status = status;
		if(status) {
			if(obj !== undefined)
				obj.data = data;
		}
		else {
			obj.error_number = error_number;
			obj.error_desc = error_desc;
			res.status(httpStatus === undefined ? 200 : httpStatus);
		}

		res.json(obj).end();
	};
	next();
};