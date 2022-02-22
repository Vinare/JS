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
const inputTotal = document.querySelectorAll('.total-input');

const selectedIndex = screensSelect.selectedIndex;
startBtn.disabled = true;

const appData = {
  title: '', 
  screens: [], 
  screenPrice: 0, 
  adaptive: true,
  rollback: 0,  
  count: 0,
  allServicePricesPercent: 0,
  allServicePricesNumber: 0,
  fullPrice: 0, 
  servicePercentPrice: 0, 
  servicesPercent: {},
  servicesNumber: {}, 
  
  init: function() {
    this.addTitle();
    screensInput.addEventListener('input', this.toggleButton);
    screensSelect.addEventListener('change', this.toggleButton);
    inputRange.addEventListener('input', this.addRollback.bind(this));
    startBtn.addEventListener('click', this.start.bind(this));
    resetBtn.addEventListener('click', this.reset.bind(this));
    buttonPlus.addEventListener('click', this.addScreenBlock);
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
    this.addScreens();
    this.addServices();
    this.addPrices();
    this.showResult();
    this.blockBtn();
  },

  blockBtn: function() {
    screens.forEach((screen) => {
      const select = screen.querySelector('select');
      const input = screen.querySelector('input');
      
      select.disabled = true;
      input.disabled = true;
    });

    startBtn.style.display = "none";
    resetBtn.style.display = "block";

    inputCheckbox.forEach((checkbox) => {
      checkbox.disabled = true;
      checkbox.classList.toggle('custom-checkbox-disactive');
    });
  },

  reset: function() {
    resetBtn.style.display = "none";
    startBtn.style.display = "block";

    let fckInputs = document.querySelectorAll('.main-controls__item.screen');

    let i, len;

    for (i = 0, len = fckInputs.length; i < len; ++i) {
      if(i > 0) {
        fckInputs[i].remove();
      }
    }
    
    screensInput.disabled = false;
    screensSelect.disabled = false;
    screensInput.value = '';
    screensSelect.selectedIndex = 0;
    
    this.screens.length = 0;

    inputCheckbox.forEach((checkbox) => {
      checkbox.checked = (checkbox.checked) ? false : false;
      checkbox.disabled = false;
      checkbox.classList.toggle('custom-checkbox-disactive');

      rangeValue.textContent = '0%';
      inputRange.value = '0';
    });

    otherItemsPercent.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');

      if (check.checked) {
        label.textContent = '';
        input.value = 0;
      }
    });

    otherItemsNumber.forEach((item) => {
      const check = item.querySelector('input[type=checkbox]');
      const label = item.querySelector('label');
      const input = item.querySelector('input[type=text]');
      
      if (check.checked) {
        label.textContent = '';
        input.value = 0;
      }
    });

    this.screenPrice = 0;  // обнуляем значения переменных
    this.count = 0;  
    this.allAddServices = 0;  
    this.fullPrice = 0;  
    this.servicePercentPrice = 0;

    this.showResult();
  },
 
  showResult: function() {
    total.value = this.screenPrice;  // стоимость верстки всех экранов
    totalСount.value = this.count;  // общее количество экранов
    totalСountOther.value = this.allAddServices;  // стоимость всех доп услуг
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

    this.allAddServices = this.allServicePricesPercent + this.allServicePricesNumber;  // стоимость всех доп услуг

    this.fullPrice = +this.screenPrice + this.allServicePricesPercent + this.allServicePricesNumber;  // получаем итоговую стоимость

    this.servicePercentPrice = this.fullPrice - (this.fullPrice * (this.rollback / 100));  // итоговая стоимость с учетом отката 
  },  
};

appData.init();




