var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:4040");

// UNIT test begin

describe("SAMPLE unit test",function(){

  // #1 should return home page
  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

});