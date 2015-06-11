"use strict";

var Driver = lib("driver");

var Cylon = require("cylon");

describe("Cylon.Drivers.Crazyflie", function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({
      connection: {}
    });
  });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("constructor", function() {
    it("proxies Crazyflie methods to the connection", function() {
      driver.connection.takeoff = spy();
      driver.takeoff("takeoff");
      expect(driver.connection.takeoff).to.be.calledWith("takeoff");
    });

    it("sets up #commands", function() {
      for (var c in driver.commands) {
        expect(driver.commands[c]).to.be.a("function");
      }
    });
  });

  describe("#setParam", function() {
    beforeEach(function() {
      driver.connection = { setParam: spy() };
    });

    it("passes the param and value to the connection", function() {
      driver.setParam("hello", "world");
      expect(driver.connection.setParam).to.be.calledWith("hello", "world");
    });
  });
});
