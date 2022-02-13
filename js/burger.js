const navSlide = () => {
    const burger = document.querySelector('.nav__burger');
    const nav = document.querySelector(".nav__list");
    
    //toggle
    burger.addEventListener('click', () => {
        nav.classList.toggle(".nav-active");
        console.log("works");
    })
}

navSlide();