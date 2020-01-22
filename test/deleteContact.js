require('should');
const Core = require("../api/core/contact.js"),
    ErrMsg = require("../api/utils/errmsg.js");

let DB = {};
let Data = [];

describe("Delete One Contact", () => {
    beforeEach(() => {
        DB.deleteContact = (Params) => {
            Data = [
                {
                    "name": "test 1",
                    "mobileNumber": "8801787666777"
                }
            ]
            return new Promise((resolve, reject) => {
                const foundIndex = Data.findIndex(contact => contact.mobileNumber === Params.mobileNumber);
                const found = Data.slice(foundIndex, 1);
                return resolve(found[0]);
            })
        }
    })

    afterEach(() => {
        DB = {}
        Data = [];
    })

    it("it should return an object with matching contact details which got deleted", (done) => {
        const Params = {
            "mobileNumber": "8801787666777"
        };

        Core
            .deleteContact(Params, DB)
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
        DB.deleteContact = (Params) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {
            "mobileNumber": "8801787666111"
        };

        Core.deleteContact(Params, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.NotFound);
                done();
            });
    });

    it("it should return an object with error details if no mobile number provided", (done) => {
        DB.deleteContact = (Params) => {
            return new Promise((resolve, reject) => {
                resolve(null);
            });
        };

        const Params = {};

        Core.deleteContact(Params, DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.RequiredFieldNotFound);
                done();
            });
    });
});