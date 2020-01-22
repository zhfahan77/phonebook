require('should');
const Core = require("../api/core/contact.js"),
    ErrMsg = require("../api/utils/errmsg.js");

let DB = {};
let Data = [];

describe("Get all Contacts", () => {
    beforeEach(() => {
        DB.getContacts = () => {
            Data = [
                {
                    "name": "test 1",
                    "mobileNumber": "8801787666777"
                }
            ]
            return new Promise((resolve, reject) => {
                resolve(Data);
            })
        }
    })

    afterEach(() => {
        DB = {}
        Data = [];
    })

    it("it should return an array of objects with all contact details", (done) => {
        Core
            .getContacts(DB)
            .then(result => {
                result.should.be.an.Array;
                result.length.should.be.equal(Data.length);
                result[0].should.have.a.property('name').equal(Data[0].name)
                result[0].should.have.a.property('mobileNumber').equal(Data[0].mobileNumber)
                done();
            })
            .catch(err => {
                console.log(err);
            });
    });

    it("it should return an object with error details if no contact found", (done) => {
        DB.getContacts = (Auth) => {
            return new Promise((resolve, reject) => {
                resolve([]);
            });
        };

        Core.getContacts(DB)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                err.should.be.equal(ErrMsg.NotFound);
                done();
            });
    });
});