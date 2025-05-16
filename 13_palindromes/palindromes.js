const palindromes = function (string) {

    //pull out spaces of string
    let spacelessString = string.replaceAll(' ', '');
    spacelessString = spacelessString.toLowercase();

    let reversedString = spacelessString.split('').reverse().join('');

    if (spacelessString === reversedString){
        return true;
    }
    return false;

};

// Do not edit below this line
module.exports = palindromes;
