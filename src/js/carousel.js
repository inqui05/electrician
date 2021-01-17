'use strict';
const carousel = () => {
    const servicesElements = document.querySelector('.services-elements'),
        servicesCarousel = document.querySelector('.services-carousel'),
        arrows = document.querySelector('.services-arrow'),
        elements = document.querySelectorAll('.col-sm-6'),
        modalCallback = document.querySelector('.modal-callback'),
        modalOverlay = document.querySelector('.modal-overlay'),
        modalClose = document.querySelector('modal-close'),
        style = document.createElement('style'),
        long = elements.length;
    let realPosition = 0,
        currentPosition = 0,
        newPosition = 0,
        maxPos = 3,
        minPos = 0,
        countElems = 3;
    
    const addCallback = () => {
        modalCallback.style.display = 'block';
        modalOverlay.style.display = 'block';
    };

    const removeCallback = () => {
        modalCallback.style.display = 'none';
        modalOverlay.style.display = 'none';
    };

    const findcountElems = () => {
        const widthWindow = document.documentElement.clientWidth;
        if (widthWindow < 768) {
            countElems = 1;
        } else if (widthWindow >= 768 && widthWindow < 1024) {
            countElems = 2;
        } else if (widthWindow >= 1024) {
            countElems = 3;
        }
    };

    const addStyles = () => {
        servicesElements.classList.add('carousel');
        servicesCarousel.classList.add('carousel-in');
        for (const element of elements) {
            element.classList.add('carousel-elem');
        }
    
        style.id = 'carousel-style';
        style.textContent = `
            .carousel {
                overflow: hidden !important;
            }
            .carousel-in {
                display: flex;
                transition: transform 0.5s;
                will-change: transform;
            }
            .carousel-elem {
                display: flex;
                align-items: center;
                justify-content: center;
                flex: 0 0 ${Math.floor(100 / countElems)}%;
                margin: auto 0;
            }`;
        document.head.append(style);
    };

    findcountElems();
    addStyles();

    window.addEventListener('resize', () => {
        findcountElems();
        addStyles();
    });
 
    arrows.addEventListener('click', event => {
        const target = event.target;
        if (target.classList.contains('arrow-left')) {
            --realPosition;
            --currentPosition;
            --newPosition;
            
            if (minPos > realPosition) {
                minPos = realPosition;
                newPosition = 0;
                servicesCarousel.prepend(elements[long - 1 + ((minPos + 1) % long)].cloneNode(true));
            }

            servicesCarousel.style.transform = `translateX(-${currentPosition * Math.floor(100 / countElems)}%)`;
        } else if (target.classList.contains('arrow-right')) {
            ++realPosition;
            ++currentPosition;
            ++newPosition;

            if (maxPos < realPosition) {
                maxPos = realPosition;
                servicesCarousel.append(elements[((maxPos - 4) % long)].cloneNode(true));
            }

            servicesCarousel.style.transform = `translateX(-${newPosition * Math.floor(100 / countElems)}%)`;
            currentPosition = newPosition;
        }
    });

    servicesElements.addEventListener('click', event => {
        const target = event.target;

        if (target.tagName === 'A') {
            event.preventDefault();
            addCallback();
        }
    });

    modalOverlay.addEventListener('click', () => {
        removeCallback();
    });

    modalCallback.addEventListener('click', event => {
        if (event.target.classList.contains('.modal-close') || event.target.tagName === 'IMG') {
            removeCallback();
        }
    });
};
export default carousel;