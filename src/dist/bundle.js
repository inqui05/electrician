(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,l,c,a,i,s,u,d,y,f;r=document.querySelector(".modal-close"),l=document.querySelector(".header.relative"),c=document.querySelector(".modal-callback"),a=document.querySelector("#services"),i=document.querySelector("#faq"),s=document.querySelector("#contacts"),u=document.querySelector(".modal-overlay"),d=document.querySelector(".button-services"),y=function(){c.style.display="block",u.style.display="block"},f=function(){c.style.display="none",u.style.display="none"},l.addEventListener("click",(function(e){var t=e.target;return"A"===t.tagName&&t.classList.contains("callback-btn")?(e.preventDefault(),void y()):t.classList.contains("mob-menu-btn")||"SPAN"===t.tagName&&t.closest(".mob-menu-btn")?void y():"A"===t.tagName&&"Цены на услуги"===t.textContent?(e.preventDefault(),void a.scrollIntoView({behavior:"smooth"})):"A"===t.tagName&&"Ответы на вопросы"===t.textContent?(e.preventDefault(),void i.scrollIntoView({behavior:"smooth"})):"A"===t.tagName&&"Контакты"===t.textContent?(e.preventDefault(),void s.scrollIntoView({behavior:"smooth"})):void 0})),d.addEventListener("click",(function(){y()})),u.addEventListener("click",(function(){f()})),r.addEventListener("click",(function(){f()})),function(){var e,t=document.querySelectorAll(".item"),n=document.querySelector(".top-slider"),o=n.querySelectorAll(".table"),r=0;n.insertAdjacentHTML("beforeend",'\n                                                <ul class="slick-dots" style="z-index:10;">\n                                                    <li class="dot slick-active"></li>\n                                                    <li class="dot"></li>\n                                                    <li class="dot"></li>\n                                                </ul>\n                                            ');var l=document.querySelectorAll(".dot");o[0].classList.add("active"),o[0].querySelector(".big").innerHTML="Комплексные электротехнические работы и установка ЭУИ",o[0].querySelector(".text").innerHTML="Электромонтажные работы под ключ в домах, квартирах и офисах.\n    Сборка и монтаж электрических щитов профессиональным инструментом. Монтаж розеток, выключателей, освещения и др.",o[1].querySelector(".big").innerHTML="Монтаж кабельных систем",o[1].querySelector(".text").innerHTML="Прокладка силового, TV, UTP и др. кабеля в стенах, кабель-каналах,\n    металлорукавах.",o[2].querySelector(".big").innerHTML="Работаем 7 дней в неделю!",o[2].querySelector(".text").innerHTML="Обмер объекта производим в день подачи заявки или на следующий день.\n    Смета и обмер - бесплатно!";var c=function(e,t){e[t].style.display="none"},a=function(e,t){e[t].style.display="block"},i=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},u=function(){c(t,r),i(l,r,"slick-active"),i(o,r,"active"),++r>=t.length&&(r=0),a(t,r),s(l,r,"slick-active"),s(o,r,"active")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)};n.addEventListener("click",(function(n){var u=n.target;u.matches(".dot")&&l.forEach((function(n,y){n===u&&(c(t,r),i(l,r,"slick-active"),i(o,r,"active"),a(t,r=y),s(l,r,"slick-active"),s(o,r,"active"),clearInterval(e),d())}))})),d()}(),t=document.querySelector(".up"),n=document.querySelector(".title-h2"),o=document.querySelector(".main-wrapper"),t.style.display="none",window.addEventListener("scroll",(function(){n.getBoundingClientRect().top>125?t.style.display="none":n.getBoundingClientRect().top<=125&&(t.style.display="block")})),t.addEventListener("click",(function(){o.scrollIntoView({behavior:"smooth"})})),function(){var t=document.querySelector(".services-elements"),n=document.querySelector(".services-carousel"),o=document.querySelector(".services-arrow"),r=document.querySelectorAll(".col-sm-6"),l=document.querySelector(".modal-callback"),c=document.querySelector(".modal-overlay"),a=document.createElement("style"),i=r.length,s=0,u=0,d=0,y=3,f=0,m=3,v=function(){l.style.display="none",c.style.display="none"},p=function(){var e=document.documentElement.clientWidth;e<768?m=1:e>=768&&e<1024?m=2:e>=1024&&(m=3)},b=function(){t.classList.add("carousel"),n.classList.add("carousel-in");var o,l=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,l=function(){};return{s:l,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw c}}}}(r);try{for(l.s();!(o=l.n()).done;)o.value.classList.add("carousel-elem")}catch(e){l.e(e)}finally{l.f()}a.id="carousel-style",a.textContent="\n            .carousel {\n                overflow: hidden !important;\n            }\n            .carousel-in {\n                display: flex;\n                transition: transform 0.5s;\n                will-change: transform;\n            }\n            .carousel-elem {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ".concat(Math.floor(100/m),"%;\n                margin: auto 0;\n            }"),document.head.append(a)};p(),b(),window.addEventListener("resize",(function(){p(),b()})),o.addEventListener("click",(function(e){var t=e.target;t.classList.contains("arrow-left")?(--s,--u,--d,f>s&&(f=s,d=0,n.prepend(r[i-1+(f+1)%i].cloneNode(!0))),n.style.transform="translateX(-".concat(u*Math.floor(100/m),"%)")):t.classList.contains("arrow-right")&&(++s,++u,++d,y<s&&(y=s,n.append(r[(y-4)%i].cloneNode(!0))),n.style.transform="translateX(-".concat(d*Math.floor(100/m),"%)"),u=d)})),t.addEventListener("click",(function(e){"A"===e.target.tagName&&(e.preventDefault(),l.style.display="block",c.style.display="block")})),c.addEventListener("click",(function(){v()})),l.addEventListener("click",(function(e){(e.target.classList.contains(".modal-close")||"IMG"===e.target.tagName)&&v()}))}()})();