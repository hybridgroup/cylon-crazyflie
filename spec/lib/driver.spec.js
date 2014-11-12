"use strict";

var Driver = source('driver'),
    Commands = source('commands');

var Cylon = require('cylon');

describe('Cylon.Drivers.Crazyflie', function() {
  var driver;

  beforeEach(function() {
    driver = new Driver({
      adaptor: {}
    });
  });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("constructor", function() {
    it("proxies Crazyflie methods to the connection", function() {
      driver.adaptor.takeoff = spy();
      driver.takeoff('takeoff');
      expect(driver.adaptor.takeoff).to.be.calledWith('takeoff');
    });

    it("sets up #commands", function() {
      for (var c in driver.commands) {
        expect(driver.commands[c]).to.be.a('function');
      }
    });
  });

  describe("#setParam", function() {
    beforeEach(function() {
      driver.adaptor = { setParam: spy() }
    });

    it("passes the param and value to the adaptor", function() {
      driver.setParam("hello", "world");
      expect(driver.adaptor.setParam).to.be.calledWith("hello", "world");
    })
  });
});
