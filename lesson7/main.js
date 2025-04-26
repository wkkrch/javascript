// function User (id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname  = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let arrayForUsers = [
//     new User(1, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(2, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(3, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(4, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(5, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(6, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(7, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(8, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(9, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687'),
//     new User(10, 'vasya', 'fill', 'vasya2020@gmail.com', '+48 612 423 687')
// ];
// console.log(arrayForUsers.length);
// console.log(arrayForUsers.filter(user => user.id % 2 === 0));
// console.log(arrayForUsers.sort((a, b) => b.id - a.id));
//
// function Client (id, name, surname , email, phone, order){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
//     this.order = order;
// }
// let arrayForClients = [
//     new Client(1, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}]),
//     new Client(2, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}, {title: 'bread', price: 3.90}]),
//     new Client(3, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'bread', price: 3.90}]),
//     new Client(4, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}]),
//     new Client(5, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}, {title: 'bread', price: 3.90}]),
//     new Client(6, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}]),
//     new Client(7, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}]),
//     new Client(8, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}, {title: 'bread', price: 3.90}, {title: 'bread', price: 3.90}]),
//     new Client(9, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}]),
//     new Client(10, 'vika', 'kirichuk', 'vikakkk@gmail.com', '+48 215 453 264', [{title: 'milk', price: 5.40}, {title: 'bread', price: 3.90}])
// ];
// console.log(arrayForClients);
// console.log(arrayForClients.sort((a, b) => a.order.length - b.order.length));
// function Car (model, manufacturer, yearOfProduction, maxSpeed, engineVolume){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfProduction = yearOfProduction;
//     this.maxSpeed = maxSpeed;
//     this.engineVolume = engineVolume;
//     this.drive = function (){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function (){
//         for (const key in this) {
//             if (typeof this[key] !== 'function'){
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         if (newSpeed > 0) {
//             this.maxSpeed += newSpeed;
//         }
//     };
//     this.changeYear = function (newValue){
//         if (newValue > 1815){
//             this.yearOfProduction = newValue;
//         }
//     };
//     this.addDriver = function (driver){
//         this.driver = driver;
//     };
// }
// let car1 = new Car('A200', 'BMW', 2021, 210, 5);
// car1.addDriver({name: 'volodya', age: 45});
// car1.info();
// car1.increaseMaxSpeed(45);
// car1.changeYear(2023);
// console.log(car1);
//
// class Car{
//     constructor(model, manufacturer, yearOfProduction, maxSpeed, engineVolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfProduction = yearOfProduction;
//         this.maxSpeed = maxSpeed;
//         this.engineVolume = engineVolume;
//     };
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     };
//     info(){
//         for (const key in this) {
//             if (typeof this[key] !== 'function'){
//                 console.log(`${key}: ${this[key]}`);
//             }
//         }
//     };
//     increaseMaxSpeed (newSpeed){
//         if (newSpeed > 0){
//             this.maxSpeed += newSpeed;
//         }
//     };
//     changeYear (newValue){
//         if (newValue > 1815){
//             this.yearOfProduction = newValue;
//         }
//     };
//     addDriver (driver) {
//         if (typeof driver === 'object') {
//             this.driver = driver;
//         }
//     };
// }
//
// class Cinderella{
//     constructor(name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     }
// }
// let arrayForCinderella = [
//     new Cinderella('anya', 22, 38),
//     new Cinderella('anya', 28, 37),
//     new Cinderella('anya', 22, 38),
//     new Cinderella('anya', 23, 40),
//     new Cinderella('anya', 29, 36),
//     new Cinderella('anya', 30, 37),
//     new Cinderella('anya', 25, 41),
//     new Cinderella('anya', 22, 39),
//     new Cinderella('anya', 22, 30),
//     new Cinderella('anya', 22, 39)
// ];
//
// class Prince{
//     constructor(name, age, shoeSize) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;
//     }
// }
// let prince = new Prince('sasha', 26, 36);
//
// for (const cinderella of arrayForCinderella) {
//     if (cinderella.shoeSize === prince.shoeSize){
//         console.log(cinderella);
//     }
// }
//
// let cinderella = arrayForCinderella.find(cin => cin.shoeSize === prince.shoeSize);
// console.log(cinderella);

Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}
let arr = [11, 22, 15, 16, 14, 18];
arr.myForEach(num => console.log(num));

Array.prototype.myFilter = function (callback){
    let result = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}
console.log(arr.myFilter(num => num > 15));