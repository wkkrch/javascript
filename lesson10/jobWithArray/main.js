let arr = [];
for (let i = 0; i < 100; i++) {
    arr.push({id: i + 1, name: 'vasya', age: 31});
}
const prev = document.createElement('button');
const next = document.createElement('button');
prev.innerText = 'prev';
next.innerText = 'next';
document.body.append(prev, next);
const blockForPages = document.getElementById('block');
let page = 0;
const itemsPerPage = 10;

function renderPage() {
    blockForPages.innerHTML = '';
    const start = page  * itemsPerPage;
    const end = Math.min(start + itemsPerPage, arr.length);
    const slice = arr.slice(start, end);
    for (const item of slice) {
        const p = document.createElement('p');
        p.innerText = `${item.id} - ${item.name}, ${item.age}`;
        blockForPages.appendChild(p);
    }
    prev.disabled = page === 0;
    next.disabled = end >= arr.length;
}
next.onclick = function (){
    if ((page + 1) * itemsPerPage < arr.length){
        page++;
        renderPage();
    }
}
prev.onclick = function (){
    if (page > 0){
        page--;
        renderPage();
    }
}
renderPage();