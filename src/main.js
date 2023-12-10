import { Convertor } from './convertor.js';
import { Calculator } from './calculator.js';

const selects = document.querySelectorAll('select'); // the 4 select elements

// _______________________________________________________________
// convertor logic
const input = document.getElementById('convert-input') // the input field
const output = document.getElementById('convert-output'); // the output field

input.addEventListener('input', updateOutput)
selects[0].addEventListener('change', updateOutput); // from base
selects[1].addEventListener('change', updateOutput); // to base

function updateOutput() {
    output.value = Convertor(input.value, parseInt(selects[0].value), parseInt(selects[1].value));
}

// _______________________________________________________________
// calculator logic
const input1 = document.getElementById('number1'); // first number
const input2 = document.getElementById('number2'); // second number
input1.addEventListener('input', updateResult);
input2.addEventListener('input', updateResult);
selects[2].addEventListener('change', updateResult); // base
selects[3].addEventListener('change', updateResult) // sign
const result = document.getElementById('result'); // the result field

function updateResult() {
    if(input1.value == '' && input2.value == '') return result.value = '';
    result.value = Calculator(input1.value , input2.value, selects[2].value, selects[3].value);
}