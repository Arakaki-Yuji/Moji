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
};
