let n1 = Number(prompt('Введіть перше число:'))
let n2 = Number(prompt('Введіть друге число:'))
if (n1 > n2) {
    console.log('Максимальне число:' + n1);
} else if (n2 > n1) {
    console.log('Максимальне число:' + n2)
    } else {
    console.log("Числа рівні!");
}