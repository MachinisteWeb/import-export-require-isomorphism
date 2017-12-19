/* jshint esversion: 6 */
import tools from "./operation.mjs";
import { addition, substraction, multiplication, division } from "./operation.mjs";

var number1 = 13,
	number2 = 7.7;

console.log('addition', addition(number1, number2));
console.log('substraction', substraction(number1, number2));
console.log('multiplication', multiplication(number1, number2));
console.log('division', division(number1, number2));
console.log('round', tools(number2).round);
console.log('floor', tools(number2).floor);
console.log('ceil', tools(number2).ceil);