// Cambio de cantidad de articulos ingresado por el usuario.
document.addEventListener("DOMContentLoaded", function() {


const minusBtn = document.querySelector('.input__minus');
const plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// Agregar el total de productos al carrito cuando se presiona el boton ADD TO CART
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{ 
    lastValue = lastValue + userInputNumber;
    
    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    
});

//Mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if(lastValue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    }else{
        drawProductInModal();
    }
    
});

//Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
        lastValue = 0;
        cartNotification.innerText = lastValue;
    });
}
// Evento de clic en el documento para cerrar el modal al hacer clic fuera de él
document.addEventListener("click", function (event) {
    const cartModal = document.querySelector('.cart-modal');
    const cartIconBtn = document.querySelector('.header__cart');

    if (!cartModal.contains(event.target) && !cartIconBtn.contains(event.target)) {
      cartModal.classList.remove('show');
    }
  });

// FUNCIONES

function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="../assets/images/image-product-1.jpg" alt="">
            <div>
            <p class="cart-modal__product">Dc Multiverse Batman 30 Cm Mcfarlane</p>
            <p class="cart-modal__price">$20.000 x 3 <span>$60.000</span> </p>
            </div>
            <img class="cart-modal__delete" src="../assets/images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__checkout" >Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$20.000x${lastValue} <span>$${lastValue*20000}</span>`;
}

}); 