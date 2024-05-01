// calc-cards-slider -------------------------------------------------------------

const calcSlider = document.querySelector('.container-calc__cards');
const prevBtn = document.querySelector('button');
const calcSlides = Array.from(calcSlider.querySelectorAll('.calculator'));
const calcSliderCount = calcSlides.length;
let calcSliderIndex = 0;

// обработчики событий к кнопке

prevBtn.addEventListener('click', showPrevBtn);

// Функция для показа карточки с опросом

function showPrevBtn() {
    calcSliderIndex = (calcSliderIndex +1 + calcSliderCount  ) % calcSliderCount;
    calcUpdateSlider();
}

// функция для обновления отображения

function calcUpdateSlider() {
    calcSlides.forEach((slide, index) => {
        if (index === calcSliderIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}




