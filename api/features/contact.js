const Core = require("../core/contact.js"),
    DB = require("../db/contact.js"),
    logger = require("../utils/logger.js");

const getContacts = (req, res) => {
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

const searchContacts = (req, res) => {
    Core
        .searchContacts(req.params, DB)
        .then(result => {
            res.status(200).json(result)
            logger.info(res.locals.reqID + " " + 200)
        })
        .catch(err => {
            res.status(err.statusCode || 500).json(err)
            logger.error(res.locals.reqID + " " + JSON.stringify(err))
        })
}

const editContact = (req, res) => {
    Core
        .editContact(req.params, req.body, DB)
        .then(result => {
            res.status(200).json(result)
            logger.info(res.locals.reqID + " " + 200)
        })
        .catch(err => {
            res.status(err.statusCode || 500).json(err)
            logger.error(res.locals.reqID + " " + JSON.stringify(err))
        })
}

const deleteContact = (req, res) => {
    Core
        .deleteContact(req.params, DB)
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
    getContacts,
    searchContacts,
    editContact,
    deleteContact
}