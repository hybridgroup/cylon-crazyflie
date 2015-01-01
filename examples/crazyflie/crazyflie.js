"use strict";

var Cylon = require("cylon");

Cylon.robot({
  connections: {
    crazyflie: { adaptor: "crazyflie", port: "radio://1/20/1MPS" }
  },

  devices: {
    drone: { driver: "crazyflie"}
  },

  work: function(my) {
    my.drone.takeoff();

    after((2).seconds(), function() {
      my.drone.land();
    });

    after((5).seconds(), function() {
      my.drone.stop();
    });
  }
}).start();
