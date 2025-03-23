function rectangleArea (a,b){
    return a * b;
}
console.log(rectangleArea(5, 9));

function circleArea (r){
    return Math.PI * (r ** 2);
}
console.log(circleArea(6));

function cylinderArea (h, r){
    return 2 * Math.PI * (r ** 2) + 2 * Math.PI * r * h;
}
console.log(cylinderArea(7, 3));

function itemArray (array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
    return array;
}
let array = ['masha', 23, true, 'petya', 25, false, 'ira', 23, false];
itemArray(array);

function textPar (par){
    document.write(`<p> ${par} </p>`);
}
textPar('Hello!');

function list (text){
    document.write(`<ul>`);
    document.write(`<li> ${text} </li>
                    <li> ${text} </li>
                    <li> ${text} </li>`)
    document.write(`</ul>`);
}
list('Okten school is good');
function list2 (text, count){
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li> ${text} </li>`);
    }
    document.write(`</ul>`);
}
list2('Bibibibi', 10);

let array2 = ['kolya', 44, true, 'vasya', 45, false, 'karina', 33, true, 'veronika'];
function listForArray (array2){
    document.write(`<ul>`);
    for (const item of array2){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}
listForArray(array2);

let users = [
    { id: 1, name: 'Vika', age: 22 },
    { id: 2, name: 'Maks', age: 28 },
    { id: 3, name: 'Ira', age: 19 },
    { id: 4, name: 'Kolya', age: 33 },
    { id: 5, name: 'Petro', age: 40 }
];
function itemArr (users){
    document.write(`<div>`);
    for (const user of users){
        document.write(`<div>${user.id} - ${user.name}, ${user.age}</div>`);
    }
    document.write(`</div>`);
}
itemArr(users);

let numArray = [11, 2, 6, 54, 8, 41, 4, 8];
function minNum (numArray){
    let min = numArray[0];
    for (const num of numArray){
        if (num < min){
            min = num;
        }
    }
    return min;
}
console.log(minNum(numArray));

let numbers = [6, 13, 24];
function sum (arr){
    let sum = 0;
    for (const num of arr){
        sum += num;
    }
    return sum;
}
console.log(sum(numbers));

let arr = [21, 23, 25, 24, 26];

function swap (arr, index1, index2){
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}
console.log(swap(arr, 0 , 1));

function exchange(sumUAH,currencyValues,exchangeCurrency){
    for (const val of currencyValues) {
        if (val.currency === exchangeCurrency) {
            return sumUAH / val.value;
        }
    }
}
console.log(exchange(10000,[{currency: 'USD', value:25},{currency: 'EUR',value:42}], 'USD'));