/*
 * cylon crazyflie driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

'use strict';

var Cylon = require('cylon');

var Commands = require('./commands');

var Driver = module.exports = function Driver(opts) {
  Driver.__super__.constructor.apply(this, arguments);
  this.commands = Commands;
  this.proxyMethods(Commands, this.connection, this);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

// Public: Sets a param for the driver
//
// param - params
// value - params
//
// Returns null.
Driver.prototype.setParam = function(param, value) {
  return this.connection.setParam(param, value);
};
