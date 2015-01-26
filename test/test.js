/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Player = require(process.cwd() + '/lib/Player');



describe('Mocha', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Player', function () {
  describe('Player constructor with no arguments passed', function () {
    it('should have a default name, a default dexterity, and a default isZombie property', function () {
      var player = new Player();
      expect(player.name).to.equal('Player');
      expect(player.isZombie).to.be.false;
      expect(player.dexterity).to.equal(0.5);
    });
  });
});
