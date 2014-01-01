'use strict'

source "driver"

describe 'Cylon.Drivers.Crazyflie', ->
  crazyflie = new Cylon.Drivers.Crazyflie
    device: {}

  it "exposes a 'commands' method exposing all available commands", ->
    expect(crazyflie.commands()).to.be.eql Cylon.Crazyflie.Commands

  it "exposes a 'stop' method to disconnect from the Crazyflie", ->
    expect(crazyflie.stop).to.be.a 'function'

  it "exposes a 'setParam' method to proxy to the connection", ->
    spy = sinon.spy()
    crazyflie.connection = setParam: spy
    crazyflie.setParam "testing", "true"
    assert spy.calledWith "testing", "true"
