'use strict';
const slider = () => {
    const items = document.querySelectorAll('.item'),
        topSlider = document.querySelector('.top-slider'),
        text = topSlider.querySelectorAll('.table');
    let currentSlide = 0,
        interval;

    topSlider.insertAdjacentHTML('beforeend', `
                                                <ul class="slick-dots" style="z-index:10;">
                                                    <li class="dot slick-active"></li>
                                                    <li class="dot"></li>
                                                    <li class="dot"></li>
                                                </ul>
                                            `);
    const dots = document.querySelectorAll('.dot');

    text[0].classList.add('active');

    //честно говоря, не понимаю, зачем это делать с помощью JS, а не подправить в html. Но задание есть задание!
    text[0].querySelector('.big').innerHTML = 'Комплексные электротехнические работы и установка ЭУИ';
    text[0].querySelector('.text').innerHTML = `Электромонтажные работы под ключ в домах, квартирах и офисах.
    Сборка и монтаж электрических щитов профессиональным инструментом. Монтаж розеток, выключателей, освещения и др.`;
    text[1].querySelector('.big').innerHTML = 'Монтаж кабельных систем';
    text[1].querySelector('.text').innerHTML = `Прокладка силового, TV, UTP и др. кабеля в стенах, кабель-каналах,
    металлорукавах.`;
    text[2].querySelector('.big').innerHTML = 'Работаем 7 дней в неделю!';
    text[2].querySelector('.text').innerHTML = `Обмер объекта производим в день подачи заявки или на следующий день.
    Смета и обмер - бесплатно!`;

    const prevSlide = (elements, index) => {
        elements[index].style.display = 'none';
    };

    const nextSlide = (elements, index) => {
        elements[index].style.display = 'block';
    };

    const prevDotOrText = (elements, index, text) => {
        elements[index].classList.remove(text);
    };

    const nextDotOrText = (elements, index, text) => {
        elements[index].classList.add(text);
    };

    const autoPlaySlide = () => {
        prevSlide(items, currentSlide);
        prevDotOrText(dots, currentSlide, 'slick-active');
        prevDotOrText(text, currentSlide, 'active');
        currentSlide++;
        if (currentSlide >= items.length) {
            currentSlide = 0;
        }
        nextSlide(items, currentSlide);
        nextDotOrText(dots, currentSlide, 'slick-active');
        nextDotOrText(text, currentSlide, 'active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    topSlider.addEventListener('click', event => {
        const target = event.target;

        if (target.matches('.dot')) {
            dots.forEach((element, index) => {
                if (element === target) {
                    prevSlide(items, currentSlide);
                    prevDotOrText(dots, currentSlide, 'slick-active');
                    prevDotOrText(text, currentSlide, 'active');
                    currentSlide = index;
                    nextSlide(items, currentSlide);
                    nextDotOrText(dots, currentSlide, 'slick-active');
                    nextDotOrText(text, currentSlide, 'active');

                    clearInterval(interval);
                    startSlide();
                }
            });
        }
    });
    startSlide();
};

export default slider;