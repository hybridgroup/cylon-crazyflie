"use strict";

var Driver = source('driver'),
    Commands = source('commands');

describe('Cylon.Drivers.Crazyflie', function() {
  var crazyflie = new Driver({ device: {} });

  it("exposes a 'commands' method exposing all available commands", function() {
    expect(crazyflie.commands()).to.be.eql(Commands);
  });

  it("exposes a 'stop' method to disconnect from the Crazyflie", function() {
    expect(crazyflie.stop).to.be.a('function');
  });

  it("exposes a 'setParam' method to proxy to the connection", function() {
    crazyflie.connection = { setParam: spy() };
    crazyflie.setParam("testing", "true");
    expect(crazyflie.connection.setParam).to.be.calledWith("testing", "true");
  });
});
