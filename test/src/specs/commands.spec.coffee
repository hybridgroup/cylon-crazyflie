'use strict'

source 'commands'

describe 'Cylon.Crazyflie.Commands', ->
  it 'is an array of string commands', ->
    expect(Cylon.Crazyflie.Commands).to.be.a 'array'
    for command in Cylon.Crazyflie.Commands
      expect(command).to.be.a 'string'
