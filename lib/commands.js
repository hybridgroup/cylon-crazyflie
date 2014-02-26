/*
 * cylon crazyflie commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

var namespace = require('node-namespace');

namespace("Cylon.Crazyflie", function() {
  this.Commands = [
  	'takeoff', 
  	'land',
  	'hover',
  	'setPitch',
  	'setYaw',
  	'setThrust',
  	'shutdown',
  	'setParam',
  	'findCopters'
  ];
});
