"use strict";

class First {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log('Привет, я метод родителя!');
  }
}

const first = new First('Kate', 32);

class Second extends First {
  hello() {
    super.hello();
    console.log('А я наследуемый метод!');
  }
}

const second = new Second('Kate', 32);

second.hello();

console.log(first);
console.log(second);
