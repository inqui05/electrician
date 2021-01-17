'use strict';
const buttonUp = () => {
    const up = document.querySelector('.up'),
        servicesSection = document.querySelector('.title-h2'),
        top = document.querySelector('.main-wrapper');

    up.style.display = 'none';

    window.addEventListener('scroll', () => {
        if (servicesSection.getBoundingClientRect().top > 125) {
            up.style.display = 'none';
        } else if (servicesSection.getBoundingClientRect().top <= 125) {
            up.style.display = 'block';
        }
    });

    up.addEventListener('click', () => {
        top.scrollIntoView({behavior: "smooth"});
    });
};
export default buttonUp;