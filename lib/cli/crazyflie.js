require("cylon");

var crazyflie,
    os = require('os'),
    fs = require('fs'),
    path = require('path');

crazyflie = {
  setUdevRules: function() {
    this._copyUdev(true);
    return true;
  },

  _copyUdev: function(force) {
    var cylonProcess, udevBkpPath, udevSysPath;
    if (force === null) {
      force = false;
    }
    udevSysPath = '/etc/udev/rules.d/99-crazyradio.rules';
    udevBkpPath = path.join("" + __dirname, "./deps/99-crazyradio.rules");
    if (!fs.existsSync(udevSysPath) || force) {
      cylonProcess = new Cylon.Process();
      cylonProcess.spawn('sudo', ['cp', udevBkpPath, udevSysPath]);
      return true;
    } else {
      return false;
    }
  }

};

module.exports = crazyflie;
