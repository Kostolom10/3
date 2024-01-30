// function script() {
//   alert("hello");
// }
// script();
// function summ(a, b) {
//   alert(a + b);
// }
// summ(5, 4);
// function calculateRectangleArea(width, height) {
//   alert(width * height);
// }
// calculateRectangleArea(4, 7);
// function isEven(num) {
//   if (num % 2) {
//     alert("false");
//   } else {
//     alert("true");
//   }
// }
// isEven(prompt());
// function verefication() {
//   let age = prompt("Введите свой возраст");
//   if (age >= 18) {
//     alert("OK");
//   } else {
//     alert("NO");
//   }
// }
// verefication();

// function greeting() {
//   let name = prompt("Введите имя!");
//   if (name) {
//     alert("Привет, " + name);
//   } else {
//     greeting();
//   }
// }
// greeting();

// function big(a, b) {
//   let number1 = prompt("Введите первое число");
//   let number2 = prompt("Введите второе число");
//   if (number1 > number2) {
//     alert(number1);
//   } else {
//     alert(number2);
//   }
// }
// big();

// function day() {
//   let today = "четверг";
//   let userday = prompt("Какой сейчас день недели?");
//   if (today == userday) {
//     alert("Сегодня " + today);
//   } else {
//     alert("неверно");
//   }
// }
// day();

// function light() {
//   let userlight = prompt("какой цвет светофора?");
//   if (userlight == "красный") {
//     alert("стой");
//   } else if (userlight == "желтый") {
//     alert("жди");
//   } else if (userlight == "зеленый") {
//     alert("иди");
//   }
// }
// light();

function calculateMortgage(percent, contribution, amount, countMonths) {
  if (
    isNaN(percent) ||
    isNaN(contribution) ||
    isNaN(amount) ||
    isNaN(countMonths)
  ) {
    return;
  }
  percent = percent / 100 / 12;
}
