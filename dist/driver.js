/*
 * cylon crazyflie driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  'use strict';
  var namespace,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  namespace = require('node-namespace');

  namespace("Cylon.Driver", function() {
    return this.Crazyflie = (function(_super) {
      __extends(Crazyflie, _super);

      function Crazyflie(opts) {
        Crazyflie.__super__.constructor.apply(this, arguments);
        this.device = opts.device;
        this.connection = this.device.connection;
        this.proxyMethods(Cylon.Crazyflie.Commands, this.connection, this);
      }

      Crazyflie.prototype.commands = function() {
        return Cylon.Crazyflie.Commands;
      };

      Crazyflie.prototype.start = function(callback) {
        Logger.info("" + this.device.name + " started");
        callback(null);
        return this.device.emit('start');
      };

      Crazyflie.prototype.stop = function() {
        Logger.info("" + this.device.name + " stopped");
        return this.connection.disconnect();
      };

      Crazyflie.prototype.setParam = function(param, value) {
        return this.connection.setParam(param, value);
      };

      return Crazyflie;

    })(Cylon.Basestar);
  });

}).call(this);
