var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('multiple', function(){
        it('get string that joined by second arguments number', function(){
            assert.equal(Moji.multiple('Hello', 3), 'HelloHelloHello')
        });
    });
});
