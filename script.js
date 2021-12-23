const book = document.querySelectorAll('.book');

book[0].before(book[1]);

console.log(book[2]);
book[0].after(book[4]);
book[5].after(book[2]);