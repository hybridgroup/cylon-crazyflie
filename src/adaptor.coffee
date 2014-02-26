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
      port = @connection.port.toString()
      Logger.info port
      if port is "none"
        @connectFirstCopter(callback)
      else
        @doConnect(port, callback)

    doConnect: (port, callback) ->        
      @copter.connect(port).then ->
        (callback)(null)
        @connection.emit 'connect'

    disconnect: ->
      Logger.info "Disconnecting from Crazyflie '#{@name}'..."
      @copter.shutdown()

    setParam: (param, value) ->
      @copter.driver.parameters.set(param, value)

    connectFirstCopter: (callback) ->
      @aerogelDriver.findCopters().then (copters) ->
        if copters.length is 0
          console.error('No copters found! Is your copter turned on?');
          process.exit(1)
        else
          @doConnect(copters[0], callback)

    findCopters: (callback) ->
      @aerogelDriver.findCopters().then (copters) ->
        return (callback)(copters);
