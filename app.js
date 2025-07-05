
/*-------------------------------- Constants --------------------------------*/

const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

let total = null
let operator = '';


let first,second;

let isEnteringSecond = false;

/*------------------------ Cached Element References ------------------------*/


/*----------------------------- Event Listeners -----------------------------*/

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    console.log(event.target.innerText);
    // Future logic to capture the button's value would go here...
   display.innerText = event.target.innerText;

  

    
    });
});

/*-------------------------------- Functions --------------------------------*/

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log

  // Example
  if (event.target.classList.contains('number')) {

    
  if (!isEnteringSecond) {
    first = event.target.innerText;
    isEnteringSecond = true;
  } else {
    second = event.target.innerText;
  }



}
  
  
  if (event.target.innerText === '*') {
  operator = '*';
}
else if (event.target.innerText === '-') {
  operator = '-';
}
else if (event.target.innerText === '+') {
  operator = '+';
}
else if (event.target.innerText === '/') {
  operator = '/';
}
 else if (event.target.innerText === 'C') {
 display.textContent = '';
first = null;
second = null;
operator = '';
isEnteringSecond = false;
total = null;

  } 
  console.log(first)
  console.log(second)
if (event.target.innerText === '=') {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);

  if (operator === '+') {
    total = num1 + num2;
  } else if (operator === '-') {
    total = num1 - num2;
  } else if (operator === '*') {
    total = num1 * num2;
  } else if (operator === '/') {
    total =  num1 / num2 ;
  }

  display.textContent = total;
  first = total.toString();
  second = '';
  operator = '';
  isEnteringSecond = false;
}

  console.log(total)
});



