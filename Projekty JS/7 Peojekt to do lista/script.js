let todoInput;
let errorInfo; // info o konieczności wpisania zadania
let addBtn; //  przycisk add dodający nowy element do listy
let ulList; // lista zadań, tagi UL
// let newToDo; // zmienna przechowująca nowo dodawane zadanie

// Zmienne dodawane przed popup
let popup;
let popupInfo //Text w popupie, jak się doda pusty tekst
let todoToEdit // edytowany Todo]
let popupInput // input w popupie
let popupAddBtn // przycisk "zatwierdź" w popupie
let popupCloseBtn // przycisk "anuluj" w popupie


const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');
    popup = document.querySelector('.popup');
    popupInfo = document.querySelector('.popup-info');
    popupInput = document.querySelector('.popup-input');
    popupAddBtn = document.querySelector('.accept');
    popupCloseBtn = document.querySelector('.cancel');
}

const prepareDOMEvents = () => {
    ///nadajemy nasłuchiwanie
    addBtn.addEventListener('click', addNewToDo);
    document.addEventListener('click', checkClick);
    popupCloseBtn.addEventListener('click', closePopup);
    popupAddBtn.addEventListener('click', changeTodoText);
    todoInput.addEventListener('keyup', enterKeyCheck);
}

// Dodawanie nowego zadania do listy

const addNewToDo = () => {
    if (todoInput.value !== '') {
        const newToDo = document.createElement("li");
        newToDo.textContent = todoInput.value;
        crateToolsArea(newToDo); //czy jak będzie przed textConten to się skasuje? Czy jeak?
        ulList.append(newToDo);
        todoInput.value = '';
        errorInfo.textContent = '';
    } else {
        errorInfo.textContent = "Dopisz nowe zadanie!";
    }
}

//tworzenie panlelu z przyciskami
const crateToolsArea = (todoarg) => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    todoarg.appendChild(toolsPanel);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.textContent = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPanel.append(completeBtn, editBtn, deleteBtn);
}


// Rozpoznajemy jaki element został kliknięty
const checkClick = (e) => {
    if (e.target.matches('.complete')) {  //Po naciśnięciu przycisku complet dodajemy klasę .completed na li
        e.target.closest('li').classList.toggle('completed'); //e.target.closest wybiera ?najbliższe 'li'
        e.target.classList.toggle('completed');
    } else if (e.target.matches('.edit')) {
        editTodo(e);
    } else if (e.target.matches('.delete')) {
        deleteTodo(e);
    }
}

//Funkcja co otwiera popup
const editTodo = (e) => {
    todoToEdit = e.target.closest('li'); //sztos  - pobiera całe li
    popupInput.value = todoToEdit.firstChild.textContent; //wpisuje text z li do inputa w popupie
    popup.style.display = 'flex';//sprawia że popup staje się widoczny
}

//Funkcja co zamyka popup po kliknięciu anuluj
const closePopup = () => {
    popup.style.display = 'none';
    popupInfo.textContent = "";
}

//Edycja tekstu w inpucie w popupie
const changeTodoText = () => {
    if (popupInput.value !== '') {
        todoToEdit.firstChild.textContent = popupInput.value;
        popupInfo.textContent = "";
        popup.style.display = 'none';
    } else {
        popupInfo.textContent = 'Musisz podać jakąś treść!';
    }
}

// Funkcja usuwająca elementy
const deleteTodo = e => {
    e.target.closest('li').remove();

    const allTodos = ulList.querySelectorAll('li');

    if (allTodos.length === 0) {
        errorInfo.textContent = 'Brak zadań na liście.';
    }
}

//Funkcja zatwierdzająca zadania enterem
const enterKeyCheck = (e) => {
    if (e.key === 'Enter') {
        addNewToDo();
    }
}

document.addEventListener('DOMContentLoaded', main);