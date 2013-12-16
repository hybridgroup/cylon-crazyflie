###
 * cylon crazyflie driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';

require './cylon-crazyflie'

namespace = require 'node-namespace'

namespace "Cylon.Drivers", ->
  class @Crazyflie extends Cylon.Driver
    constructor: (opts) ->
      super
      @proxyMethods Cylon.Crazyflie.Commands, @connection, this

    commands: -> Cylon.Crazyflie.Commands

    stop: ->
      Logger.info "#{@device.name} stopped"
      @connection.disconnect()

    setParam: (param, value) ->
      @connection.setParam(param, value)
