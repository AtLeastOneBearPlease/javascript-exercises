const reverseString = function(string) {

    let stringStart = string.split("");
    let reversedString = [];

    for(let i = string.length - 1; i >= 0; i--){
        reversedString.push(stringStart[i]);    
    }

    let newArray = reversedString.join('');

    return newArray;
};


// Do not edit below this line
module.exports = reverseString;
