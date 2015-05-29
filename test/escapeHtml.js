var assert = require('assert');
var Moji = require('../lib/index.js');

describe('Moji', function () {
    describe('escapeHtml', function(){
        it('escape html', function(){
            assert.equal(Moji.escapeHtml('<script>alert("Hello");</script>'),
                   '&lt;script&gt;alert(&quot;Hello&quot;);&lt;/script&gt;');
            // 改行タグ<br />は許可する
            assert.equal(Moji.escapeHtml('<script>alert("Hello");</br></script>'),
                         '&lt;script&gt;alert(&quot;Hello&quot;);</br>&lt;/script&gt;');
            assert.equal(Moji.escapeHtml('<script>alert("Hello");<br></script>'),
                         '&lt;script&gt;alert(&quot;Hello&quot;);<br>&lt;/script&gt;');
            assert.equal(Moji.escapeHtml('<script>alert("Hello");<br /></script>'),
                         '&lt;script&gt;alert(&quot;Hello&quot;);<br />&lt;/script&gt;');
        });
    });
});
