/* global describe, it */
/* jshint expr: true */

'use strict';

var expect = require('chai').expect,
    Game   = require(process.cwd() + '/lib/Game');



describe('Mocha', function () {
  it('should expect true and false', function () {
    expect(true).to.be.true;
    expect(false).to.be.false;
  });
});

describe('Game', function () {
  describe('Game constructor with 4 players passed', function () {
    it('should do have four players', function () {
      var game = new Game(4);
      expect(game.players.length).to.equal(4);
    });
  });
});
describe('Game', function () {
  describe('Game should have a shuffle players function', function () {
    it('should have a shuffle players function', function () {
      var game = new Game(4);
      expect(game).to.have.property('shufflePlayerOrder');
    });
  });
});
