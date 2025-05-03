const FOUR_YEARS = 4;
const CENTURY = 100;
const FOUR_CENTURIES = 400;

function divisibleByFourYears (year){
    return year % FOUR_YEARS === 0;
}

function notDivisibleByOneCentury(year){
    return year % CENTURY !== 0;
}

function divisibleByFourCenturies(year){
    return year % FOUR_CENTURIES === 0;
}

const leapYears = function(year) {

    if(divisibleByFourCenturies(year)) return true;

    if(divisibleByFourYears(year) && notDivisibleByOneCentury(year)) return true;

    return false;

};

// Do not edit below this line
module.exports = leapYears;
