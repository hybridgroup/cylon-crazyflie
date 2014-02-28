var cliCommands,
    crazyflie = require('./crazyflie');

cliCommands = {
  crazyflie: {
    setUdevRules: crazyflie.setUdevRules,
    _copyUdev: crazyflie._copyUdev
  }
};

module.exports = cliCommands;
