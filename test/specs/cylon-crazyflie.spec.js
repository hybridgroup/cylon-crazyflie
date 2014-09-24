"use strict";

var module = source("cylon-crazyflie");

var Adaptor = source('adaptor'),
    Driver = source('driver');

describe("Cylon.Crazyflie", function() {
  describe("#register", function() {
    var bot, adaptor, driver;

    beforeEach(function() {
      bot = { registerAdaptor: spy(), registerDriver: spy() };

      adaptor = bot.registerAdaptor;
      driver = bot.registerDriver;

      module.register(bot);
    });

    it("registers the 'crazyflie' adaptor with the robot", function() {
      expect(adaptor).to.be.calledWith('cylon-crazyflie', 'crazyflie');
    });

    it("registers the 'crazyflie' driver with the robot", function() {
      expect(driver).to.be.calledWith('cylon-crazyflie', 'crazyflie');
    });
  });

  describe("#adaptor", function() {
    it("returns a new instance of the Crazyflie adaptor", function() {
      expect(module.adaptor()).to.be.an.instanceOf(Adaptor);
    });
  });

  describe("#driver", function() {
    it("returns a new instance of the Crazyflie driver", function() {
      var opts = { device: { connection: {} } };
      expect(module.driver(opts)).to.be.an.instanceOf(Driver);
    });
  });
});
