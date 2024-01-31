
window.addEventListener('load', function () {
    const addCartBtnList = document.querySelectorAll('button');
    const cartCount = document.querySelector('.count');

    let state = {
        cart: []
    }

    const handleAddToCartClick = (e) => {
        let product = {
            id: e.target.dataset.id,
            price: parseInt(e.target.previousElementSibling.textContent.replace("$", "")),
            desc: e.target.parentElement.children[1].textContent
        }
        state.cart.push(product);
        refreshProductCount();
        console.log(state.cart)
    }

    const refreshProductCount = () => {
        cartCount.textContent = state.cart.length;
    }

    addCartBtnList.forEach(item => {
        item.addEventListener('click', handleAddToCartClick)
    });

    // addCart.addEventListener('click', myID)
})

//Zebrać więcej szczegółów o produktów w koszyku : cena

//Zrobić klik na "Koszyk i wyświetlić produkty, które są w koszyku"
//Podczas wyświetlania produktów ma być ich nazwa, ilość i cena oraz suma zamówienia
//button do dodawania sztuk
//Wyświetlić ile jest sztuk jednego produktu a nie ten sam produkt osobno