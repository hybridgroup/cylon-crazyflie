/* jshint expr:true */
"use strict";

var Commands = source("commands");

describe("Cylon.Crazyflie.Commands", function() {
  it("is an array of string commands", function() {
    expect(Commands).to.be.an("array");

    Commands.forEach(function(command) {
      expect(command).to.be.a("string");
    });
  });
});
