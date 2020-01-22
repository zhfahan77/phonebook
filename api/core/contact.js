const ErrMsg = require("../utils/errmsg.js")

let getContacts = (DB) => {
	return new Promise((resolve, reject) => {
		DB
			.getContacts()
			.then(result => {
				if(!result.length) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				reject(err)
			})
	})
}

module.exports = {
    getContacts
}