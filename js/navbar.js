// Manejo del menú de hamburguesa
const hamburgerMenu = document.querySelector(".header__menu");
const modalNavbar = document.querySelector(".modal-navbar__background");
const closeModalNavbar = document.querySelector(".modal-navbar__close-icon");

modalNavbar.style.display = "none";

hamburgerMenu.addEventListener("click", () => {
    console.log("abrir modal");
    modalNavbar.style.display = "block";
});

closeModalNavbar.addEventListener("click", () => {
    modalNavbar.style.display = "none";
});

// Mostrar el input para el botón Buscar
const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector(".header__search--btn");

searchButton.addEventListener("click", () => {
    toggleSearch();
});

document.addEventListener("click", handleDocumentClick);

function handleDocumentClick(event) {
    if (
        !searchInput.contains(event.target) &&
        !searchButton.contains(event.target)
    ) {
        searchInput.style.display = "none";
        searchInput.style.width = "0";
        searchInput.style.opacity = "0";
    }
}

// Función para mostrar el input de búsqueda
function toggleSearch() {
    searchInput.style.display = "block";
    searchInput.style.opacity = "1";
    searchInput.style.width = "200px";
}

// Manejo del modal del login
document.addEventListener("DOMContentLoaded", function () {
    const loginMenu = document.querySelector(".header__avatar");
    const modalLogin = document.querySelector(".modal-login__background");
    const closeModalLogin = document.querySelector(".modal-login__close-icon");

    modalLogin.style.display = "none";

    loginMenu.addEventListener("click", () => {
        console.log("abrir modal");
        modalLogin.style.display = "block";
    });

    closeModalLogin.addEventListener("click", () => {
        modalLogin.style.display = "none";
    });

    
});
