function Moji(){};

Moji.prototype.isBlank = function(string){
    if(string === null ||
       string === undefined ||
       string === "" ||
       string.replace(/\s+/g,"") === ""){
        return true;
    }
    return false;
}

/*
 * return CamelCase of string.
 * if format is null or `upper`, change to UpperCamel
 * if format is `lower`, change to LowerCamel
 */
Moji.prototype.camelize = function(string, format){
    resultStr = string;
    if( format === undefined || format === null){
        format = 'upper';
    }

    if(format === 'upper'){
        resultStr = string.replace(/^[a-z]|_[a-z]/g, function(match){
            match = match.replace(/_/, '');
            return match.toUpperCase();
        })
    } else if (format === 'lower'){
        resultStr = string.replace(/_[a-z]/g, function(match){
            match = match.replace(/_/, '');
            return match.toUpperCase();
        })
    } else {
        throw new Error('Second argument must be `upper` or `lower`');
    }
    return resultStr;
}

/*
 * return snake_case of string.
 */
Moji.prototype.underscore = function(string){
    resultStr = string.replace(/^[A-Z]/g, function(match){
        return match.toLowerCase();
    });

    resultStr = resultStr.replace(/[A-Z]/g, function(match){
        return '_' + match.toLowerCase();
    });

    return resultStr;
}

/*
 * return chars of string between from fromIndex to toIndex.
 *
 * Default value of toIndex is last index of string.
 */
Moji.prototype.between = function(string, fromIndex, toIndex){
    result = '';
    if (toIndex === null || toIndex === undefined) {
        toIndex = string.length - 1 // last index of string
    }

    for (var i = Number(fromIndex); i <= Number(toIndex); i++ ){
        result = result + string[i];
    }
    return result;
}

/*
 * return chars of string  from fromIndex to last index of string.
 */
Moji.prototype.from = function(string, fromIndex){
    return this.between(string, fromIndex);
}

Moji.prototype.to = function(string, toIndex){
    return this.between(string, 0, toIndex);
}

Moji.prototype.nl2br = function(string){
    return string.replace(/\r\n|\n|\r/g, '<br />');
}

Moji.prototype.escapeHtml = function(string){
    escape_html = {
        "&":"&amp;",
        "\"": "&quot;",
        "<": "&lt;",
        ">": "&gt;"
    };
    return string.replace(/<br>|<\/br>|<br \/>|[&"<>]/g, function(match){
        // 改行タグは許可する
        if(match == '<br />' || match == '</br>' || match == '<br>' ){
            return match;
        }
        return escape_html[match];
    });
}

Moji.prototype.multiple = function(string, number){
    multiCount = number + 1;
    return new Array(multiCount).join(string);
}

module.exports = Moji
