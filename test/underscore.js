var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('underscore', function(){
        it('return snake_case of string', function(){
            assert.equal(Moji.underscore('Name'), 'name');
            assert.equal(Moji.underscore('NameSnake'), 'name_snake');
        });
        it('if string alread snake_case, return same string', function(){
            assert.equal(Moji.underscore('name'), 'name');
            assert.equal(Moji.underscore('name_snake'), 'name_snake');
        })
    });
});
