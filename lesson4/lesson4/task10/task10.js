function minNumber(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let numbers = [25, 53, 12, 15, 6, 78];
document.write(minNumber(numbers));