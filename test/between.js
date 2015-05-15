var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('between', function(){
        it('get chars between from second arg to third arg', function(){
            assert.equal(Moji.between('Hello World', 6, 10), 'World')
        });

        describe('if third arg not assing', function(){
            it('get chars between from second arg to last chars of first arg', function(){
                assert.equal(Moji.between('Hello World', 6), 'World')
            });
        })
    });
});
