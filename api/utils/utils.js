const ErrMsg = require("./errmsg.js")

const RouteExceptionHandler = function(req, res) {
    res.status(ErrMsg.BadRequest.statusCode).json(ErrMsg.BadRequest)
}

const HealthCheck = function(req, res) {
	res.status(200).json(ErrMsg.OK)
}

module.exports = {
	RouteExceptionHandler : RouteExceptionHandler,
	HealthCheck : HealthCheck
}