/*
 * cylon crazyflie commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

"use strict";

module.exports = [
  /**
   * Makes the Crazyflie take off
   *
   * @return {void}
   * @publish
   */
  "takeoff",

  /**
   * Makes the Crazyflie land
   *
   * @return {void}
   * @publish
   */
  "land",

  /**
   * Makes the Crazyflie hover
   *
   * @return {void}
   * @publish
   */
  "hover",

  /**
   * Sets the pitch of the Crazyflie
   *
   * @return {void}
   * @publish
   */
  "setPitch",

  /**
   * Sets the yaw of the Crazyflie
   *
   * @return {void}
   * @publish
   */
  "setYaw",

  /**
   * Sets the thrust of the Crazyflie
   *
   * @return {void}
   * @publish
   */
  "setThrust",

  /**
   * Shuts down the Crazyflie
   *
   * @return {void}
   * @publish
   */
  "shutdown",

  /**
   * Sets a param in the Crazyflie driver
   *
   * @return {void}
   */
  "setParam",

  /**
   * Finds all nearby Crazyflies via the CrazyRadio
   *
   * @return {void}
   */
  "findCopters"
];
