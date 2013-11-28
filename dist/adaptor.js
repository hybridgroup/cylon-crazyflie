/*
 * cylon crazyflie adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var Aerogel, namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require('./cylon-crazyflie');

  Aerogel = require('aerogel');

  namespace = require('node-namespace');

  namespace("Cylon.Adaptor", function() {
    return this.Crazyflie = (function(_super) {
      __extends(Crazyflie, _super);

      function Crazyflie(opts) {
        Crazyflie.__super__.constructor.apply(this, arguments);
        this.connection = opts.connection;
        this.name = opts.name;
        this.aerogelDriver = new Aerogel.CrazyDriver();
        this.aerogelDriver.radio = new Aerogel.CrazyRadio();
        this.copter = new Aerogel.Copter(this.aerogelDriver);
        this.connector = this.copter;
        this.proxyMethods(Cylon.Crazyflie.Commands, this.copter, this);
      }

      Crazyflie.prototype.commands = function() {
        return Cylon.Crazyflie.Commands;
      };

      Crazyflie.prototype.connect = function(callback) {
        Logger.info("Connecting to Crazyflie '" + this.name + "' on port '" + this.port + "'...");
        return this.copter.connect(this.connection.port.toString()).then(function() {
          callback(null);
          return this.connection.emit('connect');
        });
      };

      Crazyflie.prototype.disconnect = function() {
        Logger.info("Disconnecting from Crazyflie '" + this.name + "'...");
        return this.copter.shutdown();
      };

      Crazyflie.prototype.setParam = function(param, value) {
        return this.copter.driver.parameters.set(param, value);
      };

      return Crazyflie;

    })(Cylon.Basestar);
  });

}).call(this);
