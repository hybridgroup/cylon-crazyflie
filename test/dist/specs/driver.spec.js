(function() {
  'use strict';
  source("driver");

  describe('Cylon.Drivers.Crazyflie', function() {
    var crazyflie;
    crazyflie = new Cylon.Drivers.Crazyflie({
      device: {}
    });
    it("exposes a 'commands' method exposing all available commands", function() {
      return expect(crazyflie.commands()).to.be.eql(Cylon.Crazyflie.Commands);
    });
    it("exposes a 'stop' method to disconnect from the Crazyflie", function() {
      return expect(crazyflie.stop).to.be.a('function');
    });
    return it("exposes a 'setParam' method to proxy to the connection", function() {
      var spy;
      spy = sinon.spy();
      crazyflie.connection = {
        setParam: spy
      };
      crazyflie.setParam("testing", "true");
      return assert(spy.calledWith("testing", "true"));
    });
  });

}).call(this);
