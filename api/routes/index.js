// Require all necessary files
const express = require("express"),
router = express.Router(),
Contacts = require("../features/contact.js"),
Utils = require("../utils/utils.js");

// Health
router
	.route("/health")
    .get(Utils.HealthCheck)

router
	.route("/contacts")
    .get(Contacts.getContacts)
    .post(Contacts.addContact)

router
	.route("/contacts/:mobileNumber")
	.get(Contacts.searchContacts)
	.put(Contacts.editContact)
	.delete(Contacts.deleteContact)

// Error handling if bad request
router
    .route('*')
    .all(Utils.RouteExceptionHandler) // Route Exception

// export the router module
module.exports = router;