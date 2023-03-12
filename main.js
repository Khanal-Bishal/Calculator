const body=document.querySelector('body');
const keypadContainer=document.querySelector('.keypad-container');
const outputScreen=document.querySelector('.output-screen-container');
const themeContainer=document.querySelector('.theme-container');
const delReset=document.querySelectorAll('.del-reset');
const keypad=document.querySelectorAll('.keypad');
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
const toogleButton=document.querySelector('.toogle-button');
const type=new Audio('type.mp3');

var firstOperandCollector = "";
var secondOperandCollector = "";
var operator = "";

one.addEventListener('click', (event) => {
    type.play();
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
    type.play();

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
    type.play();
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
    type.play();
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
    type.play();
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
    type.play();
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
    type.play();
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
    type.play();
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
    type.play();
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
    type.play();
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
    type.play();
    operation.innerText='';
    operation.innerText= firstOperandCollector+'+' ;
    operator = '+';
})
minus.addEventListener('click', (event) => {
    type.play();
    operation.innerText='';
    operation.innerText+= firstOperandCollector+'-' ;
    operator = '-';
})
divide.addEventListener('click', (event) => {
    type.play();
    operation.innerText='';
    operation.innerText+= firstOperandCollector+'/' ;
    operator = '/';
})
multiply.addEventListener('click', (event) => {
    type.play();
    operation.innerText='';
    operation.innerText+= firstOperandCollector+'*' ;
    operator = '*';
})


equals.addEventListener('click', () => {
    type.play();
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
    type.play();
    firstOperandCollector='';
    secondOperandCollector='';
    operation.innerText='';
    outputNumber.innerText='';
    operator='';
})

//deleting the entered number
del.addEventListener('click',()=>
{
    type.play();
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

// changing  the theme of the page 
toogleButton.addEventListener('click',()=>
{
   toogleButton.classList.toggle('fa-toggle-off');
   toogleButton.classList.toggle('fa-toggle-on');
    if (toogleButton.classList.contains('fa-toggle-on'))
    {
       body.classList.add('theme2-background');
       themeContainer.classList.add('theme2-theme-container');
        keypad.forEach(keys=>
            {
                keys.classList.add('theme2-keypad');
            });

         delReset.forEach(keys=>
             {
                    keys.classList.add('theme2-delReset');
             })
        keypadContainer.classList.add('theme2-keypad-container');
        outputScreen.classList.add('theme2-outputScreen');
        
    }
    else{
        body.classList.remove('theme2-background');
       themeContainer.classList.remove('theme2-theme-container');

       keypad.forEach(keys=>
        {
            keys.classList.remove('theme2-keypad');
        });

        delReset.forEach(keys=>
            {
                keys.classList.remove('theme2-delReset');
            })
        keypadContainer.classList.remove('theme2-keypad-container');
        outputScreen.classList.remove('theme2-outputScreen');
    }
    
})


