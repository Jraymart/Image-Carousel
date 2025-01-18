export default class Carousel {
  constructor(carouselSelector, dotSelector) {
    this.carousel = document.querySelector(carouselSelector);
    this.carouselDots = document.querySelector(dotSelector);
    this.slides = this.carousel.querySelectorAll(".slides");
    this.dots = this.carouselDots.querySelectorAll(".dot");
    this.previousButton = this.carousel.querySelector(".previous");
    this.nextButton = this.carousel.querySelector(".next");

    this.slideIndex = 1;
    this.init();
    this.addEventListeners();
  }

  addEventListeners() {
    this.previousButton.addEventListener("click", () => {
      this.plusSlides(-1);
    });

    this.nextButton.addEventListener("click", () => {
      this.plusSlides(1);
    });

    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.currentSlide(index + 1);
      });
    });
  }

  plusSlides(n) {
    this.slideIndex += n;
    if (this.slideIndex > this.slides.length) {
      this.slideIndex = 1;
    }
    if (this.slideIndex < 1) {
      this.slideIndex = this.slides.length;
    }
    this.showSlides(this.slideIndex);
  }

  currentSlide(n) {
    this.slideIndex = n;
    this.showSlides(this.slideIndex);
  }

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }

    this.slides.forEach((slide) => (slide.style.display = "none"));

    if (this.dots.length >= this.slideIndex) {
      this.dots.forEach((dot) => dot.classList.remove("active"));
      this.dots[this.slideIndex - 1].classList.add("active");
    }

    this.slides[this.slideIndex - 1].style.display = "block";
  }

  init() {
    this.showSlides(this.slideIndex);
  }
}
