// Require all necessary files
const express = require("express"),
router = express.Router(),
Utils = require("../utils/utils.js");

// Health
router
	.route("/health")
	.get(Utils.HealthCheck)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;