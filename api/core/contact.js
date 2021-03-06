const ErrMsg = require("../utils/errmsg.js")
const { phone_regex } = require("../utils/utils.js");

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

		if(!phone_regex.test(Params.mobileNumber)) {
			return reject(ErrMsg.NotAValidPhoneNumber)
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

		if( !phone_regex.test(Data.mobileNumber) || !phone_regex.test(Params.mobileNumber)) {
			return reject(ErrMsg.NotAValidPhoneNumber)
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

		if(!phone_regex.test(Params.mobileNumber)) {
			return reject(ErrMsg.NotAValidPhoneNumber)
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

const addContact = (Data, DB) => {
	return new Promise((resolve, reject) => {
		if(!Data.mobileNumber || !Data.name) {
			return reject(ErrMsg.RequiredFieldNotFound)
		}

		if(!phone_regex.test(Data.mobileNumber)) {
			return reject(ErrMsg.NotAValidPhoneNumber)
		}

		DB
			.addContact(Data)
			.then(result => {
				if(!result) {
					return reject(ErrMsg.NotFound)
				}
				resolve(result)
			})
			.catch(err => {
				if(err.code === 11000) {
					return reject(ErrMsg.ContactAlreadyAdded)
				}
				reject(err)
			})
	})
}

module.exports = {
	getContacts,
	searchContacts,
	editContact,
	deleteContact,
	addContact
}