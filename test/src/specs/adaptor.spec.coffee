'use strict'

source 'adaptor'

describe 'Cylon.Adaptors.Crazyflie', ->
  crazyflie = new Cylon.Adaptors.Crazyflie

  it "exposes a 'commands' method exposing all available commands", ->
    expect(crazyflie.commands()).to.be.eql Cylon.Crazyflie.Commands

  it "exposes a 'connect' method to connect to the Crazyflie", ->
    expect(crazyflie.connect).to.be.a 'function'

  it "exposes a 'disconnect' method to disconnect from the Crazyflie", ->
    expect(crazyflie.disconnect).to.be.a 'function'

  it "proxies parameter setting via #setParam", ->
    spy = sinon.spy()
    crazyflie.copter = driver: { parameters: { set: spy } } 
    crazyflie.setParam "testing", "true"
    assert spy.calledWith "testing", "true"
