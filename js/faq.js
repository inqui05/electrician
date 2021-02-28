'use strict';
const faq = () => {
    const accordeon = document.querySelector('.accordeon-section'),
        elems = accordeon.querySelectorAll('.element');

    const closeElems = () => {
        elems.forEach((elem) => {
            elem.classList.remove('active');
            elem.querySelector('.element-content').style.display = 'none';
        });
    };

    const openElem = elem => {
        elem.classList.add('active');
        elem.querySelector('.element-content').style.display = 'block';
    };

    accordeon.addEventListener('click', event => {
        const target = event.target;

        if (target.classList.contains('title')) {
            if (target.closest('.element').classList.contains('active')) {
                closeElems();
            } else {
                closeElems();
                openElem(target.closest('.element'));
            }
        }
    });
};
export default faq;