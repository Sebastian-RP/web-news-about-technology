document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector(".nav-menu").classList.toggle('show');
});

window.sr = ScrollReveal();

sr.reveal('.showcase');
sr.reveal('.news-cards', { delay: 500 });
sr.reveal('.cards-banner-one', { delay: 500 });
sr.reveal('.cards-banner-two', { delay: 500 });