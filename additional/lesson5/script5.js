let double = n => n * 2;
console.log(double(4));
let greet = name => `Привіт, ${name}!`;
console.log(greet('Olya'));
let getUser = () => ({name: 'Vasya', age: 23});


function createCounter(start){
    let count = start;
    return function (){
        count++;
        return count;
    };
}
const counting = createCounter(5);
console.log(counting())
console.log(counting())
console.log(counting())

function greetTimes(name){
    let count1 = 0;
    return function (){
        count1++;
        return `Привет ${name} (${count1})!`;
    };
}
const greet1 = greetTimes('vasya');
console.log(greet1())
console.log(greet1())
console.log(greet1())
console.log(greet1())

function createSecretMessage(msg){
    return function (word){
        if (word === msg){
            return msg;
        }
    };
}
const secretMss = createSecretMessage('Hi friend');
console.log(secretMss('Hi friend'));

function createTryLimiter(limit){
    let num = 0;
    return function (){
        if (num < limit){
            num++;
            return 'go';
        } else {
            return 'stop'
        }
    };
}
const lim = createTryLimiter(3);
console.log(lim())
console.log(lim())
console.log(lim())
console.log(lim())

