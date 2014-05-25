/*
 * cylon-crazyflie
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require('cylon');

var Adaptor = require('./adaptor'),
    Driver = require('./driver');

module.exports = {
  adaptor: function(opts) {
    return new Adaptor(opts);
  },

  driver: function(opts) {
    return new Driver(opts);
  },

  register: function(robot) {
    Cylon.Logger.info("Registering Crazyflie adaptor for " + robot.name);
    robot.registerAdaptor('cylon-crazyflie', 'crazyflie');

    Cylon.Logger.info("Registering Crazyflie driver for " + robot.name);
    robot.registerDriver('cylon-crazyflie', 'crazyflie');
  }
};
