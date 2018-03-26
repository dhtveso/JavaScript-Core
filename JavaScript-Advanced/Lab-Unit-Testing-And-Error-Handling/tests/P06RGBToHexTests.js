let expect = require('chai').expect;
const rgbToHexColor = require('../P06RGBToHex')

describe('RGB to Hex tests', function () {
  it('Shout be #000000 when 0, 0 , 0', function () {
    expect(rgbToHexColor(0,0,0)).to.be.equal('#000000');
  })
  it('Shout be undefined when 0, 0 , -1', function () {
    expect(rgbToHexColor(0,0,-1)).to.be.equal(undefined);
  })
  it('Shout be undefined when 0, -1, 0', function () {
    expect(rgbToHexColor(0, -1, 0)).to.be.equal(undefined);
  })
  it('Shout be undefined when -1, 0, 0', function () {
    expect(rgbToHexColor(-1, 0, 0)).to.be.equal(undefined);
  })
  it('Shout be undefined when 0, 0 , 256', function () {
    expect(rgbToHexColor(0,0,256)).to.be.equal(undefined);
  })
  it('Shout be undefined when 0, 256, 0', function () {
    expect(rgbToHexColor(0, 256, 0)).to.be.equal(undefined);
  })
  it('Shout be undefined when 256, 0, 0', function () {
    expect(rgbToHexColor(256, 0, 0)).to.be.equal(undefined);
  })
  it('Shout be undefined when 0, 0 , string', function () {
    expect(rgbToHexColor(0,0,'b')).to.be.equal(undefined);
  })
  it('Shout be undefined when 0, string, 0', function () {
    expect(rgbToHexColor(0, 'g', 0)).to.be.equal(undefined);
  })
  it('Shout be undefined when string, 0, 0', function () {
    expect(rgbToHexColor('r', 0, 0)).to.be.equal(undefined);
  })
  it('Shout be true when 255, 255, 255', function () {
    expect(rgbToHexColor(255, 255, 255)).to.be.equal('#FFFFFF');
  })
})