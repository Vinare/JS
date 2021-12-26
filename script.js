const book = document.querySelectorAll('.book');
const list2 = book[0].querySelector('ul');

const list5 = document.querySelectorAll('ul')[5];
const listItems5 = list5.querySelectorAll('li');
const list6 = document.querySelectorAll('ul')[2];
const listItems6 = list6.querySelectorAll('li');
const adv = document.querySelector('.adv');
const titlePro = book[4].querySelector('a');
// const chapter1 = listItems2[3];
// const chapter2 = listItems2[6];
// const chapter3 = listItems2[8];
// const chapterC = listItems2[2];
// const chapterD = listItems2[10];
const chapterIntro = listItems5[1];
const chapterFirst = listItems5[9];
const chapterThird = listItems5[4];
const chapterFourth = listItems5[2];
const chapterA = listItems5[5];
const chapterB = listItems5[8];
const chapter7 = listItems6[8];
const chapter8 = document.createElement('li');

console.dir(list2.children);

book[0].before(book[1]);
book[0].after(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

titlePro.textContent = 'Книга 3. this и Прототипы Объектов';


adv.remove();

list2.children[10].before(list2.children[2]);
list2.children[3].after(list2.children[6]);
list2.children[6].after(list2.children[8]);
chapterIntro.after(chapterFirst);
chapterB.before(chapterA);
chapterThird.after(chapterFourth);

chapter8.textContent = 'Глава 8: За пределами ES6';
chapter7.after(chapter8);


