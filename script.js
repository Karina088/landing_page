'use strict';

const headerBtn = document.querySelector('.header__btn');
headerBtn.addEventListener('pointerover', (e) => {
    e.target.style.cssText = `color: #3A79FF;
    background-color: #D2E1FF;`
});
headerBtn.addEventListener('pointerout', (e) => {
    e.target.style.cssText = `color: #697CA6;
    background-color: #D6DAE5;` });


const contentBtn = document.querySelector('.content__btn');
contentBtn.addEventListener('pointerover', () => {
    contentBtn.classList.toggle('animation-content__btn');
});


document.querySelectorAll('.costumers__img')
    .forEach((el) =>
        el.addEventListener('click', (e) => {
            e.target.style.backgroundColor = '#5982E7';
        }));


document.querySelectorAll('form')
    .forEach(el => el.addEventListener('click', (event) => event.preventDefault()));

const btnIllustrator = document.querySelector('.illustration__btn');
const imgIllustrator = document.querySelector('.illustration__img');
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

// проверяла на соотвествие h с макетом
// const costumers = document.querySelector('.costumers');
// console.log(costumers.offsetHeight);