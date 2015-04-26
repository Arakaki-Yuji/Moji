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
};
