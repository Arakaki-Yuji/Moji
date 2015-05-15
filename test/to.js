var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('to', function(){
        it('get chars from first index of string from second arguments', function(){
            assert.equal(Moji.to('Hello World', 5), 'Hello ')
        });
    });
});
