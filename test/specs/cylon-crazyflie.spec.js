"use strict";

var module = source("cylon-crazyflie");

describe("Cylon.Crazyflie", function() {
  it("can register the adaptor and driver", function() {
    module.register.should.be.a('function');
  });

  it("can create adaptor", function() {
    module.adaptor.should.be.a('function');
    expect(module.adaptor()).to.be.a('object');
  });

  it("can create driver", function() {
    module.driver.should.be.a('function');
    expect(module.driver({ device: {} })).to.be.a('object');
  });
});
