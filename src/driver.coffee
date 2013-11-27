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

namespace "Cylon.Driver", ->
  class @Crazyflie extends Cylon.Basestar
    constructor: (opts) ->
      super
      @device = opts.device
      @connection = @device.connection
      @proxyMethods Cylon.Crazyflie.Commands, @connection, this

    commands: -> Cylon.Crazyflie.Commands

    start: (callback) ->
      Logger.info "#{@device.name} started"

      (callback)(null)
      @device.emit 'start'

    stop: ->
      Logger.info "#{@device.name} stopped"
      @connection.stop()

    setParam: (param, value) ->
      @connection.setParam(param, value)
