var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie', port: 'radio://1/20/1MPS' },
  device: {name: 'drone', driver: 'crazyflie'},

  work: function(my) {
    my.drone.on('start', function() {
      Logger.info('yo');

      my.drone.takeoff();
      after((2).seconds(), function() { 
        my.drone.land();
      });
      after((5).seconds(), function() { 
        my.drone.stop();
      });
    });
  }
}).start();
