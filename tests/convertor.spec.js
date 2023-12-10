import { Convertor } from '../src/convertor.js';
import { test, expect } from './test.js'

// Test case for base conversion where both bases are powers of 2
test('Successive Divisions - Base 2 to Base 16', () => {
    expect(Convertor('1101', 2, 16)).toBe('d (rapid conversion)')
})

// Test case for base conversion where baseFrom is bigger than baseTo
test('Successive Divisions - Base 8 to Base 2', () => {
    expect(Convertor('765', 8, 2)).toBe("111011101 (rapid conversion)");
});

// Test case for intermediate base 10 conversion
test('Intermediate Base 10 Conversion', () => {
    expect(Convertor('10', 16, 8)).toBe('20 (intermediate base 10)');
});

// Test case for rapid conversion from base 4 to base 16
test('Rapid Conversion - Base 4 to Base 16', () => {
    expect(Convertor('332', 4, 16)).toBe('e3 (rapid conversion)');
});

// Test case for rapid conversion from base 8 to base 2
test('Rapid Conversion - Base 8 to Base 2', () => {
    expect(Convertor('765', 8, 2)).toBe("111011101 (rapid conversion)");
});

// Test case for the same base conversion
test('Same Base Conversion', () => {
    expect(Convertor('1101', 2, 2)).toBe('1101');
});