const menu = document.querySelector('.mobile-menu');

const nav = document.querySelector('nav');

menu.addEventListener('click', (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
    menu.classList.toggle('active');
});





    
