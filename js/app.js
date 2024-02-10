const num = document.querySelectorAll('.digital');
const op = document.querySelectorAll('.op');
const out = document.querySelector('.screen_calc');
const equal = document.querySelector('.equal');
const clean = document.querySelector('.clean');
const del_char = document.querySelector('.del_char');
let saved_number, num2; 

for (let i = 0; i < num.length; i++) {
  num[i].addEventListener("click", setNum);
}

let displayed_number = ''; 
function setNum(event) {
  let digit = event.target.innerText;
  if(digit === '.') {
    let index_dot = displayed_number.indexOf('.');
    console.log(index_dot);
    if(index_dot > 0) {
      return false;
      // обрываю действие функции и она перестает работать
    } else if (index_dot === -1 && displayed_number === '') {
      displayed_number = '0';
    }
  }
  displayed_number += digit;
  renderDisplayedNumber(displayed_number);
};

function renderDisplayedNumber(dis_num) {
  out.innerText = dis_num;
}

for (let i = 0; i < op.length; i++) {
  op[i].addEventListener("click", setAction);
}

let action;
function setAction(event) {
  action = event.target.innerText;
  if(!saved_number) {
    saved_number = displayed_number;
    displayed_number = '';
  }
}

equal.addEventListener("click", () => calculate(saved_number, displayed_number, action));

function calculate(num1, num2, action) {
  let result = 0;
  if(!action) {
    return false;
  }
  result = eval(`${num1}${action}${num2}`);
  // switch(action) {
  //   case "+": 
  //     result = Number(num1) + Number(num2);
  //     break;
  //   case '-':
  //     result = Number(num1) - Number(num2);
  //     break;
  //   case '÷':
  //     result = Number(num1) / Number(num2);
  //     break; 
  //   case 'x':
  //     result = Number(num1) * Number(num2);
  //     break;
  //   case '%':
  //     result = null;
  //     break;
  //   default: return false;
  // }
  renderDisplayedNumber(result);
  displayed_number = ''; 
  saved_number = result;
}

clean.addEventListener("click", cleanData);

function cleanData() {
  displayed_number = '';
  saved_number = ''; 
  action = ''; 
  renderDisplayedNumber('');
}

del_char.addEventListener("click", delete_chair);

function delete_chair() {
  displayed_number = displayed_number.slice(0, -1);
  renderDisplayedNumber(displayed_number);
}

