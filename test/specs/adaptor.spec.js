"use strict";

var Adaptor = source('adaptor'),
    Commands = source('commands');

describe('Cylon.Adaptors.Crazyflie', function() {
  var crazyflie = new Adaptor();

  it("exposes a 'commands' method exposing all available commands", function() {
    expect(crazyflie.commands).to.be.eql(Commands);
  });

  it("exposes a 'connect' method to connect to the Crazyflie", function() {
    expect(crazyflie.connect).to.be.a('function');
  });

  it("exposes a 'disconnect' method to disconnect from the Crazyflie", function() {
    expect(crazyflie.disconnect).to.be.a('function');
  });

  it("proxies parameter setting via #setParam", function() {
    var paramSpy = spy();

    crazyflie.copter = {
      driver: {
        parameters: {
          set: paramSpy
        }
      }
    };

    crazyflie.setParam("testing", "true");
    expect(paramSpy).to.be.calledWith("testing", "true");
  });
});
