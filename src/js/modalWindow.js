'use strict';
const modalWindow = () => {
    const modalCallback = document.querySelector('.modal-callback'),
        price = document.querySelector('#services'),
        faq = document.querySelector('#faq'),
        contacts = document.querySelector('#contacts'),
        modalOverlay = document.querySelector('.modal-overlay'),
        mobileMenu = document.querySelector('.mobile-menu');
    
    const showCallback = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    const closeCallback = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    const showMenu = () => {
        mobileMenu.classList.add('open');
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('open');
    };
    
    window.addEventListener('click', event => {
        const target = event.target;
    
        if (target.tagName === 'A' && target.classList.contains('callback-btn')){
            event.preventDefault();
            if (mobileMenu.classList.contains('open')) {
                closeMenu();
            }
            showCallback();
            return;
        } else if(target.classList.contains('mobile-menu-close') || target.classList.contains('overlay')) {
            closeMenu();
        } else if(target.classList.contains('mob-menu-btn') || (target.tagName === 'SPAN' && target.closest('.mob-menu-btn'))){
            showMenu();
            return;
        } else if (target.tagName === 'A' && target.textContent === 'Цены на услуги') {
            event.preventDefault();
            if (mobileMenu.classList.contains('open')) {
                closeMenu();
            }
            price.scrollIntoView({behavior: "smooth"});
            return;
        } else if (target.tagName === 'A' && target.textContent === 'Ответы на вопросы') {
            event.preventDefault();
            if (mobileMenu.classList.contains('open')) {
                closeMenu();
            }
            faq.scrollIntoView({behavior: "smooth"});
            return;
        } else if (target.tagName === 'A' && target.textContent === 'Контакты') {
            event.preventDefault();
            if (mobileMenu.classList.contains('open')) {
                closeMenu();
            }
            contacts.scrollIntoView({behavior: "smooth"});
            return;
        } else if (target.classList.contains('button-services')) {
            showCallback();
        } else if (target.classList.contains('modal-overlay')) {
            closeCallback();
        } else if (target.tagName === 'IMG' && target.closest('.modal-close')) {
            closeCallback();
        } else if (target.tagName === 'A' && target.classList.contains('absolute')) {
            event.preventDefault();
            showCallback();
        }
    });
};

export default modalWindow;