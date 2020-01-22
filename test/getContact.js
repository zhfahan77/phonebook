require('should');
const Core = require("../api/core/contact.js"),
    ErrMsg = require("../api/utils/errmsg.js");

let DB = {};
let Data = [];

describe("Get One Contact", () => {
    beforeEach(() => {
        DB.getContact = (Params) => {
            Data = [
                {
                    "name": "test 1",
                    "mobileNumber": "8801787666777"
                }
            ]
            return new Promise((resolve, reject) => {
                const found = Data.find(contact => contact.mobileNumber === Params.mobileNumber)
                if(found) {
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

    it("it should return an object with matching contact details", (done) => {
        const Params = {
            "mobileNumber" : "8801787666777"
        };
        Core
            .getContact(Params, DB)
            .then(result => {
                result.should.be.an.Object;
                result.should.have.a.property('name').equal(Data[0].name)
                result.should.have.a.property('mobileNumber').equal(Data[0].mobileNumber)
                done();
            })
            .catch(err => {
                console.log(err);
            });
    });

    it("it should return an object with error details if no contact found", (done) => {
        DB.getContact = (Params) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {
            "mobileNumber" : "8801787666111"
        };

        Core.getContact(Params, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.NotFound);
                done();
            });
    });

    it("it should return an object with error details if mobile number provided", (done) => {
        DB.getContact = (Params) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {};

        Core.getContact(Params, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });
});