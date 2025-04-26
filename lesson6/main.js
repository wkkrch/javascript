let length1 = 'hello world';
let length2 = 'lorem ipsum';
let length3 = 'javascript is cool';
console.log(length1.length);
console.log(length2.length);
console.log(length3.length);
console.log(length1.toUpperCase());
console.log(length2.toUpperCase());
console.log(length3.toUpperCase());

let bigWord1 = 'HELLO WORLD';
let bigWord2 = 'LOREM IPSUM';
let bigWord3 = 'JAVASCRIPT IS COOL';
console.log(bigWord1.toLowerCase());
console.log(bigWord2.toLowerCase());
console.log(bigWord3.toLowerCase());

let str = ' dirty string   ';
console.log(str.trim());
let str1 = 'Ревуть воли як ясла повні';
let arr = str1.split(' ');
console.log(arr);

let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let newArr = arrNum.map(num => num + '');
console.log(newArr);

function sortNums(array, direction) {
    if (direction === 'ascending') {
        return array.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return array.sort((a, b) => b - a);
    }
}

let nums = [11, 21, 3];
console.log(sortNums(nums, 'descending'));
console.log(sortNums(nums, 'ascending'));

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let result = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(element => element.monthDuration > 5)
    .map((course, index) => ({
        ...course,
        id: index + 1
    }));
console.log(result);

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let courses = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
        logo: '',
        price: 0,
        rating: 5,
        avgResult: 99
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced'],
        logo: '',
        price: 0,
        rating: 4.998,
        avgResult: 97
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'python core',
            'python advanced'],
        logo: '',
        price: 0,
        rating: 4.812,
        avgResult: 98
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
        logo: '',
        price: 0,
        rating: 4.65,
        avgResult: 97
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java'],
        logo: '',
        price: 0,
        rating: 4.772,
        avgResult: 100
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
        logo: '',
        price: 0,
        rating: 4.53,
        avgResult: 90
    }
];

let sassCourses = coursesArray.filter(course =>
    course.modules.includes('sass'));
console.log(sassCourses);
let dockerCourses = coursesArray.filter(course =>
    course.modules.includes('docker'));
console.log(dockerCourses);

let numCards = ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let suits = ['spade', 'diamond', 'heart', 'clubs'];
let cards = [];
for (let suit of suits) {
    for (let num of numCards) {
        let card = {
            suit: suit,
            num: num,
            color: (suit === 'spade' || suit === 'clubs') ? 'black' : 'red'
        };
        cards.push(card);
    }
}
console.log(cards);
let findASpade = cards.filter(card => (card.suit === 'spade' && card.num === 'A'))
console.log(findASpade);

let allSix = cards.filter(card => (card.num === '6'))
console.log(allSix);

let redCards = cards.filter(card => (card.color === 'red'))
console.log(redCards);

let findDiamondCards = cards.filter(card => (card.suit === 'diamond'))
console.log(findDiamondCards);

const highRanks = ['9', '10', 'J', 'Q', 'K', 'A'];

let findClubsCards = cards.filter(card =>
    card.suit === 'clubs' && highRanks.includes(card.num)
);
console.log(findClubsCards);

let groupedCards = cards.reduce((acc, card) => {
        acc[card.suit].push(card);
        return acc;
    }, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});
console.log(groupedCards);

function filtered (arr, callback){
    let emptyArray = [];
    for (const item of arr) {
        if (callback(item)){
            emptyArray.push(item);
        }
    }
    return emptyArray;
}

console.log(filtered([11, 22, 33, 44, 55, 66], (item) => item % 2 === 0));
const users = [
    { name: 'Vika', age: 22, status: true },
    { name: 'Ira', age: 19, status: false },
    { name: 'Oleh', age: 30, status: true },
    { name: 'Sasha', age: 26, status: false },
    { name: 'Nastya', age: 24, status: true },
    { name: 'Andrii', age: 35, status: false },
    { name: 'Olena', age: 28, status: true },
    { name: 'Maksym', age: 18, status: false },
    { name: 'Katya', age: 20, status: true },
    { name: 'Dima', age: 40, status: false }
];
console.log(filtered(users, (item) => item.age < 30));

