// let array = ['Main','Products','About us','Contacts'];
// let ul = document.createElement('ul');
// ul.classList.add('menu');
// for (const item of array) {
//     let li = document.createElement('li');
//     li.innerText = item;
//     ul.appendChild(li);
// }
// document.body.appendChild(ul);

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// for (const item of coursesAndDurationArray) {
//     let block = document.createElement('div');
//     block.classList.add('wrapper');
//     block.innerText = `${item.title} - ${item.monthDuration}`
//     document.body.appendChild(block);
// }

for (const item of coursesAndDurationArray) {
    let block = document.createElement('div');
    block.classList.add('item');
    let h1 = document.createElement('h1');
    h1.classList = 'heading';
    h1.innerText = item.title + ' - ';
    let p = document.createElement('p');
    p.classList = 'description';
    p.innerText = item.monthDuration;
    block.append(h1, p);
    document.body.appendChild(block);
}