const ballImage = document.querySelector('.ball-img img');
const input = document.querySelector('.question-area input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Tak!', 'Nie.', 'Może.', 'Ciężko powiedizeć...', 'Nie chcesz znać odpowiedzi na to pytanie...:/'];

const generateAnswer = () => {
    const number = Math.floor(Math.random() * 5);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`
}

const shakeBall = () => {
    ballImage.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === '?') {
        generateAnswer();
        error.textContent = '';
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Pytanie musi być zakończone znakiem"?".';
        answer.textContent = '';
    } else {
        error.textContent = 'Musisz zadać jakieś pytanie!';
        answer.textContent = '';
    }
    ballImage.classList.remove('shake-animation');
}


ballImage.addEventListener('click', shakeBall);




//FUnkcje: Czy input jest pusty?
//Czy jest pytanie zakończone pytajnikiem?
//

//ULEP CODE :)

// const answear = () => {
//     if (input.value != '') {
//         answer.textContent = "tak!";
//         ballImage.classList.add('shake-animation');
//     } else {
//         error.textContent = "Wpisz pytanie!";
//     }

// }

// const addShake = () => {

//     answear();
// }
// ballImage.addEventListener('click', addShake);