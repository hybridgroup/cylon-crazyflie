/*
 * cylon crazyflie adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013-2014 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

var Aerogel = require('aerogel'),
    Cylon = require('cylon');

var Commands = require('./commands');

var Adaptor = module.exports = function Adaptor(opts) {
  if (opts == null) { opts = {}; }

  Adaptor.__super__.constructor.apply(this, arguments);

  this.aerogelDriver = new Aerogel.CrazyDriver();
  this.aerogelDriver.radio = new Aerogel.CrazyRadio();
  this.copter = new Aerogel.Copter(this.aerogelDriver);
  this.connector = this.copter;
  this.proxyMethods(Commands, this.copter, this);
};

subclass(Adaptor, Cylon.Adaptor);

Adaptor.prototype.commands = function() {
  return Commands;
};

Adaptor.prototype.connect = function(callback) {
  var port = this.connection.port;

  Cylon.Logger.info("Connecting to Adaptor '" + this.name + "' on port '" + this.port + "'...");

  if (port === "none") {
    return this.connectFirstCopter(callback);
  } else {
    return this.doConnect(port, callback);
  }
};

Adaptor.prototype.doConnect = function(port, callback) {
  return this.copter.connect(port).then(function() {
    callback(null);
    return this.connection.emit('connect');
  });
};

Adaptor.prototype.disconnect = function() {
  Cylon.Logger.info("Disconnecting from Adaptor '" + this.name + "'...");
  return this.copter.shutdown();
};

Adaptor.prototype.setParam = function(param, value) {
  return this.copter.driver.parameters.set(param, value);
};

Adaptor.prototype.connectFirstCopter = function(callback) {
  return this.aerogelDriver.findCopters().then(function(copters) {
    if (copters.length === 0) {
      console.error('No copters found! Is your copter turned on?');
      return process.exit(1);
    } else {
      return this.doConnect(copters[0], callback);
    }
  });
};

Adaptor.prototype.findCopters = function(callback) {
  return this.aerogelDriver.findCopters().then(function(copters) {
    return callback(copters);
  });
};
