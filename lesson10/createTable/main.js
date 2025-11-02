const countRows = document.getElementById('i1');
const countCell = document.getElementById('i2');
const textInform = document.getElementById('i3');
const button = document.getElementById('b1');

button.onclick = function(){
    const block = document.getElementById('blockForTable');
    const rows = countRows.value;
    const cols = countCell.value;
    const text = textInform.value ?? '';

    block.innerHTML = '';

    const table = document.createElement('table');
    table.classList.add('tableCreate');
    const tbody = document.createElement('tbody');

    for (let r = 0; r < rows; r++) {
        const tr = document.createElement('tr');
        tr.classList.add('trCreate');
        for (let c = 0; c < cols; c++) {
            const td = document.createElement('td');
            td.classList.add('tdCreate');
            td.innerText = text;
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    block.appendChild(table);
    document.body.appendChild(block);

}