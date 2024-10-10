import { EventEmitter } from 'node:events';
import { add } from './add.mjs';
import { multiply } from './multiply.mjs';

const arg = process.argv.slice(2);
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

const myEmitter = new EventEmitter.EventEmitter();

myEmitter.on('+', (a, b) => {
    console.log(`Result: ${add(a, b)}`);
});

myEmitter.on('*', (a, b) => {
    console.log(`Result: ${multiply(a, b)}`);
});

if (['+', '*'].includes(operator)) {
    myEmitter.emit(operator, num1, num2);
}
