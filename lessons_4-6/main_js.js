// lesson 4

// function rectangleArea (a, b){
//     return a * b;
// }
//
// console.log(rectangleArea(4, 7));
//
// function circleArea (r){
//     return Math.PI * r * 2;
// }
//
// console.log(circleArea(9));
//
// function cylinderArea (h, r){
//     return 2 * Math.PI * r * (h + r);
// }
//
// console.log(cylinderArea(9,3,5));

// function cycleArray(array){
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }
// cycleArray([11, 22, 55, 44, 58, 67, 49]);

// function paragraph(text){
//     document.write(`<h2>${text}</h2>`);
// }
// paragraph('hello');
// function listCreate(text){
//     document.write(`<ul>`);
//     for (let i = 0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listCreate('abrakadabra');

// function listCreate(text, num){
//     document.write(`<ul>`);
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listCreate('blablabla', 7);

// function listCreateForItemsFromArray (array){
//     document.write(`<ul>`);
//     for (const item of array) {
//         document.write(`<li>${item}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listCreateForItemsFromArray([11, 'sajhad', 45, 'salfij', true, false]);


// – створити функцію, яка приймає масив об’єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об’єкту окремий блок.

// let arrayObjs = [
//     {id: 1, name: 'akscxs', age: 45},
//     {id: 2, name: 'akscxs', age: 45},
//     {id: 3, name: 'akscxs', age: 45},
//     {id: 4, name: 'akscxs', age: 45},
//     {id: 5, name: 'akscxs', age: 45},
//     {id: 6, name: 'akscxs', age: 45},
//     {id: 7, name: 'akscxs', age: 45}
// ];
//
// function objectCreate (array){
//     for (let i = 0; i < array.length; i++) {
//         document.write(`<p>${array[i].id} - ${array[i].name}, ${array[i].age}</p>`);
//     }
// }
// objectCreate(arrayObjs);

// function minNum (array){
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < min){
//             min = array[i];
//         }
//     }
//     console.log(min);
// }
// minNum([15, 44, 12, 19, 7, 197, 19, 61]);

// function counting(array){
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// console.log(counting([11, 15, 4]));

// function swap(arr, index1, index2) {
//     let index = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = index;
//     return arr;
// }
//
// console.log(swap([11, 22, 33, 44], 3, 1));

// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:25},{currency:’EUR’,value:42}],’USD’) // => 400
// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency){
//             return sumUAH / currencyValues[i].value;
//         }
//     }
// }
//
// console.log(exchange(10000, [
//         {currency: 'USD', value: 25},
//         {currency: 'EUR', value: 42}
//     ],
//     'EUR'));

// let user = {
//     name: 'vasya',
//     age: 31,
//     male: 'man',
//     greeting: function (){
//         return `hello, i am ${this.name}, my age is ${this.age}.`
//     }
// }
// console.log(user.greeting())


//////////////////////////////////////// Замыкание//

// function createCounter() {
//     let counter = 0;
//     return function (){
//         counter++;
//         return counter;
//     }
// }
//
// const counter = createCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// function makeMultiplier (n){
//     let multiplier = n;
//     return function (n2){
//         return n * n2;
//     }
// }
// const double = makeMultiplier(2);
// const triple = makeMultiplier(3);
//
// console.log(double(5)); // 10
// console.log(triple(5)); // 15
// function counting (start){
//     let num = start;
//     return function(){
//         return num++;
//     }
// }
// const count = counting(5);
// console.log(count());
// console.log(count());
// console.log(count());

// function makeMultiplier(n){
//     let num = n;
//     return function(n2){
//         return n * n2;
//     }
// }
// const multiplier = makeMultiplier(4);
// console.log(multiplier(4));

// function saveArray(array){
//     let arr = array;
//     return function (n){
//         if (n % 2 === 0){
//             arr.push(n);
//             return arr;
//         }
//     }
// }
// const arrayForFunc = saveArray([11, 164, 18, 17, 5, 12, 13, 9]);
// console.log(arrayForFunc(7));
// console.log(arrayForFunc(8));
//
// function match(text){
//     let word = text;
//     return function (text2){
//         return word === text2 ? 'совпало' : 'не совпало';
//     }
// }
// const matching = match('hello');
// console.log(matching('hello blabla'));
// console.log(matching('hello'));

// function summing(num) {
//     let sum = num;
//     return function(numSum){
//         return num += numSum;
//     }
// }
// const result = summing(10);
// console.log(result(15));
//
// function counting(max){
//     let maxNum = max;
//     let i = 0;
//     return function(){
//         return i < maxNum ? i++ : 'достигнуто максимальное значение';
//     }
// }
// const count = counting(8);
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());


