(function() {
  'use strict';
  source('commands');

  describe('Cylon.Crazyflie.Commands', function() {
    return it('is an array of string commands', function() {
      var command, _i, _len, _ref, _results;
      expect(Cylon.Crazyflie.Commands).to.be.a('array');
      _ref = Cylon.Crazyflie.Commands;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        command = _ref[_i];
        _results.push(expect(command).to.be.a('string'));
      }
      return _results;
    });
  });

}).call(this);
