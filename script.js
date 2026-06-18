//  const swiper = new Swiper('.brands',{
//     direction: 'horizontal',
//      slidesPerView: 'auto',
//    loop: true,
//    pagination: {
//      el:'.swiper-pagination',
//     clickable: true,
//   },
//     breakpoints: {
//      770: {
//     enabled: false,
//     }
//      }

//    });

var swiper1 = new Swiper('.swiper1', {
    pagination: {
        el: '.swiper-pagination1', 
        clickable: true,
    },
});

var swiper2 = new Swiper('.swiper2', {
    pagination: {
        el: '.swiper-pagination2', 
        clickable: true,
    },
});
var swiper3 = new Swiper('.swiper3', {
    pagination: {
        el: '.swiper-pagination3', 
        clickable: true,
    },
});




 

document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.show-hidden');

    buttons.forEach(function (button) {

        const arrow = button.querySelector('.expand');
        const textSpan = button.querySelector('.hiddens');

        button.addEventListener('click', function () {

            const section = button.closest('section');

            const hiddenBlock = section.querySelector('.hidden-brands');

            const isHidden = hiddenBlock.classList.toggle('hidden');

            if (isHidden) {

                textSpan.textContent = 'Показать все';
                arrow.style.transform = 'rotate(0deg)';

            } else {

                textSpan.textContent = 'Скрыть';
                arrow.style.transform = 'rotate(180deg)';

            }

        });

    });

});

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burgerbutton');
    const sidebar = document.querySelector('#sidebar');
    const crossButton = sidebar.querySelector('#cross');

    burgerButton.addEventListener('click', function () {
        sidebar.classList.add('active');
    });

    crossButton.addEventListener('click', function () {
        sidebar.classList.remove('active');
    });
});






