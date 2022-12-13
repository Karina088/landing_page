'use strict';

document.querySelectorAll('.costumers__img')
    .forEach((el) =>
        el.addEventListener('click', (e) => {
            e.target.style.backgroundColor = '#5982E7';
        }));
