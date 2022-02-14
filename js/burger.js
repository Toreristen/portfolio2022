const navSlide = () => {
    const burger = document.querySelector(".nav__burger");
    const nav = document.querySelector(".nav__list");
    
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    //toggle
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        burger.classList.toggle('toggle');
    })
}

navSlide();