(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var t,n,o,r,c,l,a,i,s,u,d,y,m,f,v,p;a=document.querySelector(".modal-close"),i=document.querySelector(".header.relative"),s=document.querySelector(".modal-callback"),u=document.querySelector("#services"),d=document.querySelector("#faq"),y=document.querySelector("#contacts"),m=document.querySelector(".modal-overlay"),f=document.querySelector(".button-services"),v=function(){s.style.display="block",m.style.display="block"},p=function(){s.style.display="none",m.style.display="none"},i.addEventListener("click",(function(e){var t=e.target;return"A"===t.tagName&&t.classList.contains("callback-btn")?(e.preventDefault(),void v()):t.classList.contains("mob-menu-btn")||"SPAN"===t.tagName&&t.closest(".mob-menu-btn")?void v():"A"===t.tagName&&"Цены на услуги"===t.textContent?(e.preventDefault(),void u.scrollIntoView({behavior:"smooth"})):"A"===t.tagName&&"Ответы на вопросы"===t.textContent?(e.preventDefault(),void d.scrollIntoView({behavior:"smooth"})):"A"===t.tagName&&"Контакты"===t.textContent?(e.preventDefault(),void y.scrollIntoView({behavior:"smooth"})):void 0})),f.addEventListener("click",(function(){v()})),m.addEventListener("click",(function(){p()})),a.addEventListener("click",(function(){p()})),function(){var e,t=document.querySelectorAll(".item"),n=document.querySelector(".top-slider"),o=n.querySelectorAll(".table"),r=0;n.insertAdjacentHTML("beforeend",'\n                                                <ul class="slick-dots" style="z-index:10;">\n                                                    <li class="dot slick-active"></li>\n                                                    <li class="dot"></li>\n                                                    <li class="dot"></li>\n                                                </ul>\n                                            ');var c=document.querySelectorAll(".dot");o[0].classList.add("active"),o[0].querySelector(".big").innerHTML="Комплексные электротехнические работы и установка ЭУИ",o[0].querySelector(".text").innerHTML="Электромонтажные работы под ключ в домах, квартирах и офисах.\n    Сборка и монтаж электрических щитов профессиональным инструментом. Монтаж розеток, выключателей, освещения и др.",o[1].querySelector(".big").innerHTML="Монтаж кабельных систем",o[1].querySelector(".text").innerHTML="Прокладка силового, TV, UTP и др. кабеля в стенах, кабель-каналах,\n    металлорукавах.",o[2].querySelector(".big").innerHTML="Работаем 7 дней в неделю!",o[2].querySelector(".text").innerHTML="Обмер объекта производим в день подачи заявки или на следующий день.\n    Смета и обмер - бесплатно!";var l=function(e,t){e[t].style.display="none"},a=function(e,t){e[t].style.display="block"},i=function(e,t,n){e[t].classList.remove(n)},s=function(e,t,n){e[t].classList.add(n)},u=function(){l(t,r),i(c,r,"slick-active"),i(o,r,"active"),++r>=t.length&&(r=0),a(t,r),s(c,r,"slick-active"),s(o,r,"active")},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;e=setInterval(u,t)};n.addEventListener("click",(function(n){var u=n.target;u.matches(".dot")&&c.forEach((function(n,y){n===u&&(l(t,r),i(c,r,"slick-active"),i(o,r,"active"),a(t,r=y),s(c,r,"slick-active"),s(o,r,"active"),clearInterval(e),d())}))})),d()}(),r=document.querySelector(".up"),c=document.querySelector(".title-h2"),l=document.querySelector(".main-wrapper"),r.style.display="none",window.addEventListener("scroll",(function(){c.getBoundingClientRect().top>125?r.style.display="none":c.getBoundingClientRect().top<=125&&(r.style.display="block")})),r.addEventListener("click",(function(){l.scrollIntoView({behavior:"smooth"})})),function(){var t=document.querySelector(".services-elements"),n=document.querySelector(".services-carousel"),o=document.querySelector(".services-arrow"),r=document.querySelectorAll(".col-sm-6"),c=document.querySelector(".modal-callback"),l=document.querySelector(".modal-overlay"),a=document.createElement("style"),i=r.length,s=0,u=0,d=0,y=3,m=0,f=3,v=function(){c.style.display="none",l.style.display="none"},p=function(){var e=document.documentElement.clientWidth;e<768?f=1:e>=768&&e<1024?f=2:e>=1024&&(f=3)},S=function(){t.classList.add("carousel"),n.classList.add("carousel-in");var o,c=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,c=function(){};return{s:c,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,a=!0,i=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw l}}}}(r);try{for(c.s();!(o=c.n()).done;)o.value.classList.add("carousel-elem")}catch(e){c.e(e)}finally{c.f()}a.id="carousel-style",a.textContent="\n            .carousel {\n                overflow: hidden !important;\n            }\n            .carousel-in {\n                display: flex;\n                transition: transform 0.5s;\n                will-change: transform;\n            }\n            .carousel-elem {\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ".concat(Math.floor(100/f),"%;\n                margin: auto 0;\n            }"),document.head.append(a)};p(),S(),window.addEventListener("resize",(function(){p(),S()})),o.addEventListener("click",(function(e){var t=e.target;t.classList.contains("arrow-left")?(--s,--u,--d,m>s&&(m=s,d=0,n.prepend(r[i-1+(m+1)%i].cloneNode(!0))),n.style.transform="translateX(-".concat(u*Math.floor(100/f),"%)")):t.classList.contains("arrow-right")&&(++s,++u,++d,y<s&&(y=s,n.append(r[(y-4)%i].cloneNode(!0))),n.style.transform="translateX(-".concat(d*Math.floor(100/f),"%)"),u=d)})),t.addEventListener("click",(function(e){"A"===e.target.tagName&&(e.preventDefault(),c.style.display="block",l.style.display="block")})),l.addEventListener("click",(function(){v()})),c.addEventListener("click",(function(e){(e.target.classList.contains(".modal-close")||"IMG"===e.target.tagName)&&v()}))}(),t=document.querySelector(".accordeon-section"),n=t.querySelectorAll(".element"),o=function(){n.forEach((function(e){e.classList.remove("active"),e.querySelector(".element-content").style.display="none"}))},t.addEventListener("click",(function(e){var t,n=e.target;n.classList.contains("title")&&(n.closest(".element").classList.contains("active")?o():(o(),(t=n.closest(".element")).classList.add("active"),t.querySelector(".element-content").style.display="block"))}))})();