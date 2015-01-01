/* jshint expr:true */
"use strict";

var crazyflie = source("cylon-crazyflie");

var Adaptor = source("adaptor"),
    Driver = source("driver");

describe("Cylon.Crazyflie", function() {
  describe("#adaptors", function() {
    it("is an array of supplied adaptors", function() {
      expect(crazyflie.adaptors).to.be.eql(["crazyflie"]);
    });
  });

  describe("#drivers", function() {
    it("is an array of supplied drivers", function() {
      expect(crazyflie.drivers).to.be.eql(["crazyflie"]);
    });
  });
  describe("#adaptor", function() {
    it("returns a new instance of the Crazyflie adaptor", function() {
      expect(crazyflie.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Crazyflie driver", function() {
      var opts = { device: { connection: {} } };
      expect(crazyflie.driver(opts)).to.be.an.instanceOf(Driver);
    });
  });
});
