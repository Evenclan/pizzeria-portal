import { select, classNames } from '../settings.js';

class Carousel {
  constructor() {
    const thisCarousel = this;
    this.slides = document.querySelectorAll(select.carousel.slider);
    this.circles = document.querySelectorAll(select.carousel.circle);
    this.currentSlide = 0;
    setInterval(() => this.nextSlide(thisCarousel), 3000);
  }

  nextSlide(thisCarousel) {
    // const thisCarousel = this;

    thisCarousel.slides[thisCarousel.currentSlide].classList.remove(
      classNames.slider.active
    );
    thisCarousel.circles[thisCarousel.currentSlide].classList.remove(
      classNames.circle.active
    );

    thisCarousel.currentSlide =
      (thisCarousel.currentSlide + 1) % thisCarousel.slides.length;
    // console.log(thisCarousel.currentSlide);
    // console.log('currentSlide', thisCarousel.currentSlide);

    thisCarousel.slides[thisCarousel.currentSlide].classList.add(
      classNames.slider.active
    );

    thisCarousel.circles[thisCarousel.currentSlide].classList.add(
      classNames.circle.active
    );
  }
}

export default Carousel;
