const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((acc, num) => acc * num);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(num) {
  let total = 1;

  for(let i = 1; i <= num; i++){
    total = total * i;
  }

  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

sum([7]);
sum([7, 11]);
