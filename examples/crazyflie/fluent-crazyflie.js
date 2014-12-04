var Cylon = require('cylon');

Cylon
  .robot()
  .connection('crazyflie', { adaptor: 'crazyflie', port: 'radio://1/20/1MPS' })
  .device('drone', { driver: 'crazyflie' })

  .on('ready', function(bot) {
    bot.drone.takeoff();

    setTimeout(function() {
      bot.drone.land();
    }, 2000);

    setTimeout(function() {
      bot.drone.stop();
    }, 5000);
  });

Cylon.start();
