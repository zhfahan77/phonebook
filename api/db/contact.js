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

module.exports = {
    getContacts
}