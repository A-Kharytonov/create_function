function getWord() {
	alert('Hello world');
}

getWord();

let expression = function(){
	 alert('10')
}

expression()

const num1 = Number(prompt('Ввести первое число'))
const num2 = Number(prompt('Ввести второе число'))


let multiply = (width, height) => width * height;

alert(multiply(num1, num2));

// 2 завдання 
const number1 = Number(prompt('Ввести первое число'))
const number2 = Number(prompt('Ввести второе число'))

function compare(a, b) {
	if (a < b) return -1
	if (a > b) return 1
	if (a == b) return 0
}	

// 3 завдання 


const digit1 = prompt('Введіть першу цифру');
const digit2 = prompt('Введіть другу цифру');
const digit3 = prompt('Введіть третю цифру');

function makeNumber(a, b, c) {
	alert(`${a}${b}${c}`);
}



makeNumber(digit1, digit2, digit3);


