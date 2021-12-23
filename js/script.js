"use strict";

const title = document.getElementsByTagName('h1');

console.log(title[0]);

const start = document.getElementsByClassName('handler_btn');

console.log(start[0]);

const reset = document.getElementsByClassName('handler_btn');

console.log(reset[1]);

const screenBtn = document.querySelector('.screen-btn');

console.log(screenBtn);

const percent = document.querySelectorAll('.percent');

console.log(percent);

const number = document.querySelectorAll('.number');

console.log(number);

const inputTypeRange = document.querySelector('.rollback input');

console.log(inputTypeRange);

const rangeValue = document.querySelector('.rollback span');

console.log(rangeValue);

const totalInput = document.getElementsByClassName('total-input');

for(var i=0; i<totalInput.length; i++) {
  console.log(totalInput[i]);
}

let screenChildren = document.querySelectorAll('.screen > div');

for(var i=0; i<screenChildren.length; i++) {
  console.log(screenChildren[i]);
}


// const appData = {
//   title: '', 
//   screens: [], 
//   screenPrice: 0, 
//   adaptive: true,  
//   rollback: 5,
//   allServicePrices: 0,
//   fullPrice: 0, 
//   servicePercentPrice: 0, 
//   services: {}, 

//   start: function() {
//     appData.asking();
//     appData.addPrices();
//     appData.getFullPrice();
//     appData.getServicePercentPrice();
//     appData.getTitle(); 
//     appData.logger();
//   },

//   asking: function() {
//     appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');

//     while (!appData.isString(appData.title)) {
//         appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
//     }

//     for (let i = 0; i < 2; i++) {
//       let name = prompt('Какие типы экранов нужно разработать?');

//       while (!appData.isString(name)) {
//           name = prompt('Какие типы экранов нужно разработать?');
//       }

//       let price = 0;

//       do {
//           price = prompt('Сколько будет стоить данная работа?');
//       } while (!appData.isNumber(price));

//       appData.screens.push({id: i, name: name, price: price});  // формируем массив объектов с ключом и значением
//     }
    
//     for (let i = 0; i < 2; i++) {
//       let name = prompt('Какой дополнительный тип услуги нужен?');
      
//       while (!appData.isString(name)) {
//           name = prompt('Какой дополнительный тип услуги нужен?');
//       }
      
//       let price = 0; 

//       do {
//           price = prompt('Сколько это будет стоить?');
//       } while (!appData.isNumber(price)); 

//       appData.services[name] = +price; // собираем в объект services {} все ответы на вопросы поль-лю
//     }

//     appData.adaptive = confirm('Нужен ли адаптив на сайте?');
//   },

//   isString: function(string) {
//     return isNaN(string);
//   }, 
  
//   isNumber: function(num) {
//     return !isNaN(parseFloat(num)) && isFinite(num);
//   },

//   addPrices: function() {  // суммируем общую стоимость экранов и услуг
//     for (let screen of appData.screens) {
//         appData.screenPrice += +screen.price;  // суммируем стоимость всех экранов
//     }

//     for(let key in appData.services) {         // суммируем стоимость всех доп услуг
//       appData.allServicePrices += appData.services[key];
//     }
//   },
  
//   getFullPrice: function() {
//     appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
//   },
  
//   getServicePercentPrice: function() {
//     appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
//   },
  
//   getTitle: function() {
//     appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
//   },
  
//   getRollbackMessage: function(price) {
//     if (price >= 30000) {
//       return 'Даем скидку в 10%';
//     } else if (price < 30000 && price >= 15000) {
//       return 'Даем скидку в 5%';
//     } else if (price < 15000 && price > 0) {
//       return 'Скидка не предусмотрена';
//     } else {
//       return 'Что-то пошло не так';
//     }
//   },
//   logger: function() {
//     console.log(appData.fullPrice);
//     console.log(appData.servicePercentPrice);
//     console.log(appData.services);
//     console.log(appData.screens);
//   }
// };

// appData.start();




