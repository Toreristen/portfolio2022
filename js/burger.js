const navSlide = () => {
    const burger = document.querySelector(".nav__burger");
    const nav = document.querySelector(".nav__list");
    //nav.style.transform = "translateX(100%)";
    
    //const mediaQuery = window.matchMedia("(min-width: 768px)");
    
    if (window.matchMedia("(max-width: 768px)").matches) {
        nav.style.transform = "translateX(100%)";
    } else {
        nav.style.transform = "translateX(0%)";
    }
        
    //toggle
    burger.addEventListener("click", () => {
        
        if (nav.style.transform === "translateX(100%)") {
            nav.style.transform = "translateX(0%)";
        } else {
            nav.style.transform = "translateX(100%)";
        }
        
        //nav.classList.toggle('nav__active');
        burger.classList.toggle('toggle');
    })
}

navSlide();