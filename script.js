"use strict";

const appData = {
  title: '', 
  screens: '', 
  screenPrice: 0, 
  adaptive: true,  
  rollback: 5,
  allServicePrices: 0,
  fullPrice: 0, 
  servicePercentPrice: 0, 
  service1: '', 
  service2: '',
  start: function() {
    appData.asking();
    appData.allServicePrices;
    appData.fullPrice;
    appData.servicePercentPrice;
    appData.title; 
    appData.logger();
  },
  asking: function() {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    appData.screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
    
    do {
      appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    } while (!appData.isNumber(appData.screenPrice)); 

    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  
  isNumber: function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
  },
  
  getAllServicePrices: function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
    } 

    do {
      price = prompt('Сколько это будет стоить?');
    } while (!appData.isNumber(price)); 

    sum += +price;
  }
  return sum; 
  },
  
  getFullPrice: function() {
  return +appData.screenPrice + appData.allServicePrices;
  },
  
  getServicePercentPrice: function() {
  return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
  },
  
  getTitle: function() {
  appData.title = appData.title.trim();
  return appData.title[0].toUpperCase() + appData.title.slice(1).toLowerCase();
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
    for (let key in appData) {
      console.log('Ключ: ' + key + ' Значение: ' + appData[key]);
    }
  }
};


appData.start();
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getServicePercentPrice();
appData.title = appData.getTitle();

// console.log(appData.fullPrice);
// console.log(appData.servicePercentPrice);







