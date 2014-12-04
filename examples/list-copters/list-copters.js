var Cylon = require('cylon');

Cylon.robot({
  connections: {
    crazyflie: { adaptor: 'crazyflie', port: 'radio://1/20/1MPS' }
  },

  devices: {
    drone: { driver: 'crazyflie'}
  },

  work: function(my) {
    my.crazyflie.findCopters(console.log);
  }
}).start();
