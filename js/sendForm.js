'use strict';
const sendForm = () => {
    const modalCallback = document.querySelector('.modal-callback'),
        form = document.querySelector('form'),
        name = modalCallback.querySelector('.form-control'),
        phone = modalCallback.querySelector('.tel'),
        statusMessage = document.createElement('div');
    const errorMessage = 'Something went wrong! Please try to send the form later',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    //использована маска Максима, которую немного видоизменил
    const maskPhone = (masked = '+7 (___) ___-__-__') => {
        function mask(event) {
            phone.style.borderColor = "";
            const keyCode = event.keyCode;
            const template = masked,
                 def = template.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, "");
            let i = 0,
                newValue = template.replace(/[_\d]/g, a => (i < val.length ? val.charAt(i++) || def.charAt(i) : a));
            i = newValue.indexOf("_");
            if (i !== -1) {
                newValue = newValue.slice(0, i);
            }
            let reg = template.substr(0, this.value.length).replace(/_+/g,
                a => "\\d{1," + a.length + "}").replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
                this.value = newValue;
            }
            if (event.type === "blur" && this.value.length < 5) {
                this.value = "";
            }
        }

            phone.addEventListener("input", mask);
            phone.addEventListener("focus", mask);
            phone.addEventListener("blur", mask);
    };

    const checkName = () => {
        name.addEventListener("input", event => {
            name.style.borderColor  = "";
            event.target.value = event.target.value.replace(/[^А-ЯЁа-яё ]/g, '');
        });
    };

    maskPhone('+7 ___ ___-__-__');
    checkName();

    const postData = (jsonBody) => fetch('./server.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jsonBody)
    });

    modalCallback.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;

        if(name.value.length < 2) {
            name.style.borderColor = "red";
        } else if(phone.value.length < 16) {
            phone.style.borderColor = 'red';
        } else {
            const jsonBody = {};
            let formData;

            statusMessage.innerHTML = `
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
            </div>
            <style type="text/css">
            .spinner {
                    margin: 100px auto;
                width: 50px;
                height: 40px;
                text-align: center;
                font-size: 10px;
            }
          
            .spinner > div {
                background-color: #05C8FF;
                height: 100%;
                width: 6px;
                display: inline-block;
            
                -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
                animation: sk-stretchdelay 1.2s infinite ease-in-out;
            }
          
            .spinner .rect2 {
                -webkit-animation-delay: -1.1s;
                animation-delay: -1.1s;
            }
          
            .spinner .rect3 {
                -webkit-animation-delay: -1.0s;
                animation-delay: -1.0s;
            }
          
             .spinner .rect4 {
                -webkit-animation-delay: -0.9s;
                animation-delay: -0.9s;
            }
          
            .spinner .rect5 {
                -webkit-animation-delay: -0.8s;
                animation-delay: -0.8s;
            }
          
            @-webkit-keyframes sk-stretchdelay {
                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
                20% { -webkit-transform: scaleY(1.0) }
            }
          
            @keyframes sk-stretchdelay {
                0%, 40%, 100% { 
                 transform: scaleY(0.4);
                -webkit-transform: scaleY(0.4);
             }  20% { 
                  transform: scaleY(1.0);
                  -webkit-transform: scaleY(1.0);
                }
            }
            </style>`;

            formData = new FormData(form);
            form.appendChild(statusMessage);

            formData.forEach((value, key) => {
                jsonBody[key] = value;
            });

            postData(jsonBody)
                .then(response => {
                    if (response.status !== 200) {
                        throw new Error('Network status is not 200');
                    }
                    form.reset();
                    statusMessage.style.cssText = 'font-size: 2rem;';
                    statusMessage.style.color = '#000000';
                    statusMessage.textContent = successMessage;
                    setTimeout(() => statusMessage.remove(), 5000);
                })
                .catch(error => {
                    statusMessage.style.cssText = 'font-size: 2rem;';
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                });
        }

    });
};
export default sendForm;