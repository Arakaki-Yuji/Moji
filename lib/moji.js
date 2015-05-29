module.exports = function Moji(){
    this.isBlank = function(string){
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
    this.camelize = function(string, format){
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
    this.underscore = function(string){
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
    this.between = function(string, fromIndex, toIndex){
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
    this.from = function(string, fromIndex){
        return this.between(string, fromIndex)
    }

    this.to = function(string, toIndex){
        return this.between(string, 0, toIndex)
    }

    this.nl2br = function(string){
        return string.replace(/\r\n|\n|\r/g, '<br />');
    }
};
