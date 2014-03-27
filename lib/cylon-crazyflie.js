/*
 * cylon-crazyflie
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

require('cylon');
require('./commands');
require('./adaptor');
require('./driver');

var namespace = require('node-namespace');

module.exports = {
  adaptor: function(opts) {
    return new Cylon.Adaptors.Crazyflie(opts);
  },

  driver: function(opts) {
    return new Cylon.Drivers.Crazyflie(opts);
  },

  register: function(robot) {
    Logger.info("Registering Crazyflie adaptor for " + robot.name);
    robot.registerAdaptor('cylon-crazyflie', 'crazyflie');

    Logger.info("Registering Crazyflie driver for " + robot.name);
    return robot.registerDriver('cylon-crazyflie', 'crazyflie');
  }
};
