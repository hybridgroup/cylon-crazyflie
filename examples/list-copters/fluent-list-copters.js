"use strict";

var Cylon = require("cylon");

Cylon
  .robot()
  .connection("crazyflie", { adaptor: "crazyflie", port: "radio://1/20/1MPS" })
  .device("drone", { driver: "crazyflie" })

  .on("ready", function(bot) {
    bot.crazyflie.findCopters(console.log);
  });

Cylon.start();
