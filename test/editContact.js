require('should');
const Core = require("../api/core/contact.js"),
    ErrMsg = require("../api/utils/errmsg.js");

let DB = {};
let Data = [];

describe("Edit One Contact", () => {
    beforeEach(() => {
        DB.editContact = (Params, Update) => {
            Data = [
                {
                    "name": "test 1",
                    "mobileNumber": "8801787666777"
                }
            ]
            return new Promise((resolve, reject) => {
                const found = Data.find(contact => (contact.mobileNumber === Params.mobileNumber) && (contact.name === Update.name));
                if(found) {
                    found.mobileNumber = Update.mobileNumber;
                    return resolve(found);
                } else {
                    return reject(null)
                }
            })
        }
    })

    afterEach(() => {
        DB = {}
        Data = [];
    })

    it("it should return an updated object with matching contact details", (done) => {
        const Params = {
            "mobileNumber": "8801787666777"
        };

        const Update = {
            "mobileNumber": "8801787666111",
            "name": "test 1"
        };

        Core
            .editContact(Params, Update, DB)
            .then(result => {
                result.should.be.an.Object;
                result.should.have.a.property('name').equal(Data[0].name)
                result.should.have.a.property('mobileNumber').equal(Update.mobileNumber)
                done();
            })
            .catch(err => {
                console.log(err);
            });
    });

    it("it should return an object with error details if no contact found", (done) => {
        DB.editContact = (Params, Update) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {
            "mobileNumber": "8801787666111",
            "name": "test 2"
        };

        const Update = {
            "mobileNumber": "8801787666111",
            "name": "test 1"
        };

        Core.editContact(Params, Update, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.NotFound);
                done();
            });
    });

    it("it should return an object with error details if no mobile number provided", (done) => {
        DB.editContact = (Params, Update) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {
            "name": "test 1"
        };

        const Update = {
            "mobileNumber": "8801787666111",
            "name": "test 1"
        };

        Core.editContact(Params, Update, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });

    it("it should return an object with error details if no contact name provided in Updated data", (done) => {
        DB.editContact = (Params, Update) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {
            "mobileNumber": "8801787666111"
        };

        const Update = {
            "mobileNumber": "8801787666111"
        };

        Core.editContact(Params, Update, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });

    it("it should return an object with error details if mobile number provided in Updated data", (done) => {
        DB.editContact = (Params, Update) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {
            "mobileNumber": "8801787666111"
        };

        const Update = {
            "name": "test 1"
        }

        Core.editContact(Params, Update, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });
});