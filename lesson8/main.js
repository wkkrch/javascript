function copyObject (object){
    if (object){
        let functions = [];
        for (const key in object) {
            if (typeof object[key] === 'function') {
                const functionClone = object[key].bind({});
                functions.push({functionClone, key});
            }
        }
        const objectClone = JSON.parse(JSON.stringify(object));
        for (const func of functions) {
            objectClone[func.key] = func.functionClone;
        }
        return objectClone;
    }
    throw new Error(`!!!!`);
}
let user = {
    name: 'vasya',
    age: 31,
    skills: ['html', 'css', 'js'],
    greeting(){
        console.log(`hi, my skills are: ${this.skills}`);
    }
}
let userClone = copyObject(user);
console.log(user.skills === userClone.skills);
console.log(user);
console.log(userClone);
user.greeting();
userClone.greeting();

