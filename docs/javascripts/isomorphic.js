/* jshint node: true */
var number1 = 13,
	number2 = 7.7,
	tools = require('./operation.js'),
	operation = tools();

console.log('addition', operation.addition(number1, number2));
console.log('substraction', operation.substraction(number1, number2));
console.log('multiplication', operation.multiplication(number1, number2));
console.log('division', operation.division(number1, number2));
console.log('round', tools(number2).round);
console.log('floor', tools(number2).floor);
console.log('ceil', tools(number2).ceil);