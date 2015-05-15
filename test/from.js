var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('from', function(){
        it('get chars  from second arg', function(){
            assert.equal(Moji.from('Hello World', 6), 'World')
        });
    });
});
