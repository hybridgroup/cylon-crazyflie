/*
 * cylon crazyflie commands
 * http://cylonjs.com
 *
 * Copyright (c) 2013 The Hybrid Group
 * Licensed under the Apache 2.0 license.
*/

module.exports = [
  /**
   * Makes the Crazyflie take off
   *
   * @return {null}
   * @publish
   */
  'takeoff',

  /**
   * Makes the Crazyflie land
   *
   * @return {null}
   * @publish
   */
  'land',

  /**
   * Makes the Crazyflie hover
   *
   * @return {null}
   * @publish
   */
  'hover',

  /**
   * Sets the pitch of the Crazyflie
   *
   * @return {null}
   * @publish
   */
  'setPitch',

  /**
   * Sets the yaw of the Crazyflie
   *
   * @return {null}
   * @publish
   */
  'setYaw',

  /**
   * Sets the thrust of the Crazyflie
   *
   * @return {null}
   * @publish
   */
  'setThrust',

  /**
   * Shuts down the Crazyflie
   *
   * @return {null}
   * @publish
   */
  'shutdown',

  /**
   * Sets a param in the Crazyflie driver
   *
   * @return {null}
   */
  'setParam',

  /**
   * Finds all nearby Crazyflies via the CrazyRadio
   *
   * @return {null}
   */
  'findCopters'
];
