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
const inputCheckbox = document.querySelectorAll('.custom-checkbox');
const screensSelect = document.querySelector('select');
const selectedIndex = screensSelect.selectedIndex;
startBtn.disabled = true;

const appData = {
  title: '', 
  screens: [], 
  screenPrice: 0, 
  adaptive: true,
  rollback: 5,  
  count: 0,
  allServicePricesPercent: 0,
  allServicePricesNumber: 0,
  fullPrice: 0, 
  servicePercentPrice: 0, 
  servicesPercent: {},
  servicesNumber: {}, 
  
  init: function() {
    this.addTitle();
    screensInput.addEventListener('input', appData.toggleButton);
    screensSelect.addEventListener('change', appData.toggleButton);
    inputRange.addEventListener('change', appData.addRollback);
    startBtn.addEventListener('click', appData.start);
    buttonPlus.addEventListener('click', appData.addScreenBlock);
  },

  addTitle: function() {
    document.title = title.textContent;
  },

  toggleButton: function() {
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
     
      startBtn.disabled = select.value && input.value.trim() !== "" ? false : true;
    });  
  },

  addRollback: function() {
    this.rollback = +inputRange.value;
    rangeValue.textContent = inputRange.value + '%';
  },

  start: function() {
    appData.blockBtn();
    appData.addScreens();
    appData.addServices();
    appData.addPrices();
    appData.showResult();
  },

  blockBtn: function() {
    inputCheckbox.forEach((checkbox) => {
      checkbox.disabled = true;
      checkbox.classList.toggle('custom-checkbox-disactive');
    });
  },

  showResult: function() {
    total.value = this.screenPrice;  // стоимость верстки всех экранов
    totalСount.value = this.count;  // общее количество экранов
    totalСountOther.value = this.allServicePricesPercent + this.allServicePricesNumber;  // стоимость всех доп услуг
    fullTotalCount.value = this.fullPrice;  // итоговая стоимость
    totalCountRollback.value = this.servicePercentPrice;
  },

  addScreens: function() {
    screens = document.querySelectorAll('.screen');

    screens.forEach((screen, index) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      const selectName = select.options[select.selectedIndex].textContent;
 
      this.screens.push({id: index, name: selectName, price: +select.value * +input.value, screenscount: +input.value});
    });
  },

  addServices: function() {
    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      
      if (check.checked) {
        this.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      
      if (check.checked) {
        this.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function() {
    screens = document.querySelectorAll('.screen');
    const cloneScreen = screens[0].cloneNode(true);
    
    screens[screens.length - 1].after(cloneScreen);
  },

  addPrices: function() {  // суммируем стоимости
    for (let screen of this.screens) {
        this.screenPrice += screen.price;  // суммируем стоимость верстки всех экранов
        this.count += screen.screenscount;  // и общее количество экранов
    }

    for(let key in this.servicesPercent) {  // суммируем стоимость всех процент услуг
      this.allServicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
    }

    for(let key in this.servicesNumber) {  // суммируем стоимость всех фиксир услуг
      this.allServicePricesNumber += this.servicesNumber[key];
    }

    this.fullPrice = +this.screenPrice + this.allServicePricesPercent + this.allServicePricesNumber;  // получаем итоговую стоимость

    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));  // итоговая стоимость с учетом отката 
  },  
};

appData.init();




