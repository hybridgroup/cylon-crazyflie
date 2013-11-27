var Cylon = require('cylon');

Cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie' },
  device: {name: 'drone', driver: 'crazyflie'},

  work: function(my) {
    //my.drone.setParam('flightmode.althold', true);
    my.drone.takeoff();
    after((10).seconds(), function() { 
      my.drone.land();
    });
    after((15).seconds(), function() { 
      my.drone.stop();
    });    
  }
}).start();
