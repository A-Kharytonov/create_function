function getWord() {
	alert('Hello world');
}

getWord();

let expression = function(){
	 alert('10')
}

expression()

// const num1 = Number(prompt('Ввести первое число'))
// const num2 = Number(prompt('Ввести второе число'))


// let multiply = (width, height) => width * height;

// alert(multiply(num1, num2));

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


const num1 = Number(prompt('Ввести длину'))
const num2 = Number(prompt('Ввести ширину'))

function calculateArea(length, width) {
	if (!length || !width){
		alert(length * length || width * width)
	}
	else {
		alert(length * width)
	}
}

calculateArea(num1, num2);

// Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%; 
// від 300 до 500 - 5%;
// від 500 і вище - 7%.


function getDiscount(amount) {
    if (amount < 200) return 0
    else if (amount < 300) return 3
    else if (amount < 500) return 5
    else return 7
}

[calculateCost(175), calculateCost(220), calculateCost(300), calculateCost(600)]

function calculateCost(totalPrice) {
    const multiplier = 1 - getDiscount(totalPrice) / 100
    return (totalPrice * multiplier).toFixed(2)
}

// Додаткове завдання
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('У вас є дозвіл ваших батьків?');
  }
}

let age = prompt('Скільки вам років?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ надано' );
} else {
  alert( 'У доступі відмовлено' );
}

// Додаткове завдання
function pow(x, n) {
	let result = x;
	
	for (let i = 1; i < n; i++) {
		result *=x
	}

	return result
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  alert(`Степінь ${n} не підтримується, використовуйте натуральне число`);
} else {
  alert( pow(x, n) );
}