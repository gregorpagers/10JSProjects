// fetch(https://api.exchangerate.host/latest?base=${currencyOne.value}&symbols=${currencyTwo.value})
//http://api.exchangerate.host/convert?access_key=408467d08ffe67d5b760f4d9a900c13a&from=${currencyOne.value}&to=${currencyTwo.value}
//
//const API_KEY = 'fca_live_douyuL1gPwVdOgizkZGjfJegDJym1mlhZ5ITX7ai'
//const URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${currencyOne.value}&base_currency=${currencyTwo.value}`


const currencyOne = document.querySelector('#currency-one');
const amountOne = document.querySelector('.amount-one');
const currencyTwo = document.querySelector('#currency-two');
const amountTwo = document.querySelector('.amount-two');
const swapBtn = document.querySelector('.swap');
const rateInfo = document.querySelector('.rate-info');

const calculate = () => {
    const API_KEY = 'fca_live_lmo5wM9boeV1gtzTDEfz7jENZKF62D2JVG7Zx9DR'
    const URL = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&currencies=${currencyTwo.value}&base_currency=${currencyOne.value}`
    fetch(URL)
        .then(res => res.json())
        .then(d => {
            const currency1 = currencyOne.value;
            const currency2 = currencyTwo.value;
            const rate = d.data[currency2];
            rateInfo.textContent = `1 ${currency1} = ${rate.toFixed(4)} ${currency2}`
            amountTwo.value = (amountOne.value * rate).toFixed(2);
        });
}

const swapCurrency = () => {
    const oldValue = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = oldValue;
    calculate();
}



currencyOne.addEventListener('change', calculate);
currencyTwo.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
swapBtn.addEventListener('click', swapCurrency);

calculate();