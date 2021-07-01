const hour = document.querySelector('.hour__value')
const minute = document.querySelector('.minute__value')
const second = document.querySelector('.second__value')

let date = Date('today')
let hourValue = date[16] + date[17]
let minuteValue = date[19] + date[20]
let secondValue = date[22] + date[23]
hour.innerHTML = hourValue;
minute.innerHTML = minuteValue;
second.innerHTML = secondValue;
    
setInterval(() => {
    date = Date('today')
    hourValue = date[16] + date[17]
    minuteValue = date[19] + date[20]
    secondValue = date[22] + date[23]
    hour.innerHTML = hourValue;
    minute.innerHTML = minuteValue;
    second.innerHTML = secondValue;
}, 1000)

