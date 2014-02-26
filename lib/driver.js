/*
 * cylon crazyflie driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var namespace = require('node-namespace');

require('./cylon-crazyflie');
require('./commands');

namespace("Cylon.Drivers", function() {
  this.Crazyflie = (function(klass) {
    subclass(Crazyflie, klass);

    function Crazyflie(opts) {
      Crazyflie.__super__.constructor.apply(this, arguments);
      this.proxyMethods(Cylon.Crazyflie.Commands, this.connection, this);
    }

    Crazyflie.prototype.commands = function() {
      return Cylon.Crazyflie.Commands;
    };

    // Public: Stops the driver
    //
    // Returns null.
    Crazyflie.prototype.stop = function() {
      Logger.info("" + this.device.name + " stopped");
      return this.connection.disconnect();
    };

    // Public: Sets a param for the driver
    //
    // param - params
    // value - params
    //
    // Returns null.
    Crazyflie.prototype.setParam = function(param, value) {
      return this.connection.setParam(param, value);
    };

    return Crazyflie;

  })(Cylon.Driver);
});
