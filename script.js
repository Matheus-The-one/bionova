const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
    
        nav.classList.toggle('active');

        
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        
        burger.classList.toggle('toggle');
    });
}

navSlide();


document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const nav = document.querySelector('.nav-links');
        const burger = document.querySelector('.burger');
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    });
});