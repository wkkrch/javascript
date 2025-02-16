function arrayObjects(objects) {
    for (let user of users) {
        document.write(`<div>
          <h4>ID: ${user.id}</h4>
          <p>name: ${user.name}</p>
          <p>age: ${user.age}</p>
</div`);
    }
}

let users = [
    {id: 1, name: 'Alex', age: 30},
    {id: 2, name: 'Sasha', age: 26},
    {id: 3, name: 'Grisha', age: 27},
    {id: 4, name: 'Tolya', age: 23},
    {id: 5, name: 'Vasya', age: 36}
];
arrayObjects(users);