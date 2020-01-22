const ErrMsg = require("../utils/errmsg.js")

const getContacts = (DB) => {
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

const getContact = (Params, DB) => {
	return new Promise((resolve, reject) => {
		if(!Params.mobileNumber) {
			return reject(ErrMsg.RequiredFieldNotFound)
		}

		DB
			.getContact(Params)
			.then(result => {
				if(!result) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				reject(err)
			})
	})
}

const editContact = (Params, Data, DB) => {
	return new Promise((resolve, reject) => {
		if(!Params.mobileNumber || !Data.mobileNumber) {
			return reject(ErrMsg.RequiredFieldNotFound)
		}

		DB
			.editContact(Params, Data)
			.then(result => {
				if(!result) {
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
	getContacts,
	getContact,
	editContact
}