"use strict";

var Commands = source('commands');

describe('Cylon.Crazyflie.Commands', function() {
  it('is an array of string commands', function() {
    for (var i = 0; i < Commands.length; i++) {
      var command = Commands[i];
      expect(command).to.be.a('string');
    }
  });
});

