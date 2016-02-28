# Cylon.js For Crazyflie

Cylon.js (http://cylonjs.com) is a JavaScript framework for robotics and physical computing using Node.js

This module provides an adaptor and drivers for the Crazyflie nanocopter (http://www.bitcraze.se/). It uses the Aerogel node module (https://github.com/ceejbot/aerogel) created by [@ceejbot](https://github.com/ceejbot) thank you!

Want to use Ruby on robots? Check out our sister project Artoo (http://artoo.io)

Want to use the Go programming language to power your robots? Check out our sister project Gobot (http://gobot.io).

[![Build Status](https://secure.travis-ci.org/hybridgroup/cylon-crazyflie.png?branch=master)](http://travis-ci.org/hybridgroup/cylon-crazyflie) [![Code Climate](https://codeclimate.com/github/hybridgroup/cylon-crazyflie/badges/gpa.svg)](https://codeclimate.com/github/hybridgroup/cylon-crazyflie) [![Test Coverage](https://codeclimate.com/github/hybridgroup/cylon-crazyflie/badges/coverage.svg)](https://codeclimate.com/github/hybridgroup/cylon-crazyflie)

## How to Install

### Dependencies

On Linux, you need to install some packages before you can install the NPM module:

    $ sudo apt-get install build-essential pkg-config libusb-1.0-0-dev

And on OS X, you need to have the `libusb` package to install the module:

    $ brew install libusb

Install the module with:

    $ npm install cylon cylon-crazyflie

You will also need to install the latest beta firmware to the Crazyflie itself to use the 'hover' mode:
[https://bitbucket.org/bitcraze/crazyflie-firmware/downloads/Crazyflie_2014.01.0.bin](https://bitbucket.org/bitcraze/crazyflie-firmware/downloads/Crazyflie_2014.01.0.bin).

## How to Use

This small program causes the Crazyflie to takeoff for 10 seconds.

```javascript
var Cylon = require('cylon');

Cylon.robot({
  connections: {
    crazyflie: { adaptor: 'crazyflie', port: 'radio://1/10/250KPS' }
  },

  devices: {
    drone: { driver: 'crazyflie' }
  },

  work: function(my) {
    my.drone.takeoff();
    after((10).seconds(), function() {
      my.drone.land();
    });
    after((15).seconds(), function() {
      my.drone.stop();
    });
  }
}).start();
```

### Hover Mode

```
  my.drone.setParam('flightmode.althold', true);
```

## How to Connect

The Crazyflie uses a 2.4 GHz radio to communicate.
There is a USB dongle called the Crazyradio that is required to control the Crazyflie quadcopter.

If you are have a USB 3.0 port, you might run into this issue:

[http://stackoverflow.com/questions/17204253/crazyflie-usb-3-0-incompability](http://stackoverflow.com/questions/17204253/crazyflie-usb-3-0-incompability).

### Ubuntu

You need to install some udev-rules to be able to communicate with the crazyflie, it is a good thing that we have a [Gort](http://gort.io) command that does just that:

    $ gort crazyflie set-udev-rules

## Documentation

We're busy adding documentation to our web site at http://cylonjs.com/ please check there as we continue to work on Cylon.js

Thank you!

## Contributing

For our contribution guidelines, please go to [https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md](https://github.com/hybridgroup/cylon/blob/master/CONTRIBUTING.md).

## Release History

For the release history, please go to [https://github.com/hybridgroup/cylon-crazyflie/blob/master/RELEASES.md](https://github.com/hybridgroup/cylon-crazyflie/blob/master/RELEASES.md).

## License
Copyright (c) 2013-2016 The Hybrid Group. Licensed under the Apache 2.0 license.
