/* eslint-disable no-undef */
var expect = require('chai').expect;
var csvDiff = require('../index');

describe('test', () => {
  it('is a test', () => {
    expect('test').to.equal('test');
  });

  it('returns 5', () => {
    expect(csvDiff()).to.equal(5);
  });
});