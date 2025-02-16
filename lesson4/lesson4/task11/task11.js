function sum(arr) {
    let total = 0;

    for (let num of arr) {
        total += num;
    }

    return total;
}
console.log(sum([8, 14, 10]));
console.log(sum([12, 65, 46, 7]));
console.log(sum([89, 255, 48])); 