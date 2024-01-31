/*  
    1. Trzeba pobrać elementy - 3 przyciski i napis
    2. Trzeba zrobić funkcję która będzie liniowo dodawała font-size - zwiększała bądź zmniejszała
    3. Trzeba dać nasłuchiwanie na plus i minus
    4. trzeba zrobić funkcje dodającą color royalblue
    5. nasłuchiwanie na color
    6. zmienić kolor na random???



*/

const plusBtn = document.querySelector('.plus');
const minusBtn = document.querySelector('.minus');
const colorBtn = document.querySelector('.color');
const paragraph = document.querySelector('p');

let fz = 36;

console.log(paragraph);
const add = () => {
    fz += 5;
    paragraph.style.fontSize = fz + 'px';
}
const min = () => {
    if (fz > 20) {
        fz -= 5;
        paragraph.style.fontSize = fz + 'px';
    }
}

const color = () => {
    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)
    paragraph.style.color = 'rgb(' + r + ',' + g + ',' + 0 + ')';
    console.log(r + '  ' + g + '  ' + b)
}

plusBtn.addEventListener('click', add)
minusBtn.addEventListener('click', min)
colorBtn.addEventListener('click', color)