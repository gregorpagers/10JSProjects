const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('button');
const error = document.querySelector('.error');
const info = document.querySelector('.cost-info');
const spnInfo = document.querySelector('.cost');



const checkForm = () => {
    if (price.value == "" || people.value == "" || tip.value == 0) {
        error.textContent = "Wypełnij wszystkie pola!";
        info.style.display = "none";
    } else {
        error.textContent = "";
        countAmount();
    }
}

const countAmount = () => {
    const nprice = parseFloat(price.value);
    const npeolple = parseInt(people.value);
    const ntip = parseFloat(tip.value);

    const amount = (nprice + (nprice * ntip)) / npeolple;
    info.style.display = "block";
    spnInfo.textContent = amount.toFixed(2);
}





btn.addEventListener('click', checkForm);




















































// const price = document.querySelector('#price');
// const people = document.querySelector('#people');
// const tip = document.querySelector('#tip');
// const countBtn = document.querySelector('button');
// const error = document.querySelector('.error');
// const costInfo = document.querySelector('.cost-info');
// const cost = document.querySelector('span.cost');

// const showBill = () => {
//     if (price.value == '' || people.value == '' || tip.value == '0') {
//         error.textContent = "Uzupełnij wszystkie pola!";
//         costInfo.style.display = 'none';
//     } else {
//         error.textContent = '';
//         displayResult();
//     }
// }

// const displayResult = () => {
//     const nPrice = parseFloat(price.value);
//     const nPeople = parseInt(people.value);
//     const nTip = parseFloat(tip.value);

//     const result = (nPrice + nPrice * nTip) / nPeople;

//     costInfo.style.display = 'block';
//     cost.textContent = result.toFixed(2);
// }

// countBtn.addEventListener('click', showBill);