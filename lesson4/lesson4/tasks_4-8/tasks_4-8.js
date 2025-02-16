let array = [1, 2, 3, 5, 8, 9, 6, 4];

function printArray(array) {
    for (let num of array) {
        document.write(num);
    }
}

printArray(array);
//////////////////////////////////////////////////////////////

function paragraph (text) {
    document.write(`<p> ${text}</p>`)
}
paragraph('hello friends!');
// //////////////////////////////////////////////////////////////

function list (user) {
    document.write('<ul>');
    document.write(`<li>${user}</li>`);
    document.write(`<li>${user}</li>`);
    document.write(`<li>${user}</li>`);
    document.write('</ul>');
}

list('Veronika');
// /////////////////////////////////////////////////////////////

function listTwo (user1, count) {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${user1}</li>`);
    }
    document.write('</ul>');
}
listTwo('Volodymyr', 8);
//////////////////////////////////////////////////////////////

let variables = ['bdbdbd', 26, false, true, 564, 'hahjsks'];
function lists (array) {
    document.write('<ul>');
    for (let variable of variables) {
        document.write(`<li>${variable}</li>`);
    }
    document.write('</ul>')
}
lists(variables);

