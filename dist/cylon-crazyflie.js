/*
 * cylon-crazyflie
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/


(function() {
  var __slice = [].slice;

  require('cylon');

  require('./commands');

  require('./adaptor');

  require('./driver');

  module.exports = {
    adaptor: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Cylon.Adaptors.Crazyflie, args, function(){});
    },
    driver: function() {
      var args;
      args = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      return (function(func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor, result = func.apply(child, args);
        return Object(result) === result ? result : child;
      })(Cylon.Drivers.Crazyflie, args, function(){});
    },
    register: function(robot) {
      Logger.info("Registering Crazyflie adaptor for " + robot.name);
      robot.registerAdaptor('cylon-crazyflie', 'crazyflie');
      Logger.info("Registering Crazyflie driver for " + robot.name);
      return robot.registerDriver('cylon-crazyflie', 'crazyflie');
    }
  };

}).call(this);
