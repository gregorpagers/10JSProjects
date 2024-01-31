const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const popup = document.querySelector('.popup');

//taka walidacja która sprawdza, 
//czy hasło i nazwa użytkownika są dłuższe niż pewna ilość znaków
const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.previousElementSibling.innerText.slice(0. - 1)} składa się z
        min. ${min} znaków.`);
    }
}

// Czy hasło 1 jest takie samo jak hasło 2 ???
const checkPassword = (pass1, pass2) => {
    if (pass1.value !== pass2.value) {
        showError(pass2, 'Hasła do siebie nie pasują.');
    }
}

//funkcja walidacja formularza
const showError = (input, msg) => {
    //argument INPUT przechowuje nasze INPUTY
    // argument MSG przechowuje placeholder
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');
    formBox.classList.add('error');
    errorMsg.textContent = msg;
}

const clearError = (input) => { //usuwa klasę error z diva form-box
    const formBox = input.parentElement;
    formBox.classList.remove('error');
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el);
        }
    });
}

//sprawdzanie poprawności email

const chechkMail = (email) => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(email.value)) { //metoda test porównuje czy wyrażenie regularne jest jak to co jej damy=
        clearError(email);
    } else {
        showError(email, "E-mail jest niepoprawny");
    }
}

//Funkcja która odpowiada za to czy można wysłać formularz
const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++;
        }
    });

    if (errorCount === 0) {
        popup.classList.add('show-popup');
    }
}

//klik na "wyślij"
sendBtn.addEventListener('click', e => {
    e.preventDefault();
    checkForm([username, pass, pass2, email]);
    checkLength(username, 3);
    checkLength(pass, 8);
    checkPassword(pass, pass2);
    chechkMail(email);
    checkErrors();
});

//funkcja która czyści formularz i zapobiega wysłaniu go
clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = '';
        clearError(el);
    });
});