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

var namespace = require('node-namespace'),
    CliCommands = require("./cli/commands");

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
  },

  registerCommands: function() {
    var commands;

    commands = {
      crazyflie: {
        description: "Set udev rules for the crazyflie",
        command: function(args) {
          var subcmd;
          subcmd = args[0];

          switch (subcmd) {
            case 'set-udev-rules':
              CliCommands.crazyflie.setUdevRules();
              break;
            default:
              console.log("cylon crazyflie argument not recognized, try:\n");
              console.log("1.- cylon crazyflie set-udev-rules\n");
          }
        }
      }
    };

    return commands;
  }
};
