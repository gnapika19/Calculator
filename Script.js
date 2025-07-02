let display = document.getElementById('display');
let current = '';
let previous = '';
let operation = null;

function updateDisplay() {
  display.textContent = current || '0';
}

function appendNumber(number) {
  if (number === '.' && current.includes('.')) return;
  current += number;
  updateDisplay();
}

function clearDisplay() {
  current = '';
  previous = '';
  operation = null;
  updateDisplay();
}

function setOperation(op) {
  if (current === '') return;
  if (previous !== '') {
    calculate();
  }
  operation = op;
  previous = current;
  current = '';
}

function calculate() {
  let result;
  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  if (isNaN(prev) || isNaN(curr)) return;

  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr === 0 ? 'Error' : prev / curr;
      break;
    default:
      return;
  }
  current = result.toString();
  operation = null;
  previous = '';
  updateDisplay();
}

function toggleSign() {
  if (current) {
    current = (parseFloat(current) * -1).toString();
    updateDisplay();
  }
}

function percent() {
  if (current) {
    current = (parseFloat(current) / 100).toString();
    updateDisplay();
  }
}

updateDisplay();
