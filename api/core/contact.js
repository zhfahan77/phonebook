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

const searchContacts = (Params, DB) => {
	return new Promise((resolve, reject) => {
		if(!Params.mobileNumber) {
			return reject(ErrMsg.RequiredFieldNotFound)
		}

		DB
			.searchContacts(Params)
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

const editContact = (Params, Data, DB) => {
	return new Promise((resolve, reject) => {
		if(!Params.mobileNumber || !Data.mobileNumber || !Data.name) {
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

const deleteContact = (Params, DB) => {
	return new Promise((resolve, reject) => {
		if(!Params.mobileNumber) {
			return reject(ErrMsg.RequiredFieldNotFound)
		}

		DB
			.deleteContact(Params)
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
	searchContacts,
	editContact,
	deleteContact
}