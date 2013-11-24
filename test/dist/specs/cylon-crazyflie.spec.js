(function() {
  'use strict';
  var cylonCrazyflie;

  cylonCrazyflie = source("cylon-crazyflie");

  describe("basic tests", function() {
    it("standard async test", function(done) {
      var bool;
      bool = false;
      bool.should.be["false"];
      setTimeout(function() {
        bool.should.be["false"];
        bool = true;
        return bool.should.be["true"];
      });
      150;
      setTimeout(function() {
        bool.should.be["true"];
        return done();
      });
      return 300;
    });
    it("standard sync test", function() {
      var data, obj;
      data = [];
      obj = {
        id: 5,
        name: 'test'
      };
      data.should.be.empty;
      data.push(obj);
      data.should.have.length(1);
      data[0].should.be.eql(obj);
      return data[0].should.be.equal(obj);
    });
    return it("cylon-crazyflie should be awesome", function() {
      cylonCrazyflie.should.have.keys('awesome');
      cylonCrazyflie.awesome.should.be.a('function');
      return cylonCrazyflie.awesome().should.be.equal('awesome');
    });
  });

}).call(this);
