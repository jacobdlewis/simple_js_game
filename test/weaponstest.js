/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Weapon = require(process.cwd() + '/lib/Weapon');



describe('Mocha', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Weapon', function () {
  describe('Weapon constructor with Sword passed', function () {
    it('should have a name of Sword, damage of 0.2, accuracy of 0.8, and ammo of Infinity', function () {
      var sword = new Weapon({name: 'Sword', damage: 0.2, ammo: Infinity});
      expect(sword.name).to.equal('Sword');
      expect(sword.damage).to.equal(0.2);
      expect(sword.accuracy).to.equal(0.8);
      expect(sword.ammo).to.equal(Infinity);
    });
  });
});
