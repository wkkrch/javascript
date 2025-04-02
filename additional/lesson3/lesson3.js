// let arr = [];
// for (let i = 0; i < 50; i++){
//     arr.push(i * 2);
// }
// for (let i = 1; i < 50; i++){
//     arr.push(i * 2 + 1);
// }
// for (let i = 0; i < 20; i++){
//     let randomNum = Math.floor(Math.random() * 100);
//         arr.push(randomNum);
// }
// for (let i = 0; i < 20; i++) {
//     let numRandom = Math.floor(Math.random() * (732 - 8 + 1) + 8);
//     arr.push(numRandom);
// }
// for (let i = 0; i < arr.length; i += 3){
//     console.log(arr[i]);
// }
// console.log(' ');
// for (let i = 2; i < arr.length; i += 3){
//     if (arr[i] % 2 === 0){
//         console.log(arr[i]);
//     }
// }
// let arrNumNew = [];
// for (let i = 2; i < arr.length; i += 3){
//     if (arr[i] % 2 === 0){
//         arrNumNew.push(arr[i]);
//     }
// }
// console.log(arrNumNew);
//
// let arrN =  [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < arr.length - 1; i++){
// if (arrN[i + 1] % 2 === 0){
//     console.log(arrN[i]);
//    }
// }

// let arrayNum = [100,250,50,168,120,345,188];
//
// let sum = 0;
//
// for (let i = 0; i < arrayNum.length; i++){
//     sum += arrayNum[i];
// }
// let averageCheck = sum / arrayNum.length;
// console.log(Math.floor(averageCheck));

// let arr = [];
// let array = [];
// for (let i = 0; i < 10; i++){
//     arr.push(Math.floor(Math.random() * 100) + 1);
// }
// for (let i = 0; i < arr.length; i++){
//     array.push(arr[i] * 5);
// }
// console.log(arr);
// console.log(array);

// let main = [12, 'gahs', true, false, 22, 'jakdk', 20, 14, 'skjk', 6];
// let newArr = [];
// for (let i = 0; i < main.length; i++){
//     if (typeof main[i] === 'number'){
//         newArr.push(main[i]);
//     }
// }
// console.log(main);
// console.log(newArr);

// let usersWithId = [
//     {id: 1, name: 'vasya', age: 31, status: false},
//     {id: 2, name: 'petya', age: 30, status: true},
//     {id: 3, name: 'kolya', age: 29, status: true},
//     {id: 4, name: 'olya', age: 28, status: false}
// ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let usersWithCities = [];
// for (let i = 0; i < usersWithId.length; i++) {
//     let user = usersWithId[i];
//     for (let j = 0; j < citiesWithId.length; j++) {
//         if (citiesWithId[j].user_id === user.id) {
//             user.address = {
//                 user_id: citiesWithId[j].user_id,
//                 country: citiesWithId[j].country,
//                 city: citiesWithId[j].city
//             };
//         }
//     }
//     usersWithCities.push(user);
// }
// console.log(usersWithCities);

// let arr = [];
// for (let i = 0; i < 10; i++){
//     let num = Math.floor(Math.random() * 60) + 1;
//     arr.push(num);
//     if (num % 2 === 0){
//         console.log(num);
//     }
// }
// console.log(arr);

let liters = [ 'a', 'b', 'c'];
let forLit = '';
// for (let i = 0; i < liters.length; i++){
//     forLit += liters[i];
// }
// console.log(forLit);
// let i = 0;
// while (i < liters.length){
//     forLit += liters[i];
//     i++;
// }
// console.log(forLit);
for (let liter of liters){
    forLit += liter;
}
console.log(forLit);