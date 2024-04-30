// slider
// получение селекторов
const slider = document.querySelector('.karusel__slider');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');
const slides = Array.from(slider.querySelectorAll('img'));
const sliderCount = slides.length;
let sliderIndex = 0;

// устанавливаем обработчики событий к кнопкам
prevButton.addEventListener('click', showPreveusSlide);
nextButton.addEventListener('click', showNextSlide);
slides.style.transform = `translateX(${slideOffset}px)`;

// Функция для показа слайда
function showPreveusSlide() {
    sliderIndex = (sliderIndex - 1 + sliderCount)% sliderCount;
    updateSlider();
}

function showNextSlide() {
   sliderIndex = (sliderIndex + 1)% sliderCount;
   updateSlider(); 
}

// функция для обновления отображения
function updateSlider() {
    slides.forEach((slide, index) => {
        if (index === sliderIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    })
}

