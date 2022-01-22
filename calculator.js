function sum(a, b) {
  const number1 = a || 0;
  const number2 = b || 0;
  return number1 + number2;
}

function subtract(a, b) {
  const number1 = a || 0;
  const number2 = b || 0;
  return number1 - number2;
}

function divide(a, b) {
  if (a === 0 || b === 0) {
    return error;
  }
  return a / b;
}

function multiply(a, b) {
  if (a === 0 || b === 0) {
    return 0;
  }
  return a * b;
}

// The following is required to make unit tests work. Please ignore it.
module.exports = { sum, subtract, divide, multiply };
