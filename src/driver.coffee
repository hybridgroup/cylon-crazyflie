###
 * cylon crazyflie driver
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

require './cylon-crazyflie'

namespace = require 'node-namespace'

namespace "Cylon.Drivers", ->
  class @Crazyflie extends Cylon.Driver
    constructor: (opts = {}) ->
      super
      @proxyMethods Cylon.Crazyflie.Commands, @connection, this

    commands: ->
      Cylon.Crazyflie.Commands

    # Public: Stops the driver
    #
    # Returns null.
    stop: ->
      Logger.info "#{@device.name} stopped"
      @connection.disconnect()

    # Public: Sets a param for the driver
    #
    # param - params
    # value - params
    #
    # Returns null.
    setParam: (param, value) ->
      @connection.setParam(param, value)
