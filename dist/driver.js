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

  require('./cylon-crazyflie');

  namespace = require('node-namespace');

  namespace("Cylon.Drivers", function() {
    return this.Crazyflie = (function(_super) {
      __extends(Crazyflie, _super);

      function Crazyflie(opts) {
        if (opts == null) {
          opts = {};
        }
        Crazyflie.__super__.constructor.apply(this, arguments);
        this.proxyMethods(Cylon.Crazyflie.Commands, this.connection, this);
      }

      Crazyflie.prototype.commands = function() {
        return Cylon.Crazyflie.Commands;
      };

      # Public: Stops the driver
      #
      # Returns null.
      Crazyflie.prototype.stop = function() {
        Logger.info("" + this.device.name + " stopped");
        return this.connection.disconnect();
      };

      # Public: Sets a param for the driver
      #
      # param - params
      # value - params
      #
      # Returns null.
      Crazyflie.prototype.setParam = function(param, value) {
        return this.connection.setParam(param, value);
      };

      return Crazyflie;

    })(Cylon.Driver);
  });

}).call(this);
