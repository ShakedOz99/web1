const display = document.getElementById("display");

function appendToDisplay(input) {
  if (input === Math.PI.toFixed(15) || input === Math.E.toFixed(15)) {
    clearDisplay();
  }
  if (display.value === "Error") {
    display.value = "";
  }
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  display.value = display.value.replaceAll("^", "**");
  display.value = display.value.replaceAll("mod", "%");
  display.value = display.value.replaceAll("exp", "*10**");
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function square() {
  display.value = Math.pow(display.value, 2);
}

function divide() {
  display.value = 1 / display.value;
}

function abs() {
  display.value = Math.abs(display.value);
}

function tenPower() {
  display.value = Math.pow(10, display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function plusMinus() {
  display.value *= -1;
}

function factorial() {
  let result = 1;
  for (let i = 1; i <= display.value; i++) {
    result *= i;
  }
  display.value = result;
}
