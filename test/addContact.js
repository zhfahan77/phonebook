require('should');
const Core = require("../api/core/contact.js"),
    ErrMsg = require("../api/utils/errmsg.js");

let DB = {};

describe("Add One Contact", () => {
    beforeEach(() => {
        DB.addContact = (Contact) => {
            return new Promise((resolve, reject) => {
                Contact._id = 1;
                resolve(Contact)
            })
        }
    })

    afterEach(() => {
        DB = {};
    })

    it("it should return an updated object with newly added contact", (done) => {
        
        const NewContact = {
            "mobileNumber": "8801787666111",
            "name": "test 1"
        };

        Core
            .addContact(NewContact, DB)
            .then(result => {
                result.should.be.an.Object;
                result.should.have.a.property('name').equal(NewContact.name)
                result.should.have.a.property('mobileNumber').equal(NewContact.mobileNumber)
                done();
            })
            .catch(err => {
                console.log(err);
            });
    });

    it("it should return an object with error details if no mobile number provided", (done) => {
        DB.addContact = (Contact) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const NewContact = {
            "name": "test 1"
        };

        Core.addContact(NewContact, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });

    it("it should return an object with error details if no contact name provided", (done) => {
        DB.addContact = (Contact) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const NewContact = {
            "mobileNumber": "8801787666111"
        };

        Core.addContact(NewContact, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });

    it("it should return an object with error details if invalid phone number is given", (done) => {
        DB.addContact = (Contact) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const NewContact = {
            "mobileNumber": "1787666111",
            "name": "test"
        };

        Core.addContact(NewContact, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.NotAValidPhoneNumber);
                done();
            });
    });
});