const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const dot = document.querySelector('.dot');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const reset = document.querySelector('.reset');
const equals = document.querySelector('.equals');
const del=document.querySelector('.del');
const outputNumber = document.querySelector('.output-number');
const operation = document.querySelector('.operation');


var firstOperandCollector = "";
var secondOperandCollector = "";
var operator = "";

one.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'1';
        secondOperandCollector += '1';
    }
    else {
        operation.innerText = firstOperandCollector+'1';
        firstOperandCollector += '1';
    }


})
two.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'2';
        secondOperandCollector += '2';
    }
    else {
        operation.innerText= firstOperandCollector+'2';
        firstOperandCollector += '2';
    }

})
three.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'3';
        secondOperandCollector += '3';
    }
    else {
        operation.innerText = firstOperandCollector+'3';
        firstOperandCollector += '3';
    }


})
four.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'4';
        secondOperandCollector += '4';
    }
    else {
        operation.innerText = firstOperandCollector+'4';
        firstOperandCollector += '4';
    }

})
five.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'5';
        secondOperandCollector += '5';
    }
    else {
        operation.innerText = firstOperandCollector+'5';
        firstOperandCollector += '5';
    }

})
six.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'6';
        secondOperandCollector += '6';
    }
    else {
        operation.innerText = firstOperandCollector+'6';
        firstOperandCollector += '6';
    }

})
seven.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'7';
        secondOperandCollector += '7';
    }
    else {
        operation.innerText = firstOperandCollector+'7';
        firstOperandCollector += '7';
    }

})
eight.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'8';
        secondOperandCollector += '8';
    }
    else {
        operation.innerText = firstOperandCollector+'8';
        firstOperandCollector += '8';
    }

})
nine.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'9';
        secondOperandCollector += '9';
    }
    else {
        operation.innerText = firstOperandCollector+'9';
        firstOperandCollector += '9';
    }

})
zero.addEventListener('click', (event) => {
    if (operator == '+' || operator == '-' || operator == '/' || operator == '*') {
        operation.innerText= firstOperandCollector+operator+secondOperandCollector+'0';
        secondOperandCollector += '0';
    }
    else {
        operation.innerText = firstOperandCollector+'0';
        firstOperandCollector += '0';
    }

})

plus.addEventListener('click', (event) => {
    operation.innerText= firstOperandCollector+'+' ;
    operator = '+';
})
minus.addEventListener('click', (event) => {
    operation.innerText+= firstOperandCollector+'-' ;
    operator = '-';
})
divide.addEventListener('click', (event) => {
    operation.innerText+= firstOperandCollector+'/' ;
    operator = '/';
})
multiply.addEventListener('click', (event) => {
    operation.innerText+= firstOperandCollector+'*' ;
    operator = '*';
})


equals.addEventListener('click', () => {
    if (operator == '+') {
        outputNumber.innerText = parseInt(firstOperandCollector) + parseInt(secondOperandCollector);
        firstOperandCollector = '';
        secondOperandCollector = '';
        operator = '';
    }
    else if (operator == '-') {
        outputNumber.innerText = parseInt(firstOperandCollector) - parseInt(secondOperandCollector);
        firstOperandCollector = '';
        secondOperandCollector = '';
        operator = '';
    }
    else if (operator == '*') {
        outputNumber.innerText = parseInt(firstOperandCollector) * parseInt(secondOperandCollector);
        firstOperandCollector = '';
        secondOperandCollector = '';
        operator = '';
    }
    else if (operator == '/') {
        outputNumber.innerText = parseInt(firstOperandCollector) / parseInt(secondOperandCollector);
        firstOperandCollector = '';
        secondOperandCollector = '';
        operator = '';
    }
})

//resetting the opetations
reset.addEventListener('click',()=>
{
    firstOperandCollector='';
    secondOperandCollector='';
    operation.innerText='';
    outputNumber.innerText='';
    operator='';
})

//deleting the entered number
del.addEventListener('click',()=>
{
let totalString=firstOperandCollector+operator+secondOperandCollector;
 if(totalString==firstOperandCollector)
 {
    firstOperandCollector=firstOperandCollector.slice(0,-1);
   operation.innerText=firstOperandCollector;
 }
  else if(totalString==firstOperandCollector+operator)
 {
    operator=operator.slice(0,-1);
    operation.innerText=firstOperandCollector+operator;
 }
 if(totalString==firstOperandCollector+operator+secondOperandCollector)
 {
    secondOperandCollector=secondOperandCollector.slice(0,-1);
   operation.innerText=firstOperandCollector+operator+secondOperandCollector;
 }
})