// function meaning(){
//     let lastMean;
//     return function(mean){
//         return arguments.length > 0 ? lastMean = mean : lastMean;
//     }
// }
// const saved = meaning();
// console.log(saved());
// console.log(saved('askjd'));
// console.log(saved());
// console.log(saved('asoicf'));
// function meaning(){
//     let last;
//     return function(mean){
//         if (mean !== undefined){
//             return last = mean;
//         } return last;
//     }
// }
// const saved = meaning();
// console.log(saved('askjd'));
// console.log(saved());
// console.log(saved('asoicf'));

/////////////////////////////////////////////////////// рекурсия
// function recursion(n){
//     if (n === 1){
//         return 1;
//     }
//     return n + recursion(n - 1);
// }
//
// console.log(recursion(8));

// function recursion(n){
//     if (n === 1){
//         return 1;
//     }
//     return n+ recursion(n - 1);
// }
//
// console.log(recursion(9));

// const rectangleArea = (a, b) => a * b;
// console.log(rectangleArea(4, 8));
// const circleArea = r => Math.PI * r * 2;
// console.log(circleArea(6));
// const cylinderArea = (h, r) => 2 * Math.PI * r * (h + r);
// console.log(cylinderArea(7, 9));

// const iterator = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// iterator([1, 2, 3, 15, 19, 48, 154, 546]);
//
// const par = text => {
//     document.write(`<p>  ${text} </p>`);
// }
// par('skjd');
//
// const list = (text, n) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < n; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('suka', 7);
//
// const listForArray = arr => {
//     document.write(`<ul>`);
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listForArray([1, 2, true, 'asl;d', false, 8]);

// const obj = arr => {
//     for (const e of arr) {
//         document.write(`<div>${e.id} - ${e.name}, ${e.age} </div>`)
//     }
// }
// obj([
//     {name: 'adsas', age: 30, id: 1},
//     {name: 'asfd', age: 51, id: 2},
//     {name: 'ewfcfc', age: 21, id: 3},
//     {name: 'adfc', age: 54, id: 4},
//     {name: 'fvdfs', age: 54, id: 5},
//     {name: 'ergeg', age: 45, id: 6},
// ])

// const minNum = arr => {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++){
//         if (min > arr[i]){
//             min = arr[i];
//         }
//     }
//     return min;
// }
// console.log(minNum([44, 15, 18, 7, 88, 19]));

// const sum = arr => {
//     let sumArr = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumArr += arr[i];
//     }
//     return sumArr;
// }
// console.log(sum([1, 2, 4, 5]));

// const swap = (arr,i1,i2) => {
//     let emptyBox = arr[i1];
//     arr[i1]  = arr[i2];
//     arr[i2] = emptyBox;
//     return arr;
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0){
//         let ind = i - 1;
//         newArr.push(arr[ind]);
//     }
// }
// console.log(newArr);

// const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency){
//             return sumUAH / item.value;
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));

//////////////////////// lesson 6 ////////////////////////////////
// let str = 'hello';
// console.log(str.length);
// console.log(str[0]);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.substring(1, 4));

