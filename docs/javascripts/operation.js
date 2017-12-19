/*jshint esversion: 6, strict: false */
module.exports = function (number) {
	return {
		round: Math.round(number),
		floor: Math.floor(number),
		ceil: Math.ceil(number),
		addition: function (number1, number2) {
			return number1 + number2;
		},
		substraction: function (number1, number2) {
			return number1 - number2;
		},
		multiplication: function (number1, number2) {
			return number1 * number2;
		},
		division: function (number1, number2) {
			return number1 / number2;
		}
	};
};