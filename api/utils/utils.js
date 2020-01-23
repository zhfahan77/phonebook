const ErrMsg = require("./errmsg.js")

const RouteExceptionHandler = function(req, res) {
    res.status(ErrMsg.BadRequest.statusCode).json(ErrMsg.BadRequest)
}

const HealthCheck = function(req, res) {
	res.status(200).json(ErrMsg.OK)
}

const phone_regex = /(^(88)?(01){1}[3456789]{1}(\d){8})$/

module.exports = {
	RouteExceptionHandler : RouteExceptionHandler,
	HealthCheck : HealthCheck,
	phone_regex
}