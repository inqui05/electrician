'use strict';
const modalWindow = () => {
    const modalClose = document.querySelector('.modal-close'),
        header = document.querySelector('.header.relative'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay');
    
    const showMenu = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    const closeMenu = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    };
    
    header.addEventListener('click', event => {
        const target = event.target;
    
        if (target.tagName === 'A' && target.classList.contains('callback-btn')){
            event.preventDefault();
            showMenu();
        }
    
        if(target.classList.contains('mob-menu-btn') || (target.tagName === 'SPAN' && target.closest('.mob-menu-btn'))){
            showMenu();
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