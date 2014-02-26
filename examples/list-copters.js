var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie', port: 'radio://1/20/1MPS' },
  device: {name: 'drone', driver: 'crazyflie'},

  work: function(my) {
    my.crazyflie.findCopters(function(copters) {
      Logger.info(copters);
    });
  }
}).start();
