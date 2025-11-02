// function User(name, age, status, wifeName, wifeAge){
//     this.name = name;
//     this.age = age;
//     this.status = status;
//     this.wife = {name: wifeName, age: wifeAge};
//     this.greeting = function (){
//         document.write(`${this.name}, and ${this.wife.name} hello! :)`)
//     }
// }
// const user1 = new User('vasya', 21, true, 'luda', 20);
// console.log(user1);
// user1.greeting()
//
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
// const user1 = new User('vasya', 25);
// const user2 = new User('vitya', 44);
// console.log(user1);
// user1.greeting = function (msg){
//     return `${msg}, ${this.name}`;
// }
// console.log(user1.greeting.call(user2, 'hi'));
// User.prototype.greeting = function (){
//     return `hi, ${this.name}`;
// }
// console.log(user1.greeting())
// console.log(user2);
// console.log(user2.greeting());

// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting() {
//         return `hi, my name is ${this.name}`;
//     }
// }
//
// //
// // // const user1 = new User('ola', 21);
// // // console.log(user1.greeting());
// // console.log(User.greeting());
//
// class Customer extends User {
//     constructor(name, age, password) {
//         super(name, age);
//         this.password = password;
//     }
// }
//
// const user1 = new User('vasya', 21);
// console.log(user1);
//
// const user2 = new Customer('ola', 22, '1515');
// console.log(user2);
// console.log(user2.greeting());
//
// function User(name, age){
//     this.name = name;
//     this.age = age;
// }
//
// function Customer(name, age, password){
//     User.apply(this, arguments);
//     this.password = password;
// }
// const user1 = new Customer('ola', 22, '1515');
// console.log(user1);
// let now = new Date();
// console.log(now);
//
// function User(id, name, surname , email, phone){
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let users = [
//     new User('1', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('11', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('6', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('9', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('14', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('66', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('10', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('1', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('2', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947'),
//     new User('5', 'vova', 'abramovich', 'abramovvov@gmail.com', '+48514228947')
// ];
// // console.log(users);
// // console.log(users.filter(user => user.id % 2 === 0));
// console.log(users.sort((a, b) => a.id - b.id));

// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
// let clients = [
//     new Client(1, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}]),
//     new Client(2, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}, {value: 'tv', price: 14200}, {value: 'tv', price: 14200}]),
//     new Client(3, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}, {value: 'tv', price: 14200}]),
//     new Client(4, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}, {value: 'tv', price: 14200}, {value: 'tv', price: 14200}]),
//     new Client(5, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}]),
//     new Client(6, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}]),
//     new Client(7, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}, {value: 'tv', price: 14200},{value: 'tv', price: 14200},{value: 'tv', price: 14200}]),
//     new Client(8, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200},{value: 'tv', price: 14200}]),
//     new Client(9, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200}]),
//     new Client(10, 'vasya', 'sokolov', 'sokolv@gmail.com', '+48785496124', [{value: 'tv', price: 14200},{value: 'tv', price: 14200},{value: 'tv', price: 14200}])
// ];
// console.log(clients.sort((a, b) => a.order.length - b.order.length));
//

// class Car{
//
//     constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.yearOfmanufacture = yearOfManufacture;
//         this.maximumSpeed = maximumSpeed;
//         this.engineCapacity = engineCapacity;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//     }
//     info (){
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`);
//         }
//     }
//     increaseMaxSpeed (newSpeed){
//         this.maximumSpeed += newSpeed;
//     }
//     changeYear (newValue){
//         this.yearOfManufacture = newValue;
//     }
//     addDriver (driver){
//         this.driver = driver;
//     }
// }
// function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.yearOfmanufacture = yearOfManufacture;
//     this.maximumSpeed = maximumSpeed;
//     this.engineCapacity = engineCapacity;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maximumSpeed} на годину`)
//     }
//     this.info = function () {
//         for (const key in this) {
//             console.log(`${key} - ${this[key]}`);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maximumSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.yearOfManufacture = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
// }
//
// const car = new Car('BMW', 'Germany', 2020, 240, 2.0);
// console.log(car.info());

