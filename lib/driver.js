/*
 * cylon crazyflie driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Cylon = require("cylon");

var Commands = require("./commands");

var Driver = module.exports = function Driver() {
  Driver.__super__.constructor.apply(this, arguments);
  this.setupCommands(Commands);
};

Cylon.Utils.subclass(Driver, Cylon.Driver);

Driver.prototype.start = function(callback) {
  callback();
};

Driver.prototype.halt = function(callback) {
  callback();
};

/**
 * Sets a parameter in the Crazyflie driver
 *
 * @param {String} param parameter to set
 * @param {String} value value to set the parameter to
 * @return {void}
 * @publish
 */
Driver.prototype.setParam = function(param, value) {
  return this.connection.setParam(param, value);
};
