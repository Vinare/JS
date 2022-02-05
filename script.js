"use strict";

let title; 
let screens; 
let screenPrice; 
let adaptive; 
let service1;
let service2; 
let servicePrice1;
let servicePrice2;
let rollback = 5;
let allServicePrices;
let fullPrice; 
let servicePercentPrice; 

const showTypeOf = function(variable) {
  console.log(variable, typeof variable);
};

let isNumber = function(num) {
  return !isNaN(parseFloat(num)) && isFinite(num);
};

const asking = function() {
  title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
  screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные");
  
  do {
    screenPrice = prompt('Сколько будет стоить данная работа?');
  } while (!isNumber(screenPrice)); 

  adaptive = confirm('Нужен ли адаптив на сайте?');
};

const getAllServicePrices = function() {
  let sum = 0;

  for (let i = 0; i < 2; i++) {
    let price = 0;

    if (i === 0) {
      service1 = prompt('Какой дополнительный тип услуги нужен?');
    } else if (i === 1) {
      service2 = prompt('Какой дополнительный тип услуги нужен?');
    }

    do {
      price = prompt('Сколько это будет стоить?');
    } while (!isNumber(price)); 

    sum += +price;
  }
  return sum; 
};

const getFullPrice = function() {
  return +screenPrice + allServicePrices;
};

const getRollBackSum = function(totalprice, rollbackpercent) {
  return totalprice * (rollbackpercent/100);
};

const getServicePercentPrice = function(totalprice, callback) {
  return totalprice - callback(fullPrice, rollback);
};

const getTitle = function() {
  title = title.trim();
  return title[0].toUpperCase() + title.slice(1).toLowerCase();
};

const getRollbackMessage = function(price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%';
  } else if (price < 30000 && price >= 15000) {
    return 'Даем скидку в 5%';
  } else if (price < 15000 && price > 0) {
    return 'Скидка не предусмотрена';
  } else if (price <= 0) {
    return 'Что-то пошло не так';
  }
};

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrice(fullPrice, getRollBackSum);
title = getTitle();

showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log('allServicePrices', allServicePrices);

console.log(getRollbackMessage(fullPrice));
console.log(fullPrice);
console.log(servicePercentPrice);
console.log(title);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей \nСтоимость разработки сайта ' + fullPrice + ' рублей');








