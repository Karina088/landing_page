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

const custLogo = document.querySelectorAll('div.costumers-logo>img');
custLogo.forEach((el) => {
    el.classList.add('costumers__img');
    document.querySelectorAll('.costumers__img')
        .forEach((el) =>
            el.addEventListener('click', (e) => {
                e.target.style.backgroundColor = '#5982E7';
                console.log(e.target);
            }));
});


// document.querySelectorAll('form')
//     .forEach(el => el.addEventListener('click', (event) => event.preventDefault()));

document.querySelector('.illustration__form').addEventListener('click', (event) => event.preventDefault());


const btnIllustrator = document.querySelector('.illustration__btn');
const imgIllustrator = document.querySelector('.illustration__img');

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


// прокрутка по ссылкам
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}
const link = document.querySelector('.link-features');
const featuresClass = document.querySelector('.features');
const linkBlog = document.querySelector('.link-blog');
const blogEl = document.querySelector('.blog');

link.addEventListener('pointerover', () => {
    scrollTo(featuresClass);
});
linkBlog.addEventListener('pointerover', () => {
    scrollTo(blogEl);
});

// слайд с картинками в блоке blog>figure
let theNum = "0";

const arr = ['1', '5', '4', '7'];
const arr2 = ['3', '8', '6', '8'];

function arrowRight() {
    theNum++;

    if (theNum == arr.length && arr2.length) {
        theNum = "0";
    }
    change_image.src = 'img/blog/' + arr[theNum] + '.jpg';
    change_image_3.src = 'img/blog/' + arr2[theNum] + '.jpg';
}

function arrowLeft() {
    theNum--;
    if (theNum == "-1") {
        theNum = arr.length - 1 && (theNum = arr2.length - 1);
    } console.log(theNum);

    change_image.src = 'img/blog/' + arr[theNum] + '.jpg';
    change_image_3.src = 'img/blog/' + arr2[theNum] + '.jpg';
}

// проверяла на соотвествие размеров с макетом
const features = document.querySelector('.features');
console.log(features.offsetHeight);
console.log(features.offsetWidth);
