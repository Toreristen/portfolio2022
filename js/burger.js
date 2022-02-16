const navSlide = () => {
    const burger = document.querySelector(".nav__burger");
    const nav = document.querySelector(".nav__list");
    const menu1 = document.querySelector(".nav__list-a");
    const menu2 = document.querySelector("#menu2");
    const menu3 = document.querySelector("#menu3");
    const menu4 = document.querySelector("#menu4");
    
    //const mediaQuery = window.matchMedia("(max-width: 768px)");
    
    //toggle
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        burger.classList.toggle('toggle');
    })

    menu1.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        burger.classList.toggle('toggle');
    } )

    menu2.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        burger.classList.toggle('toggle');
    } )

    menu3.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        burger.classList.toggle('toggle');
    } )

    menu4.addEventListener("click", () => {
        nav.classList.toggle("nav__active");
        burger.classList.toggle('toggle');
    } )
}

navSlide();