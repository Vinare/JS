const book = document.querySelectorAll('.book');
const list2 = book[0].querySelector('ul');
const list5 = book[5].querySelector('ul');
const list6 = book[2].querySelector('ul');
const adv = document.querySelector('.adv');
const titlePro = book[4].querySelector('a');
const chapter8 = document.createElement('li');

book[0].before(book[1]);
book[0].after(book[4]);
book[5].after(book[2]);

document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';

titlePro.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

list2.children[3].after(list2.children[6]);
list2.children[4].after(list2.children[8]);
list2.children[10].before(list2.children[2]);
list5.children[1].after(list5.children[9]);
list5.children[5].after(list5.children[3]);
list5.children[9].before(list5.children[6]);

chapter8.textContent = 'Глава 8: За пределами ES6';
list6.children[8].after(chapter8);


