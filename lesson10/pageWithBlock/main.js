let numberCount = +localStorage.getItem('number') || 100;
const lastTm = +localStorage.getItem('lastVisit') || 0;
const now = Date.now();
const sec = lastTm ? (now - lastTm) / 1000 : Infinity;
if (sec > 10){
    numberCount += 10;
}
const el = document.getElementById('result');
el.innerText = numberCount + ' uan';
localStorage.setItem('number', numberCount);
localStorage.setItem('lastVisit', String(now));