// class Cinderella{
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
// let princess = [
//     new Cinderella('ola', 22, 37),
//     new Cinderella('ola', 22, 40),
//     new Cinderella('ola', 22, 41),
//     new Cinderella('ola', 22, 35),
//     new Cinderella('lera', 22, 36),
//     new Cinderella('ola', 22, 37),
//     new Cinderella('ola', 22, 38),
//     new Cinderella('ola', 22, 38),
//     new Cinderella('ola', 22, 37),
//     new Cinderella('ola', 22, 40)
// ];
// class Prince{
//
//     constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// const prince = new Prince('valera', 23, 36);
//
// // for (const cin of princess) {
// //     if (cin.shoeSize === prince.size){
// //         console.log(cin);
// //     }
// // }
// console.log(princess.find((cin) => cin.shoeSize === prince.size));

// Array.prototype.myForEach = function(callback){
//     for (let i = 0; i < this.length; i++) {
//         callback(this[i], i, this);
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////////////lesson8

// const user = {name: 'olya', age: 20, status: true};

// const {name, status} = user;
// console.log(name, status);
// const {name: userName, age: userAge} = user;
// console.log(userName, userAge);
// const {name, muz = {name: 'Viktor', age: 25}} = user;
// console.log(name, muz);
// console.log(user);
// const user = {
//     name: 'Nika',
//     address: {
//         city: 'Warsaw',
//         street: 'Main 10'
//     }
// };
//
// const {address: {city, street}} = user;
// console.log(city, street);


// const arr = [1, 2, 3, 4];
// const [a, ...rest] = arr;
// console.log(a, rest);

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// const newArr = coursesAndDurationArray.map((value, index) => ({id: index + 1, ...value}));
// console.log(newArr);

// function deepCopy(object){
//     if (object){
//         let funcs = [];
//         for (const key in object) {
//             if (typeof object[key] === 'function'){
//                 const func = object[key].bind({});
//                 funcs.push({func, key});
//             }
//         }
//         const copy = JSON.parse(JSON.stringify(object));
//         for (const func of funcs) {
//             copy[func.key] = func.func;
//         }
//         return copy;
//     }
//     throw new Error('!!!!!');
// }

/////////////////////////////////////////////////////////////////lesson9
// const div = document.createElement('div');
// div.innerText = 'lorem ipsum';
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// div.style.backgroundColor = 'green';
// div.style.color = 'white';
// div.style.fontSize = '32px';
// document.body.appendChild(div);
// const cloneDiv = div.cloneNode(true);
// document.body.appendChild(cloneDiv);

// let arr = ['Main','Products','About us','Contacts'];
// const list = document.createElement('ul');
// for (const element of arr) {
//     const li = document.createElement('li');
//     li.innerText = element;
//     list.appendChild(li);
// }
// document.body.appendChild(list);


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// const block = document.createElement('div');
// block.classList.add('course-block');
// for (const el of coursesAndDurationArray) {
//     const course = document.createElement('div');
//     course.classList.add('block');
//     const par = document.createElement('p');
//     par.innerText = el.title;
//     const par2 = document.createElement('p');
//     par2.innerText = el.monthDuration;
//     course.append(par, par2);
//     block.appendChild(course);
// }
// document.body.appendChild(block);

// for (const course of coursesAndDurationArray) {
//     const block = document.createElement('div');
//     block.classList.add('item');
//     const h1 = document.createElement('h1');
//     h1.classList.add('heading');
//     h1.innerText = course.title;
//     const par = document.createElement('p');
//     par.classList.add('description');
//     par.innerText = course.monthDuration;
//     block.append(h1, par);
//     document.body.appendChild(block);
// }

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

const blockForBlocks = document.createElement('div');
blockForBlocks.classList.add('mainBlock');
for (const courseBlock of coursesArray) {
    const coursBlock = document.createElement('div');
    coursBlock.classList.add('course-block');
    const h1 = document.createElement('h1');
    h1.innerText = courseBlock.title;
    const blockDuration = document.createElement('div');
    blockDuration.classList.add('durationBlock');
    const par1 = document.createElement('p');
    par1.innerText = courseBlock.monthDuration;
    const par2 = document.createElement('p');
    par2.innerText = courseBlock.hourDuration;
    blockDuration.append(par1, par2);
    const list = document.createElement('ul');
    for (const module of courseBlock.modules) {
        const li = document.createElement('li');
        li.innerText = module;
        list.appendChild(li);
    }
    coursBlock.append(h1, blockDuration, list);
    blockForBlocks.appendChild(coursBlock);
}
document.body.appendChild(blockForBlocks);