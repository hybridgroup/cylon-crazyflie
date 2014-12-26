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

    $ npm install cylon-crazyflie

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

* All patches must be provided under the Apache 2.0 License
* Please use the -s option in git to "sign off" that the commit is your work and you are providing it under the Apache 2.0 License
* Submit a Github Pull Request to the appropriate branch and ideally discuss the changes with us in IRC.
* We will look at the patch, test it out, and give you feedback.
* Avoid doing minor whitespace changes, renamings, etc. along with merged content. These will be done by the maintainers from time to time but they can complicate merges and should be done seperately.
* Take care to maintain the existing coding style.
* Add unit tests for any new or changed functionality & Lint and test your code using [Grunt](http://gruntjs.com/).
* All pull requests should be "fast forward"
  * If there are commits after yours use “git rebase -i <new_head_branch>”
  * If you have local changes you may need to use “git stash”
  * For git help see [progit](http://git-scm.com/book) which is an awesome (and free) book on git

## Release History

Version 0.13.0 - Compatibility with Cylon 0.21.0

Version 0.12.0 - Compatibility with Cylon 0.20.0

Version 0.11.0 - Compatibility with Cylon 0.19.0

Version 0.10.0 - Compatibility with Cylon 0.18.0

Version 0.9.0 - Compatibility with Cylon 0.16.0

Version 0.8.1 - Add peerDependencies to package.json

Version 0.8.0 - Compatibility with Cylon 0.15.0

Version 0.7.0 - Compatibility with Cylon 0.14.0, remove node-namespace.

Version 0.6.0 - Update to cylon 0.12.0

Version 0.5.0 - Update to cylon 0.11.0, refactor to pure JavaScript

Version 0.4.0 - Update to cylon 0.10.0

Version 0.3.0 - Release for cylon 0.9.0

Version 0.2.0 - Release for cylon 0.8.0

Version 0.1.0 - Initial release

## License
Copyright (c) 2013-2014 The Hybrid Group. Licensed under the Apache 2.0 license.
