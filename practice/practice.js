// task1 */
let name = 'Viktoria';
console.log(name);

let age1 = 22;
console.log(age1);

let city = 'Warsaw';
console.log(city);

let isStudent = true;
console.log(typeof isStudent);

let boble;
console.log(boble);

// task2 */
{
    const num = 3.14;
    console.log(num);
}
{
    let user = 'Jamie';
}
let user = 'Kate';
console.log(user);

// task3 */
let num = 42;
console.log(String(num));

let ns = '100';
console.log(parseInt(ns));

let nm = 'Hello';
console.log(parseInt(nm));

let a = null;
console.log(parseInt(a));
let b = undefined;
console.log(parseInt(b));
let c = false;
console.log(parseInt(c));

// task4 */
let fruits = ['apple', 'strawberry', 'banan', 'orange'];
console.log(fruits[1]);
fruits[4] = 'arbuz';
console.log(fruits);
delete fruits[4];
console.log(fruits);

let numbers = [21, 56, 85, 94, 3, 79];
console.log(numbers[0] + numbers[5]);

// task5 */
let car = {
    brand: 'BMW',
    year: 2023,
    model: 'A'
}
car.color = 'black';
console.log(car);
delete car.year;
console.log(car);

// task6 */
let user1 = {
    name: 'Vasya',
    age: 31,
    address: {
        city: 'Kyiv',
        street: 'Mikhaylovska'
    }
};
console.log(user1);
user1.address.country = 'Ukraine';
console.log(user1);

// task7 */
let mo = [
    {name: 'Kolya', age: 28},
    {name: 'Iryna', age: 23}
];
console.log(mo[1]);
mo.push({name: 'Alex', age: 25});
console.log(mo);

// task8 */
let o = 10;
let p = o;
p = 20;
console.log(o);

let arr = [1, 2, 3];
let arr1 = arr;
arr1.push(4);
console.log(arr);

// task9 */
let age = prompt('How old are you?');
if (age >= 18){
    console.log('Welcome')
} else {
    console.log('You are not 18')
}

let number = prompt('enter your number');
if(number % 2 === 0){
    console.log('vashe czyslo parne')
} else{
    console.log('vashe czyslo neparne')
}

let num1 = Number(prompt('enter number'));
if (num1 > 0 ){
    console.log('positive');
} else if (num1 < 0){
    console.log('negative');
} else{
    console.log('zero');
}






























