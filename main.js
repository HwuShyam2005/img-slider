const thumb = document.querySelectorAll('.thumb li');
const infoSlider = document.querySelectorAll('.info-slider');
const imgSlider = document.querySelectorAll('.img-slider');
const item = document.querySelectorAll('.items');

let index = 0;

thumb.forEach((thumb, ind) => {
    thumb.addEventListener('click', () => {

        index = ind;

        infoSlider.forEach(slide => {
            slide.style.transform = `translateY(${index * -100}%)`;
        });
        imgSlider.forEach(slide => {
            slide.style.transform = `translateX(${index * -100}%)`;
        });
    });
});








