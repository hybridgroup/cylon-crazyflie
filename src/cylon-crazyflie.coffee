###
 * cylon-crazyflie
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

namespace = require 'node-namespace'

require './commands'
require './adaptor'
require './driver'

module.exports =
  adaptor: (args...) ->
    new Cylon.Adaptor.Crazyflie(args...)

  driver: (args...) ->
    new Cylon.Driver.Crazyflie(args...)

  register: (robot) ->
    Logger.info "Registering Crazyflie adaptor for #{robot.name}"
    robot.registerAdaptor 'cylon-crazyflie', 'crazyflie'

    Logger.info "Registering Crazyflie driver for #{robot.name}"
    robot.registerDriver 'cylon-crazyflie', 'crazyflie'
