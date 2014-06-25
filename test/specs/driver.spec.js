"use strict";

var Driver = source('driver'),
    Commands = source('commands');

var Cylon = require('cylon');

describe('Cylon.Drivers.Crazyflie', function() {
  var driver;

  beforeEach(function() {
    stub(Driver.prototype, 'proxyMethods');
    driver = new Driver({
      device: {}
    });
  });

  afterEach(function() {
    Driver.prototype.proxyMethods.restore();
  });

  it("subclasses Cylon.Driver", function() {
    expect(driver).to.be.an.instanceOf(Cylon.Driver);
    expect(driver).to.be.an.instanceOf(Driver);
  });

  describe("constructor", function() {
    it("sets @commands to the Crazyflie commands list", function() {
      expect(driver.commands).to.be.eql(Commands);
    });

    it("proxies Crazyflie methods to the connection", function() {
      expect(driver.proxyMethods).to.be.calledWith(
        Commands,
        driver.connection,
        driver
      );
    });
  });

  describe("#setParam", function() {
    beforeEach(function() {
      driver.connection = { setParam: spy() }
    });

    it("passes the param and value to the connection", function() {
      driver.setParam("hello", "world");
      expect(driver.connection.setParam).to.be.calledWith("hello", "world");
    })
  });
});
