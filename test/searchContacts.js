require('should');
const Core = require("../api/core/contact.js"),
    ErrMsg = require("../api/utils/errmsg.js");

let DB = {};
let Data = [];

describe("Search Contacts", () => {
    beforeEach(() => {
        DB.searchContacts = (Params) => {
            Data = [
                {
                    "name": "test 1",
                    "mobileNumber": "8801787666777"
                }
            ]
            return new Promise((resolve, reject) => {
                const found = Data.filter(contact => contact.mobileNumber === Params.mobileNumber)
                if(found) {
                    return resolve(found);
                } else {
                    return reject([])
                }
            })
        }
    })

    afterEach(() => {
        DB = {}
        Data = [];
    })

    it("it should return an array of contacts with matching contact details", (done) => {
        const Params = {
            "mobileNumber" : "8801787666777"
        };

        Core
            .searchContacts(Params, DB)
            .then(result => {
                result.should.be.an.Array;
                result[0].should.have.a.property('name').equal(Data[0].name)
                result[0].should.have.a.property('mobileNumber').equal(Data[0].mobileNumber)
                done();
            })
            .catch(err => {
                console.log(err);
            });
    });

    it("it should return an object with error details if no contacts found", (done) => {
        DB.searchContacts = (Params) => {
            return new Promise((resolve, reject) => {
                resolve([]);
            });
        };

        const Params = {
            "mobileNumber" : "8801787666111"
        };

        Core.searchContacts(Params, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.NotFound);
                done();
            });
    });

    it("it should return an object with error details if no mobile number provided", (done) => {
        DB.searchContacts = (Params) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {};

        Core.searchContacts(Params, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });
});