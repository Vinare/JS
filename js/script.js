"use strict";

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

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
const screensSelect = document.querySelector('select');
const selectedIndex = screensSelect.selectedIndex;
startBtn.disabled = true;





const appData = {
  title: '', 
  screens: [], 
  screenPrice: 0, 
  adaptive: true,  
  rollback: 5,
  allServicePricesPercent: 0,
  allServicePricesNumber: 0,
  fullPrice: 0, 
  servicePercentPrice: 0, 
  servicesPercent: {},
  servicesNumber: {}, 
  init: function() {
    appData.addTitle();
    screensInput.addEventListener('input', appData.toggleButton);
    screensSelect.addEventListener('change', appData.toggleButton);
    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
  },
  addTitle: function() {
    document.title = title.textContent;
  },

  toggleButton: function() {
    screens.forEach(function(screen) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
     
      startBtn.disabled = select.value && input.value.trim() !== "" ? false : true;
    });  
  },

  start: function() {
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    // appData.getServicePercentPrice();
     
    // appData.logger();
    appData.showResult();
  },

  showResult: function() {
    total.value = appData.screenPrice; // стоимость верстки всех экранов
    totalСountOther.value = appData.allServicePricesPercent + appData.allServicePricesNumber; 
    // стоимость всех доп услуг
    fullTotalCount.value = appData.fullPrice; // итоговая стоимость
  },

  addScreens: function() {
    screens = document.querySelectorAll('.screen');

    screens.forEach(function(screen, index) {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
       
      appData.screens.push({id: index, name: selectName, price: +select.value * +input.value});
    });
  },

  addServices: function() {
    otherItemsPercent.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      
      if (check.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach(function(item) {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      
      if (check.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function() {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = screens[0].cloneNode(true);
    
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function() {  // суммируем общую стоимость экранов и услуг
    for (let screen of appData.screens) {
        appData.screenPrice += +screen.price;  // суммируем стоимость верстки всех экранов
    }

    for(let key in appData.servicesPercent) {        // суммируем стоимость всех процент услуг
      appData.allServicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    for(let key in appData.servicesNumber) {         // суммируем стоимость всех фиксир услуг
      appData.allServicePricesNumber += appData.servicesNumber[key];
    }

    appData.fullPrice = +appData.screenPrice + appData.allServicePricesPercent + appData.allServicePricesNumber;

    
    console.log(appData.allServicePricesPercent);
    
  },
  
  getServicePercentPrice: function() {
    appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
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




