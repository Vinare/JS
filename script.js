const book = document.querySelectorAll('.book');
const list2 = document.querySelectorAll('ul')[0];
const listItems2 = list2.querySelectorAll('li');
const adv = document.querySelector('.adv');
const titlePro = document.querySelectorAll('h2')[4];
const chapterD = document.querySelectorAll('li')[10];
const chapterC = document.querySelectorAll('li')[2];
const chapter1 = document.querySelectorAll('li')[3];
const chapter2 = document.querySelectorAll('li')[6];
const chapter3 = document.querySelectorAll('.book li')[12];
const chapterIntro = document.querySelectorAll('li')[47];
const chapterFirst = document.querySelectorAll('li')[55];
const chapterThird = document.querySelectorAll('li')[50];
const chapterFourth = document.querySelectorAll('li')[48];
const chapterA = document.querySelectorAll('li')[51];
const chapterB = document.querySelectorAll('li')[54];
const chapter7 = document.querySelector('li')[55];
const chapter8 = document.createElement('li');




console.log(list2);
console.log(listItems2);



book[0].before(book[1]);
book[0].after(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

titlePro.textContent = 'Книга 3. this и Прототипы Объектов';
titlePro.style.color = 'darkkhaki';

adv.remove();

chapterD.before(chapterC);
chapter1.after(chapter2);
chapter2.after(chapter3);
chapterIntro.after(chapterFirst);
chapterB.before(chapterA);
chapterThird.after(chapterFourth);

chapter8.textContent = 'Глава 8: За пределами ES6';
// lists[2].append(chapter8);
// chapter7.after(chapter8);



const chapters = document.querySelectorAll('li'); // снова вызываем все главы для обновления коллекции NodeList, чтобы появился новый пункт Глава 8 

console.dir(chapter3);
console.dir(chapter8);
console.log(chapters);
console.log(book);

