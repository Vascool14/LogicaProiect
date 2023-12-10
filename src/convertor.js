import { BASE16 } from './utils.js';

export function Convertor(input, baseFrom, baseTo) {
    // input: string, baseFrom: int, baseTo: int
    const inputArray = input.split(''); // the input array

    const validBaseArr = BASE16.slice(0, baseFrom); // ex: if baseFrom == 2 => validBaseArr is ['0','1']

    // check if the input is valid
    for(let i = 0; i < inputArray.length; i++) {
        if(!validBaseArr.includes(inputArray[i])) {
            return alert('Invalid input! \n\"'+inputArray[i]+'\" is not a valid digit for base \"'+baseFrom+'\"');            
        }
    }

    // if the bases are the same avoid useless calculations
    if(baseFrom == baseTo) return input;

    const powersOf2 = [2,4,8,16];
    if(powersOf2.includes(baseFrom) && powersOf2.includes(baseTo)) {
        return rapidConversion(input, baseFrom, baseTo); // if both bases are powers of 2 use rapid conversion
    }

    // if the baseFrom is bigger than baseTo use SUCCESSIVE DIVISIONS
    if(baseFrom > baseTo) return convertSuccessiveDivisions(input, baseFrom, baseTo);
    // else use SUBSTITUTION CONVERSION
    else return intermediateBase10(input, baseFrom, baseTo);
}

function convertSuccessiveDivisions(number, fromBase, toBase) {
    // Convert the number to base 10
    let decimalNumber = 0;
    let multiplier = 1;

    while (number.length > 0) {
        const digit = parseInt(number.charAt(number.length - 1), fromBase);
    
        if (isNaN(digit) || digit >= fromBase) {
            console.error('Invalid digit for base', fromBase);
            return;
        }

        decimalNumber += digit * multiplier;
        multiplier *= fromBase;
        number = number.slice(0, -1);
    }

    // Convert the decimal number to the desired base
    let result = '';
    do {
        const digit = decimalNumber % toBase;
        result = digit.toString() + result;
        decimalNumber = Math.floor(decimalNumber / toBase);
    } while (decimalNumber > 0);

    return result.toString()+' (successive divisions)';
}

function rapidConversion(number, fromBase, toBase) {
    // a,b from {2,4,8,16}, and a^n = b^m, where n,m are integers
    // ex: 2^4 = 4^2 = 16

    // true rapid conversions only work in these cases
    // 1. from base 2 to base { 4, 8, 16 }
    // 2. from base 4 to base { 2, 16 }
    // 3. from base 8 to base { 2 }

    let numStr = number.toString();
    let result = '';

    if(fromBase == 2 || (fromBase == 4 && (toBase == 16 || toBase == 2)) || (fromBase == 8 && toBase == 2)) {
        const power = Math.log2(toBase);
        for(let i = numStr.length-1; i >= 0; i -= power) {
            var lastDigits = '';
            if(i-power + 1 < 0) lastDigits = '0'.repeat(power - i + 1)+ numStr.slice(0,i+1);
            else lastDigits = numStr.slice(i-power+1, i+1);
            result += parseInt(lastDigits, fromBase).toString(toBase);
        }
        return result.split('').reverse().join('')+' (rapid conversion)';
    }
    return intermediateBase10(number, fromBase, toBase);
    // rest of the cases, either way they would need an extra base, whether it's base 10 or base 2
}

function intermediateBase10(input, baseFrom, baseTo){
    const inputToBase10 = parseInt(input, baseFrom).toString(10);
    return parseInt(inputToBase10, 10).toString(baseTo).toString()+' (intermediate base 10)';
}