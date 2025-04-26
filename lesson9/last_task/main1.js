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
let div = document.createElement('div');
div.classList.add('wrapper');
for (const course of coursesArray) {
    let wrap = document.createElement('div');
    wrap.classList.add('wrap');
    let title = document.createElement('h2');
    title.innerText = course.title;
    let blockMonthAndHourDuration = document.createElement('div');
    blockMonthAndHourDuration.classList.add('monthAndHour');
    let month = document.createElement('p');
    month.classList.add('month');
    month.innerText = course.monthDuration;
    let hour = document.createElement('p');
    hour.classList.add('hour');
    hour.innerText = course.hourDuration;
    blockMonthAndHourDuration.append(month, hour);
    let list = document.createElement('ul');
    for (const module of course.modules) {
        let li = document.createElement('li');
        li.innerText = module;
        list.appendChild(li);
    }
    wrap.append(title, blockMonthAndHourDuration, list);
    div.appendChild(wrap);
}
document.body.appendChild(div);