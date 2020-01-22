const Contact = require("mongoose").model("Contact")

const getContacts = function() {
    return new Promise((resolve, reject) => {
        Contact
            .find()
            .then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
    })
}

const getContact = function(Params) {
    return new Promise((resolve, reject) => {
        Contact
            .findOne({ "mobileNumber" : Params.mobileNumber })
            .then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
    })
}

const editContact = function(Params, Data) {
    return new Promise((resolve, reject) => {
        Contact
            .findOneAndUpdate({ "mobileNumber" : Params.mobileNumber, "name": Data.name }, { $set: Data }, { new : true })
            .then(result => {
                resolve(result)
            }).catch(err => {
                reject(err)
            })
    })
}

module.exports = {
    getContacts,
    getContact,
    editContact
}