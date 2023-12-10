import { Calculator } from '../src/calculator.js';
import { test, expect } from './test.js'

test('Addition-1', () => {
    expect(Calculator('9', '5', 16, '+')).toBe('e (base 16)');
});
test('Addition-2', () => {
    expect(Calculator('11', '1', '2', '+')).toBe('100 (base 2)');
})

// Test subtraction
test('Subtraction-1', () => {
    expect(Calculator('11', '3', 16, '-')).toBe('e (base 16)');
});
test('Subtraction-2', () => {
    expect(Calculator('101', '10', 2, '-')).toBe('11 (base 2)');
});

// Test multiplication
test('Multiplication-1', () => {
    expect(Calculator('12', '4', 16, '*')).toBe('48 (base 16)');
});
test('Multiplication-2', () => {
    expect(Calculator('110', '10', 2, '*')).toBe('1100 (base 2)');
});

// // Test division
test('Division-1', () => {
    expect(Calculator(30, 3, 16, '/')).toBe('10 (base 16)');
});
test('Division-2', () => {
    expect(Calculator(110, 11, 2, '/')).toBe('10 (base 2)');
});

// I don't need to test for invalid inputs or invalid bases due to the user having to choose from valid options only, an upside of making an UI which restricts the user's input.