const numbers = document.querySelectorAll(".container");
const text = document.querySelector(".text");
let num = [];
let operator;
let currentNumber = "";

document.getElementById("one").addEventListener("click", function () {
  text.textContent += "1";
  currentNumber += "1";
});

document.getElementById("two").addEventListener("click", function () {
  text.textContent += "2";
  currentNumber += "2";
});

document.getElementById("three").addEventListener("click", function () {
  text.textContent += "3";
  currentNumber += "3";
});

document.getElementById("four").addEventListener("click", function () {
  text.textContent += "4";
  currentNumber += "4";
});

document.getElementById("five").addEventListener("click", function () {
  text.textContent += "5";
  currentNumber += "5";
});

document.getElementById("six").addEventListener("click", function () {
  text.textContent += "6";
  currentNumber += "6";
});

document.getElementById("seven").addEventListener("click", function () {
  text.textContent += "7";
  currentNumber += "7";
});

document.getElementById("eight").addEventListener("click", function () {
  text.textContent += "8";
  currentNumber += "8";
});

document.getElementById("nine").addEventListener("click", function () {
  text.textContent += "9";
  currentNumber += "9";
});

document.getElementById("zero").addEventListener("click", function () {
  text.textContent += "0";
  currentNumber += "0";
});

document.getElementById("addition").addEventListener("click", function () {
  text.textContent += "+";
  num.push(parseInt(currentNumber));
  currentNumber = "";
  operator = "+";
});

document.getElementById("subtraction").addEventListener("click", function () {
  text.textContent += "-";
  num.push(parseInt(currentNumber));
  currentNumber = "";
  operator = "-";
});

document
  .getElementById("multiplication")
  .addEventListener("click", function () {
    text.textContent += "*";
    num.push(parseInt(currentNumber));
    currentNumber = "";
    operator = "*";
  });

document.getElementById("division").addEventListener("click", function () {
  text.textContent += "/";
  num.push(parseInt(currentNumber));
  currentNumber = "";
  operator = "/";
});

document.getElementById("delete").addEventListener("click", function () {
  text.textContent = "";
});

document.getElementById("equal").addEventListener("click", function () {
  num.push(parseInt(currentNumber));
  currentNumber = "";

  if (operator == "+") {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }
    text.textContent = sum;
  }
  if (operator == "-") {
    let sum = num[0];
    for (let i = 1; i < num.length; i++) {
      sum -= num[i];
    }
    text.textContent = sum;
  }
  if (operator == "*") {
    let sum = 1;
    for (let i = 0; i < num.length; i++) {
      sum *= num[i];
    }
    text.textContent = sum;
  }
  if (operator == "/") {
    let sum = num[0];
    for (let i = 1; i < num.length; i++) {
      sum /= num[i];
    }
    text.textContent = sum;
  }

  num = [];
});
