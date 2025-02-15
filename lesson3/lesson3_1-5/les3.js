for (let i = 0; i <= 10; i++){
    document.write(`<div> Hello! </div>`);
}
/////////////////////////////////////////////////////////////////////////////

for (let a = 0; a <=10; a++){
    document.write(`<div> ${a} Okten </div>`);
}
////////////////////////////////////////////////////////////////////////////

let b = 0;
while (b <= 20){
    document.write(`<h3> Viktoria </h3>`);
    b++;
}
// /////////////////////////////////////////////////////////////////////////

let c = 0;
while (c <= 20){
    document.write(`<h1> ${c} By! </h1>`);
    c++;
}
////////////////////////////////////////////////////////////////////////////

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<ul>');
for (let f = 0; f < listOfItems.length; f++){
document.write(`<li> ${listOfItems[f]}</li>`);
}
document.write('</ul>');


