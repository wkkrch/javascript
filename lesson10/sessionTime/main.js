// const text = document.createElement('div');
// text.id = 'text';
// const button = document.createElement('button');
// button.innerText = 'click me';
// button.onclick = function(){
//     text.remove();
// }
// document.body.append(text, button);
// const button = document.getElementById('button');
// const inp = document.getElementById('i1');
// button.onclick = function (){
//     if (Number(inp.value) > 18){
//         console.log('you`re age is > 18 ');
//     } else{
//         console.log('you`re age is < 18 ')
//     }
// }
// const formButton = document.getElementById('formButton');
// const emailIn = document.getElementById('formEmail');
// const nameIn = document.getElementById('formName');
// const surnameIn = document.getElementById('formSurname');
//
// formButton.onclick = function (){
//     let person = {name: nameIn.value, surname: surnameIn.value, email: emailIn.value};
//     const form = document.getElementById('form1');
//     form.style.display = 'none';
//     const blockObject = document.createElement('div');
//     const object = document.createElement('h2');
//     object.innerText = `${person.name} ${person.surname}`;
//     const par = document.createElement('p');
//     par.innerText = `${person.email}`;
//     blockObject.append(object, par);
//     document.body.appendChild(blockObject);
// }
// const block = document.getElementById('block');
// let currentNumber = +localStorage.getItem('number') || 0;
// currentNumber += 1;
// localStorage.setItem('number', currentNumber);
// block.innerText = currentNumber;

let visitDate = JSON.parse(localStorage.getItem('visits')) || [];
const visitTime = new Date();
visitDate.push(visitTime);
localStorage.setItem('visits', JSON.stringify(visitDate));