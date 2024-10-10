
import { multiply } from './multiply.mjs';
import { add } from './add.mjs';

const arg = process.argv.slice(2);

if (arg.length !== 3) {
    console.log('Usage: node 03-calc/index.js <num1> <operator> <num2>');
    process.exit();
}

const num1 = parseFloat(arg[0]);
const num2 = parseFloat(arg[1]);
const operator = arg[2];

// Error
if (isNaN(num1) || isNaN(num2)) {
    console.log('Invalid numbers ');
    process.exit();
}

if (operator !== '+' && operator !== '*') {
    console.log(`Invalid operator (${operator})`);
    process.exit();
}

// Main
if (operator === '+') {
    console.log(add(num1, num2));
}

if (operator === '*') {
    console.log(multiply(num1, num2));
}
