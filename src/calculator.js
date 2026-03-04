#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 * 
 * Supported Operations:
 * - Addition: add(a, b)
 * - Subtraction: subtract(a, b)
 * - Multiplication: multiply(a, b)
 * - Division: divide(a, b)
 * - Modulo: modulo(a, b)
 * - Exponentiation: power(base, exponent)
 * - Square Root: squareRoot(n)
 */

// Addition operation
function add(a, b) {
  return a + b;
}

// Subtraction operation
function subtract(a, b) {
  return a - b;
}

// Multiplication operation
function multiply(a, b) {
  return a * b;
}

// Division operation
function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

// Modulo operation
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Cannot perform modulo with divisor of zero');
  }
  return a % b;
}

// Exponentiation operation
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square root operation
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Cannot calculate square root of negative number');
  }
  return Math.sqrt(n);
}

// Main CLI function
function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.log('Usage: calculator.js <operation> <num1> [num2]');
    console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    process.exit(1);
  }

  const operation = args[0].toLowerCase();
  
  // Handle square root (only needs one argument)
  if (operation === 'sqrt' || operation === 'squareroot') {
    const num = parseFloat(args[1]);
    if (isNaN(num)) {
      console.error('Error: Invalid number provided');
      process.exit(1);
    }
    try {
      const result = squareRoot(num);
      console.log(`sqrt(${num}) = ${result}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
    return;
  }

  // All other operations require two arguments
  if (args.length < 3) {
    console.log('Usage: calculator.js <operation> <num1> <num2>');
    console.log('Operations: add, subtract, multiply, divide, modulo, power, sqrt');
    process.exit(1);
  }

  const num1 = parseFloat(args[1]);
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Invalid numbers provided');
    process.exit(1);
  }

  let result;

  switch (operation) {
    case 'add':
    case '+':
      result = add(num1, num2);
      break;
    case 'subtract':
    case '-':
      result = subtract(num1, num2);
      break;
    case 'multiply':
    case '*':
    case 'x':
      result = multiply(num1, num2);
      break;
    case 'divide':
    case '/':
    case '÷':
      try {
        result = divide(num1, num2);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
      break;
    case 'modulo':
    case '%':
      try {
        result = modulo(num1, num2);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
      }
      break;
    case 'power':
    case '^':
    case '**':
      result = power(num1, num2);
      break;
    default:
      console.error(`Error: Unknown operation '${operation}'`);
      console.log('Available operations: add, subtract, multiply, divide, modulo, power, sqrt');
      process.exit(1);
  }

  console.log(`${num1} ${operation} ${num2} = ${result}`);
}

// Export functions for use as a module
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot
};

// Run CLI if this is the main module
if (require.main === module) {
  main();
}
