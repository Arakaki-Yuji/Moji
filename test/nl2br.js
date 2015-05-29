var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('nl2br', function(){
        it('replace newline character to <br />', function(){
            assert.equal(Moji.nl2br('Hello\nWorld'), 'Hello<br />World');
            assert.equal(Moji.nl2br('Hello\rWorld'), 'Hello<br />World');
            assert.equal(Moji.nl2br('Hello\r\nWorld'), 'Hello<br />World');
        });
    });
});
