"use strict";

source('commands');

describe('Cylon.Crazyflie.Commands', function() {
  it('is an array of string commands', function() {
    var commands = Cylon.Crazyflie.Commands;

    for (var i = 0; i < commands.length; i++) {
      var command = commands[i];
      expect(command).to.be.a('string');
    }
  });
});

