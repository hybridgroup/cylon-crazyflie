###
 * cylon crazyflie adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict'

require 'cylon'
require './commands'

Aerogel = require 'aerogel'
namespace = require 'node-namespace'

namespace "Cylon.Adaptors", ->
  class @Crazyflie extends Cylon.Adaptor
    constructor: (opts = {}) ->
      super
      @aerogelDriver = new Aerogel.CrazyDriver()
      @aerogelDriver.radio = new Aerogel.CrazyRadio()
      @copter = new Aerogel.Copter(@aerogelDriver)
      @connector = @copter
      @proxyMethods Cylon.Crazyflie.Commands, @copter, this

    commands: ->
      Cylon.Crazyflie.Commands

    connect: (callback) ->
      Logger.info "Connecting to Crazyflie '#{@name}' on port '#{@connection.port}'..."

      @copter.connect(@connection.port.toString()).then ->
        (callback)(null)
        @connection.emit 'connect'

    disconnect: ->
      Logger.info "Disconnecting from Crazyflie '#{@name}'..."
      @copter.shutdown()

    setParam: (param, value) ->
      @copter.driver.parameters.set(param, value)
