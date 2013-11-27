Cylon = require 'cylon'

Cylon.robot
  connection:
    name: 'crazyflie', adaptor: 'crazyflie'

  device:
    name: 'drone', driver: 'crazyflie'

  work: (my) ->
    my.drone.supportsHover = true
    my.drone.takeoff()
    after 10.seconds(), ->
      my.drone.land()
    after 15.seconds(), ->
      my.drone.stop()

.start()
