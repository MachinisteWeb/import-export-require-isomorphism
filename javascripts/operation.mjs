/*jshint esversion: 6, strict: false */
export default function (number) {
	return {
		round: Math.round(number),
		floor: Math.floor(number),
		ceil: Math.ceil(number)
	};
}

export function addition(number1, number2) {
	return number1 + number2;
}

export function substraction(number1, number2) {
	return number1 - number2;
}

export function multiplication(number1, number2) {
	return number1 * number2;
}

export function division(number1, number2) {
	return number1 / number2;
}