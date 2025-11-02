const i1 = document.getElementById('i1');
const div = document.createElement('div');
i1.oninput = function (){
    let pounds = i1.value * 2.20462;
    div.innerText = `Pounds: ${pounds}`;
    document.body.appendChild(div);
}
