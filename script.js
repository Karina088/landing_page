'use strict';

document.querySelectorAll('.costumers__img')
    .forEach((el) =>
        el.addEventListener('click', (e) => {
            e.target.style.backgroundColor = '#5982E7';
        }));

document.querySelectorAll('form')
    .forEach(el => el.addEventListener('click', (event) => event.preventDefault()));

const btnIllustrator = document.querySelector('.illustration__btn');
const imgIllustrator = document.querySelector('.illustration__img');
console.log(imgIllustrator);


// btnIllustrator.addEventListener('pointerover', () => {
//     btnIllustrator.classList.toggle('color');
//     imgIllustrator.classList.toggle('active-img');
// });

// btnIllustrator.addEventListener('pointerout', () => {
//     btnIllustrator.classList.toggle('color');
//     imgIllustrator.classList.toggle('active-img');
// });

btnIllustrator.addEventListener("pointerdown", detectInputType);

function detectInputType(event) {
    switch (event.pointerType) {
        case "mouse":
            btnIllustrator.classList.toggle('color');
            imgIllustrator.classList.toggle('active-img');
            break;
        case "pen":
            btnIllustrator.classList.toggle('color');
            imgIllustrator.classList.toggle('active-img');
            break;
        case "touch":
            btnIllustrator.classList.toggle('color');
            imgIllustrator.classList.toggle('active-img');
            break;
        default:

    }
}