// let a = 'HELLO WORLD';
// let b = 'LOREM IPSUM';
// let c = 'JAVASCRIPT IS COOL';
// //
// // console.log(a.length);
// // console.log(b.length);
// // console.log(c.length);
// //
// // console.log(a.toUpperCase());
// // console.log(b.toUpperCase());
// // console.log(c.toUpperCase());
//
// console.log(a.toLowerCase());
// console.log(b.toLowerCase());
// console.log(c.toLowerCase());
//
// let str = ' dirty string   ';
// console.log(str.trim());

// let str = 'Ревуть воли як ясла повні';
// console.log(str.split(' '));
// let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
// let greet = arrNum.map(num => `${num}`);
// console.log(greet);
// console.log(typeof greet[0]);

// let nums = [11, 21, 3];

// function sortNums(arr, direction) {
//     if (direction === 'asc') {
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'desc') {
//         return arr.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums(nums, 'desc'));

// function sortNums(arr, direction){
//     // for (let i = 0; i < arr.length; i++) {
//     //     for (let j = 0; j < arr.length; j++) {
//     //         if (direction === 'asc' && arr[i] < arr[j] ||
//     //         direction === 'desc' && arr[i] > arr[j]){
//     //             let emp = arr[i];
//     //             arr[i] = arr[j];
//     //             arr[j] = emp;
//     //         }
//     //     }
//     // }
//     // return arr;
//     if (direction === 'asc'){
//         return arr.sort((a, b) => a - b);
//     } else if (direction === 'desc'){
//         return arr.sort((a, b) => b - a);
//     }
// }
//
// console.log(sortNums(nums, 'desc'));
//
// let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {
//     title: 'Java Complex',
//     monthDuration: 6
// }, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {
//     title: 'FullStack',
//     monthDuration: 7
// }, {title: 'Frontend', monthDuration: 4}];
// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
// let newArray = coursesAndDurationArray.filter((n) => n.monthDuration > 5);
// console.log(newArray);
// const newArr = coursesAndDurationArray.map((element, i) => ({id: i + 1, title: element.title, monthDuration: element.monthDuration}))
// console.log(newArr)

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// const newArray = coursesArray.filter((element) => {
//     for (const modul of element.modules){
//         if (modul === 'sass'){
//             return element;
//         }
//     }
// });
// console.log(newArray);
// const neww = coursesArray.filter((element) => element.modules.includes('docker'));
// console.log(neww)

// let cards = [];
// let cardSuite = ['spade', 'diamond', 'heart', 'club'];
// let cardValue = ['6', '7', '8', '9', '10', 'ace', 'jack', 'queen', 'king'];
// for (let i = 0; i < cardSuite.length; i++) {
//     for (let j = 0; j < cardValue.length; j++) {
//         if (cardSuite[i] === 'spade' || cardSuite[i] === 'club') {
//             cards.push({color: 'black', suite: cardSuite[i], value: cardValue[j]});
//         } else if (cardSuite[i] === 'diamond' || cardSuite[i] === 'heart') {
//             cards.push({color: 'red', suite: cardSuite[i], value: cardValue[j]});
//         }
//     }
// }

// for (let i = cards.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [cards[i], cards[j]] = [cards[j], cards[i]];
// }
// console.log(cards)
// const acc = cards.reduce((accumulator, currentValue) => {
//     if (currentValue.suite === 'spade'){
//         accumulator.spades.push(currentValue);
//     } else if (currentValue.suite === 'diamond'){
//         accumulator.diamonds.push(currentValue);
//     } else if (currentValue.suite === 'heart'){
//         accumulator.hearts.push(currentValue);
//     } else if (currentValue.suite === 'club'){
//         accumulator.clubs.push(currentValue);
//     }
//     return accumulator;
// }, {
//     spades: [],
//     diamonds: [],
//     hearts: [],
//     clubs: []
// });
// console.log(acc);

