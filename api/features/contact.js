const Core = require("../core/contact.js"),
    DB = require("../db/contact.js"),
    logger = require("../utils/logger.js");

let getContacts = (req, res) => {
    Core
        .getContacts(DB)
        .then(result => {
            res.status(200).json(result)
            logger.info(res.locals.reqID + " " + 200)
        })
        .catch(err => {
            res.status(err.statusCode || 500).json(err)
            logger.error(res.locals.reqID + " " + JSON.stringify(err))
        })
}

module.exports = {
    getContacts
}