// This script just allows horizontal scroll on mouse wheel in project carousel
const carousel = document.querySelector('.project-carousel');

carousel.addEventListener('wheel', (evt) => {
  evt.preventDefault();
  carousel.scrollLeft += evt.deltaY;
});
