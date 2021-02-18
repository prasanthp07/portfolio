const app = require("../app");
const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();


const { expect } = chai;
chai.use(chaiHttp);
describe("PROFILE CRUD", () => {
    let id;

    it("Add profiles1", done => {
        chai
            .request(app)
            .post("/api/v1/profiles")
            .send({
                "name": "BULL_"+Date.now(),
                "species": "breed1",
                "weight": 150,
                "length": 80,
                "lat": 11.08,
                "lng": 67.23
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data._id).to.have.lengthOf.above(3);
                done();
            });
    })
    it("Add profiles2", done => {
        chai
            .request(app)
            .post("/api/v1/profiles")
            .send({
                "name": "DOG_"+Date.now(),
                "species": "PUG",
                "weight": 25,
                "length": 10,
                "lat": 10.08,
                "lng": 67.23
            })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data._id).to.have.lengthOf.above(3);
                id = res.body.data._id;
                done();
            });
    })
    it("Get all profiles", done => {
        chai
            .request(app)
            .get("/api/v1/profiles")
            .end((err, res) => {
                expect(res).to.have.status(200);
                res.body.data.should.be.a('array');
                expect(res.body.data).to.have.lengthOf.above(0);
                done();
            });
    })
    it("Get profiles BY ID", done => {

        chai
            .request(app)
            .get("/api/v1/profiles/" + id)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data._id).to.have.lengthOf.above(3);
                expect(res.body.data._id).to.equal(id)
                done();
            });
    })

    it("Delete profiles BY ID", done => {

        chai
            .request(app)
            .delete("/api/v1/profiles/" + id)
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    })
});

console.log(typeof {});
