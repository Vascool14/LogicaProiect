import { BASE16 } from './utils.js';

export function Calculator(a, b, base, operation) {
    // a: String, b: String, base: String, operation: String
    const validBase = BASE16.slice(0, base);
    for(let i = 0; i < a.length; i++) {
        if(!validBase.includes(a[i])){
            alert('Digit \"'+a[i]+'\" is invalid in base '+base); return;
        }
    }
    for(let i = 0; i < b.length; i++) {
        if(!validBase.includes(b[i])){
            alert('Digit \"'+b[i]+'\" is invalid in base '+base); return;
        }
    }

    if(a === '' || b === '') return 0;

    const decimalA = parseInt(a, base);
    const decimalB = parseInt(b, base);

    if(operation === '+') { return (decimalA + decimalB).toString(base)+' (base '+base+')' }
    if(operation === '-') { return (decimalA - decimalB).toString(base)+ ' (base '+base+')' }
    if(operation === '*') { return (decimalA * decimalB).toString(base)+' (base '+base+')' }
    if(operation === '/') { return (Math.floor(decimalA / decimalB)).toString(base)+' (base '+base+')' }
}