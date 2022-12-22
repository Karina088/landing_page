'use strict';

const btnEl = document.getElementsByClassName('faq-collapse__btn');

for (let i = 0; i < btnEl.length; i++) {
    btnEl[i].addEventListener("click", function () {
        this.classList.toggle("faq-active");
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    })
}
