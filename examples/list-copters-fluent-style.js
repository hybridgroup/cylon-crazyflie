var cylon = require('cylon');

cylon.robot({
  connection: { name: 'crazyflie', adaptor: 'crazyflie', port: 'radio://1/20/1MPS' },
  device: {name: 'drone', driver: 'crazyflie'}
})

.on('ready', function(robot) {
  robot.crazyflie.findCopters(console.log);
})

.start();
