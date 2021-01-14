'use strict';
const modalWindow = () => {
    const modalClose = document.querySelector('.modal-close'),
        header = document.querySelector('.header.relative'),
        modalCallback = document.querySelector('.modal-callback'),
        price = document.querySelector('#services'),
        faq = document.querySelector('#faq'),
        contacts = document.querySelector('#contacts'),
        modalOverlay = document.querySelector('.modal-overlay');
    
    const showMenu = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    //console.log(price);

    const closeMenu = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    };
    
    header.addEventListener('click', event => {
        const target = event.target;
    
        if (target.tagName === 'A' && target.classList.contains('callback-btn')){
            event.preventDefault();
            showMenu();
            return;
        } else if(target.classList.contains('mob-menu-btn') || (target.tagName === 'SPAN' && target.closest('.mob-menu-btn'))){
            showMenu();
            return;
        } else if (target.tagName === 'A' && target.textContent === 'Цены на услуги') {
            event.preventDefault();
            price.scrollIntoView({behavior: "smooth"});
            return;
        } else if (target.tagName === 'A' && target.textContent === 'Ответы на вопросы') {
            event.preventDefault();
            faq.scrollIntoView({behavior: "smooth"});
            return;
        } else if (target.tagName === 'A' && target.textContent === 'Контакты') {
            event.preventDefault();
            contacts.scrollIntoView({behavior: "smooth"});
            return;
        }
    });

    modalOverlay.addEventListener('click', () => {
        closeMenu();
    });

    modalClose.addEventListener('click', () => {
        closeMenu();
    });
};

export default modalWindow;