// Vascul Andrei - 917
// I've decided to use JS for this project due to my familiarity with it, and during the development process I've found some time to also give it a simple UI.
// This code may look like spagetti, but in JS it is encouraged to write more readable code instead of focusing on memory efficiency, due to its garbage collector. Although I use lots of 'const [new variable]' where in Python I may just remodel the same vaiable, immutability is a good practice in JS (even better in JS-based extrnal libraries like React). 
// I will send you the repo link for you to see the code structure, and also a big (unreadable) HTML file which contains the same code as this repo, which you just have to download and open in your browser, so there won't be any compiling issues or the need to install any dependencies (like Node.js) on your machine.
// I wrote this project originally in Typescript for type safety, but I've decided to rewrite it in JS for you to be able to run it without compiling it.

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