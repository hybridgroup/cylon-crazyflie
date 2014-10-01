var cylon = require('cylon');

cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie', port: 'radio://1/20/1MPS' },
  device: {name: 'drone', driver: 'crazyflie'}
})

.on('ready', function(robot) {
  robot.drone.takeoff();

  setTimeout(function() {
    robot.drone.land();
  }, 2000);

  setTimeout(function() {
    robot.drone.stop();
  }, 5000);
}).start();
