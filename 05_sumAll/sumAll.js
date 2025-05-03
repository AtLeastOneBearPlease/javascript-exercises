function checkForErrors(x, y){
     //reject non numbers
     if(typeof x !== "number" || typeof y !== "number") return "ERROR";

     //reject non integers
     if(Number.isInteger(x) === false || Number.isInteger(y) === false) return "ERROR";
 
     //reject negative numbers
     if(x < 0 || y < 0) return "ERROR";
}

sumAll = function(x, y) {

   if(checkForErrors(x, y) === "ERROR") return "ERROR";

    let finalSum = 0;
    let larger = 0;
    let smaller = 0;

    //Always add from smaller to larger number
    if(x > y){
        larger = x;
        smaller = y;
    }
    else {
        larger = y;
        smaller = x;
    }

    for(let i = smaller; i <= larger; i++){
        finalSum += i;
    }

    return finalSum;
};

console.log(sumAll(-10, 4));

// Do not edit below this line
module.exports = sumAll;
