###
 * cylon crazyflie adaptor
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
###

'use strict';

require './cylon-crazyflie'
Aerogel = require 'aerogel'
namespace = require 'node-namespace'

namespace "Cylon.Adaptor", ->
  class @Crazyflie extends Cylon.Basestar
    constructor: (opts) ->
      super
      @connection = opts.connection
      @name = opts.name
      @aerogelDriver = new Aerogel.CrazyDriver()
      @copter = new Aerogel.Copter(@aerogelDriver)
      @port = opts.port
      @connector = @copter
      @proxyMethods Cylon.Crazyflie.Commands, @copter, this

    commands: -> Cylon.Crazyflie.Commands

    connect: (callback) ->
      Logger.info "Connecting to Crazyflie '#{@name}'..."

      @copter.connect @port

      (callback)(null)
      @connection.emit 'connect'

    disconnect: ->
      Logger.info "Disconnecting from Crazyflie '#{@name}'..."
      @copter.shutdown()
