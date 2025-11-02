function storage(arrayName, object) {
    const arrays = JSON.parse(localStorage.getItem('arrayName')) || [];
    arrays.push(object);
    localStorage.setItem('arrayName', JSON.stringify(arrays));
}
storage('arr', {name: 'vasya', age: 31});
storage('arr', {name: 'iryna', age: 28});
