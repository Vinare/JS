"use strict"

let title = prompt('Как называется ваш проект?')
let screens = prompt('Какие типы экранов нужно разработать?', "Простые, Сложные, Интерактивные")
let screenPrice = +prompt('Сколько будет стоить данная работа?', '12000')
let adaptive = confirm('Нужен ли адаптив на сайте?')
let service1 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice1 = +prompt('Сколько это будет стоить?')
let service2 = prompt('Какой дополнительный тип услуги нужен?')
let servicePrice2 = +prompt('Сколько это будет стоить?')
let fullPrice = screenPrice + servicePrice1 + servicePrice2
let servicePercentPrice = Math.ceil(fullPrice - 3000.5)

function showTypeOf(variable) {
  console.log(variable, typeof variable)
}

function getRollbackMessage(price) {
  if (price >= 30000) {
    return 'Даем скидку в 10%'
  } else if (price < 30000 && price >= 15000) {
    return 'Даем скидку в 5%'
  } else if (price < 15000 && price > 0) {
    return 'Скидка не предусмотрена'
  } else if (price <= 0) {
    return 'Что-то пошло не так'
  }
}

showTypeOf(title)
showTypeOf(screens)
showTypeOf(screenPrice)
showTypeOf(fullPrice)
showTypeOf(servicePercentPrice)

console.log(getRollbackMessage(fullPrice))

                               // Homework  //

let rollback = 5


let allServicePrices = function getAllServicePrices(expenses1, expenses2) {
  return expenses1 + expenses2
}

allServicePrices = servicePrice1 + servicePrice2

function getFullPrice(screenprice, addprice) {
  return screenprice + addprice
}

fullPrice = screenPrice + allServicePrices

function getTitle(title) {
  title = title.trim()
  return title[0].toUpperCase() + title.slice(1)
}

const rollBacksum = function(fullprice, rollbackpercent) {
  return fullprice * (rollbackpercent/100)
}

servicePercentPrice = function getServicePercentPrices(fullprice, collback) {
  return fullprice - collback(fullPrice, rollback)
}


console.log('Cумма всех дополнительных услуг = ' + allServicePrices + ' рублей')

console.log('Cумма стоимости верстки и дополнительных услуг = ' + getFullPrice(screenPrice,allServicePrices) + ' рублей')

console.log(getTitle(title))

console.log(servicePercentPrice(fullPrice, rollBacksum))

console.log(screens.split())








