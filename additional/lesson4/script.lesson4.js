function maxNumber (a, b){
    if (a > b){
        return a;
    } else if (b > a){
        return b;
    }
}
console.log(maxNumber(10, 13));

function isEven(num){
    if (num % 2 === 0){
        num = true;
    } else if (num % 2 !== 0){
        num = false;
    }
    return num;
}
console.log(isEven(249));

function hello(name){
    console.log(`Привіт, ${name}!`)
}
hello('Bogdan');

function square(n){
    return n ** 2;
}
console.log(square(4));

function toMinutes(hours){
    return hours * 60;
}
console.log(toMinutes(4));

let arr = [15, 24, 18];
function sumArray(arr){
    let sum = 0;
    for (const num of arr){
        sum += num;
    }
    return sum;
}
console.log(sumArray(arr));

function reverseText(text) {
    let reverse = '';

    for (let i = text.length -1; i >= 0; i--){
        reverse += text[i];
    }
    return reverse;
}

console.log(reverseText('Привіт'));

let arrString = [12, "hi", true, "ok"];
function countStrings(arrString){
    let numCount = 0;
    for (let i = 0; i < arrString.length; i++){
        if (typeof arrString[i] === 'string'){
            numCount += 1;
        }
    }
    return numCount;
}
console.log(countStrings(arrString));

let arrNumb = [1, 5, 6, 4, 3, 7, 2];
function maxInArray(arr){
    let max = arrNumb[0];
    for (const n of arrNumb){
        if (n > max){
            max = n;
        }
    }
    return max;
}
console.log(maxInArray(arrNumb));

let array = [11, 22, 33, 45, 64, 28];
function filterEven(arr){
    let newArray = [];
    for (const num of array){
        if (num % 2 === 0){
            newArray.push(num);
        }
    }
    return newArray;
}
console.log(filterEven(array));

// let modal = Number(prompt('Enter your age:'));
// function canDrive(age){
//     return age >= 18;
// }
// console.log(canDrive(modal));

function countSymbol(text, symbol){
    let countSym = 0;
    for (const liter of text){
        if (liter === symbol){
            countSym += 1;
        }
    }
    return countSym;
}
console.log(countSymbol('Abrakadabra', 'r'));

function calcPrice(price, count, discount){
    let sum = price * count;
    let sumDisc = sum * (discount / 100);
    return sum - sumDisc;
}
console.log(calcPrice(120, 1, 15));

function getInitials(name, surname){
    for (let i = 0; i < 1; i++){
        console.log()
    }
}