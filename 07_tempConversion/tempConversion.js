function roundToTenths(number){
  return Math.round(number * 10) / 10;
}

const convertToCelsius = function(farenheit) {
  return roundToTenths( (farenheit - 32) * (5/9) );
};

const convertToFahrenheit = function(celsius) {
  return roundToTenths(celsius * (9/5) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
