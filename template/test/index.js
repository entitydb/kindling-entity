var expect = require('chai').expect;

var level;
var db;
var __Entity__;
var __entity__DB;

describe("__Entity__", function () {

  before(function () {
    level = require('level-test')();
    db = level('db');
  });
    
  it("should load __Entity__", function () {
    __Entity__ = require('../');
    expect(__Entity__).to.exist;
  });

  it("should create __entity__DB", function () {
    __entity__DB = new __Entity__(db)
    expect(__entity__DB).to.exist;
    expect(__entity__DB.get).to.exist;
    expect(__entity__DB.put).to.exist;
    expect(__entity__DB.del).to.exist;
    expect(__entity__DB.methods).to.exist;
    expect(Object.keys(__entity__DB.methods).length).to.equal(3);
  });
});