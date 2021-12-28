"use strict";

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('other-items.number');

const inputRange = document.querySelector('.rollback input');
const rangeValue = document.querySelector('.rollback span');

const startBtn = document.getElementsByClassName('handler_btn')[0];
const resetBtn = document.getElementsByClassName('handler_btn')[1];

const total = document.getElementsByClassName('total-input')[0];
const totalСount = document.getElementsByClassName('total-input')[1];
const totalСountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const totalCountRollback = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen');

const screensInput = document.querySelector('.main-controls__input > input');

console.dir(startBtn);


const appData = {
  title: '', 
  screens: [], 
  screenPrice: 0, 
  adaptive: true,  
  rollback: 5,
  allServicePrices: 0,
  fullPrice: 0, 
  servicePercentPrice: 0, 
  services: {}, 
  init: function() {
    appData.addTitle();
    appData.blockButton();
    appData.start();
  },
  addTitle: function() {
    document.title = title.textContent;
  },
  blockButton: function() {
    startBtn.setAttribute("disabled", "disabled");
  },
  start: function() {
    // appData.asking();
    // appData.addPrices();
    // appData.getFullPrice();
    // appData.getServicePercentPrice();
    // appData.getTitle(); 
    // appData.logger();
  },

  asking: function() {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');

    for (let i = 0; i < 2; i++) {
      let name = prompt('Какие типы экранов нужно разработать?');
      let price = 0;

      do {
          price = prompt('Сколько будет стоить данная работа?');
      } while (!appData.isNumber(price));

      appData.screens.push({id: i, name: name, price: price});  // формируем массив объектов с ключом и значением
    }
    
    for (let i = 0; i < 2; i++) {
      let name = prompt('Какой дополнительный тип услуги нужен?');
      let price = 0; 

      do {
          price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price)); 

      appData.services[name] = +price; // собираем в объект services {} все ответы на вопросы поль-лю
    }

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  }, 

  

 
  
  // appData.screensInput.addEventListener('change', notEmptyString);

  isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },

  addPrices: function() {  // суммируем общую стоимость экранов и услуг
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;  // суммируем стоимость всех экранов
    }

    for(let key in appData.services) {         // суммируем стоимость всех доп услуг
      appData.allServicePrices += appData.services[key];
    }
  },
  
  getFullPrice: function() {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  
  getServicePercentPrice: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  
  getTitle: function() {
    appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase();
  },
  
  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return 'Даем скидку в 10%';
    } else if (price < 30000 && price >= 15000) {
      return 'Даем скидку в 5%';
    } else if (price < 15000 && price > 0) {
      return 'Скидка не предусмотрена';
    } else {
      return 'Что-то пошло не так';
    }
  },
  logger: function() {
    console.log(appData.fullPrice);
    console.log(appData.servicePercentPrice);
    console.log(appData.services);
    console.log(appData.screens);
  }
};

appData.init();




