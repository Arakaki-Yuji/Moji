var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('isBlank', function () {
        it('if argument is null, return true.', function () {
            assert.equal(Moji.isBlank(null), true);
        });
        it('if argument is undefiend, return true.', function () {
            assert.equal(Moji.isBlank(undefined), true);
        });
        it('if argument is blank string, return true.', function () {
            assert.equal(Moji.isBlank(""), true);
        });
        it('if argument is string that is only space, return true.', function(){
            assert.equal(Moji.isBlank("   "), true);
            assert.equal(Moji.isBlank("　　　"), true);
            assert.equal(Moji.isBlank("　　  "), true);
        });
        it('if argument is string that is not only space, return false.', function(){
            assert.equal(Moji.isBlank("Hello World"), false);
        });
        it('argument is not changed.', function(){
            str = "Hello World";
            Moji.isBlank(str);
            assert.equal(str, "Hello World");
        });
    });

    describe('cameraize', function(){
        it('if second argument is null, return UpperCamel of string', function(){
            assert.equal(Moji.camelize('name'), 'Name');
            assert.equal(Moji.camelize('name_snake'), 'NameSnake');
        });
        it('if second argument is `upper`, return UpperCamel of string', function(){
            assert.equal(Moji.camelize('name', 'upper'), 'Name');
            assert.equal(Moji.camelize('name_snake', 'upper'), 'NameSnake');
        });
        it('if second argument is `lower`, return LowerCamel of string', function(){
            assert.equal(Moji.camelize('name', 'lower'), 'name');
            assert.equal(Moji.camelize('name_snake', 'lower'), 'nameSnake');
        });
        if('if second argument is not `lower` or `upper`, throw Error', function(){
            assert.throw(Moji.camelize('name', 'not_format'),
                         'Second argument must be `upper` or `lower`');
        });
    });
});
