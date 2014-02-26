"use strict";

var namespace = require('node-namespace'),
    crazyflie = source("cylon-crazyflie");

describe("Cylon.Crazyflie", function() {
  it("can register the adaptor and driver", function() {
    crazyflie.register.should.be.a('function');
  });

  it("can create adaptor", function() {
    crazyflie.adaptor.should.be.a('function');
    expect(crazyflie.adaptor()).to.be.a('object');
  });

  it("can create driver", function() {
    crazyflie.driver.should.be.a('function');
    expect(crazyflie.driver({ device: {} })).to.be.a('object');
  });
});
