const rectangleArea = (a, b) => a * b;
console.log(rectangleArea(4, 8));

const circleArea = r => Math.PI * (r ** 2);
console.log(circleArea(6));

const cylinderArea = (h, r) => 2 * Math.PI * (r ** 2) + 2 * Math.PI * r * h;
console.log(cylinderArea(12, 3));

let arr = [12, 15, 61, 14, 32, 19];
const iterator = arr => {
    for (let i of arr) {
        console.log(i);
    }
    return arr;
}
iterator(arr);

const paragraph = text => {
    document.write(`<p>${text}</p>`);
    return text;
}
paragraph('Privet olya!');

const createList = textForList => {
    document.write(`<ul>`);
    for (let i =0; i < 3; i++) {
        document.write(`<li>${textForList}</li>`)
    }
    document.write(`</ul>`);
    return textForList;
}
createList('HI!');


const createList2 = (textList, count) => {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${textList}</li>`)
    }
    document.write(`</ul>`);
    return textList;
}
createList2('abrakadabra', 6);

let arrTypes = [23, true, 'gahs', false, 52, 'skjkd', 63, true];
const listForTypes = arr => {
    document.write(`<ul>`);
    for (const item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
    return arr;
}
listForTypes(arrTypes);

let objectArray = [
    {id: 1, name: 'petro', age: 36},
    {id: 5, name: 'petro', age: 36},
    {id: 2, name: 'petro', age: 36},
    {id: 6, name: 'petro', age: 36},
    {id: 7, name: 'petro', age: 36},
    {id: 9, name: 'petro', age: 36},
];
const iterArray = arr => {
    for (const user of arr) {
        document.write(`<div>${user.id} - ${user.name}, ${user.age}</div>`);
    }
    return arr;
}
iterArray(objectArray);

let numberArray = [15, 22, 65, 61, 31, 11, 7, 9, 51];
const findMinNumber = arr => {
    let minNum = arr[0];
    for (const num of arr){
        if (num < minNum){
            minNum = num;
        }
    }
    return minNum;
}
console.log(findMinNumber(numberArray));

let arrNumbers = [12, 6, 8, 9];
const sumNumArr = arr => {
    let sum = 0;
    for (const num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumNumArr(arrNumbers));

let arrNumb = [15, 14, 16, 18];
const swap = (arr,index1,index2) => {
    let empty = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = empty;

    return arr;
}
console.log(swap(arrNumb, 2, 0));

const exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let sum = 0;
    for (const val of currencyValues) {
        if (val.currency === exchangeCurrency) {
           sum = sumUAH / val.value;
        }
    }
    return sum;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));