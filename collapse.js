'use strict';

const btnEl = document.querySelector('.faq-collapse__btn');
// console.log(btnEl);

// for (let i = 0; i < btnEl.length; i++) {
//     btnEl[i].addEventListener("click", function () {
//         this.classList.toggle("active");
//         let content = this.nextElementSibling;
//         if (content.style.maxHeight) {
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }

btnEl.addEventListener("click", () => {
    btnEl.classList.toggle("faq-active");
});