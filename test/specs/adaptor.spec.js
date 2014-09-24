"use strict";

var Adaptor = source('adaptor'),
    Commands = source('commands');

var Aerogel = require('aerogel'),
    Cylon = require('cylon');

describe('Adaptor', function() {
  var adaptor, aerogelDriver, aerogelRadio, copter;

  beforeEach(function() {
    aerogelDriver = {};
    aerogelRadio = {};
    copter = {};

    stub(Aerogel, 'CrazyDriver').returns(aerogelDriver);
    stub(Aerogel, 'CrazyRadio').returns(aerogelRadio);
    stub(Aerogel, 'Copter').returns(copter);

    adaptor = new Adaptor();
  });

  afterEach(function() {
    Aerogel.CrazyDriver.restore();
    Aerogel.CrazyRadio.restore();
    Aerogel.Copter.restore();
  });

  it("subclasses Cylon.Adaptor", function() {
    expect(adaptor).to.be.an.instanceOf(Cylon.Adaptor);
    expect(adaptor).to.be.an.instanceOf(Adaptor);
  });

  describe("#constructor", function() {
    beforeEach(function() {
      stub(Adaptor.prototype, 'proxyMethods');
      adaptor = new Adaptor();
    });

    afterEach(function() {
      Adaptor.prototype.proxyMethods.restore();
    });

    it("sets @aerogelDriver to a crazy driver", function() {
      expect(adaptor.aerogelDriver).to.be.eql(aerogelDriver);
    });

    it("sets @aerogelDriver's 'radio' property to a new crazy radio", function() {
      expect(adaptor.aerogelDriver.radio).to.be.eql(aerogelRadio);
    });

    it('sets @copter to a new Aerogel Coptor instance', function() {
      expect(Aerogel.Copter).to.be.calledWithNew;
      expect(Aerogel.Copter).to.be.calledWith(aerogelDriver);
      expect(adaptor.copter).to.be.eql(copter);
    });

    it('sets @connector to the copter instance', function() {
      expect(adaptor.connector).to.be.eql(copter)
    });

    it("sets @commands to the list of Crazyflie commands", function() {
      expect(adaptor.commands).to.be.eql(Commands);
    });

    it('proxies methods between the adaptor and the copter', function() {
      expect(adaptor.proxyMethods).to.be.calledWith(Commands, copter, adaptor);
    });
  });

  describe("#connect", function() {
    var callback;

    beforeEach(function() {
      callback = spy();

      stub(adaptor, 'connectFirstCopter');
      stub(adaptor, 'doConnect');
    });

    context("if @connection.port is 'none'", function() {
      beforeEach(function() {
        adaptor.connection = { port: 'none' };
        adaptor.connect(callback);
      });

      it("calls #connectFirstCopter with the provided callback", function() {
        expect(adaptor.connectFirstCopter).to.be.calledWith(callback);
      });
    });

    context("if @connection.port is specified", function() {
      beforeEach(function() {
        adaptor.connection = { port: 'hello' };
        adaptor.connect(callback);
      });

      it("calls #doConnect with the port and the provided callback", function() {
        expect(adaptor.doConnect).to.be.calledWith('hello', callback);
      });
    });
  });

  describe("#doConnect", function() {
    var callback, promise;

    beforeEach(function() {
      callback = spy();
      promise = { then: stub().yields() };

      adaptor.connection = { emit: spy() };
      adaptor.copter = { connect: stub().returns(promise) }
      adaptor.doConnect("port", callback);
    });

    it("tells the copter to connect on the provided port", function() {
      expect(adaptor.copter.connect).to.be.calledWith("port");
    })

    context("after the copter is connected", function() {
      it("emits the 'connect' event", function() {
        expect(adaptor.connection.emit).to.be.calledWith('connect');
      });

      it("triggers the callback", function() {
        expect(callback).to.be.called;
      });
    });
  });

  describe("#connectFirstcopter", function() {
    var callback, promise;

    beforeEach(function() {
      callback = spy();
      promise = { then: stub() };

      aerogelDriver.findCopters = stub().returns(promise);

      stub(adaptor, 'doConnect');
    });

    afterEach(function() {
      adaptor.doConnect.restore();
    });

    context("if no copters are found", function() {
      beforeEach(function() {
        promise.then.yields([]);
      });

      it("throws an error", function() {
        var fn = function() { adaptor.connectFirstCopter(callback); };
        expect(fn).to.throw(Error, "No copters found!")
      });
    });

    context("if a copter is found", function() {
      beforeEach(function() {
        promise.then.yields(['/dev/null']);
      });

      it("connects to the copter", function() {
        adaptor.connectFirstCopter(callback);
        expect(adaptor.doConnect).to.be.calledWith('/dev/null', callback);
      });
    });
  });

  describe("#findCopters", function() {
    var promise, callback;

    beforeEach(function() {
      callback = spy();
      promise = { then: stub().yields([]) };

      aerogelDriver.findCopters = stub().returns(promise);
    });

    it("uses the Aerogel Driver's #findCopters method to find all crazyflies", function() {
      adaptor.findCopters(callback);
      expect(callback).to.be.calledWith(null, []);
    });
  });
});
