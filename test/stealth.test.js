var assert = require('assert')
var Stealth = require('../')
var fixtures = require('./fixtures')

/* global describe, it */

describe('stealth', function() {
  fixtures.valid.forEach(function(f) {
    describe('toString()', function() {
      it('should convert to base58-check string', function() {
        var stealth = new Stealth({
          payloadPubKey: new Buffer(f.receiverPayload.pubKey, 'hex'),
          scanPubKey: new Buffer(f.receiverScan.pubKey, 'hex')
        })
        assert.equal(stealth.toString(), f.address)
      })
    })

    describe('fromString()', function() {
      it('should convert from base58-check string to object', function() {
        var stealth = Stealth.fromString(f.base58)
        assert.equal(stealth.scanPubKey.toString('hex'), f.receiverScan.pubKey)
        assert.equal(stealth.payloadPubKey.toString('hex'), f.receiverPayload.pubKey)
      })
    })
  })
})
