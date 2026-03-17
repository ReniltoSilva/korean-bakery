const photoContainer = document.querySelectorAll(".photo-container");
const lightbox = document.querySelector("#lightbox");
const lightboxCloseButton = document
  .querySelector("#lightbox-close")
  .addEventListener("click", () => {
    lightbox.classList.add("hidden");
  });

const lightboxImg = document.querySelector("#lightbox-img");

photoContainer.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightbox.lastElementChild.attributes.src.value = item.attributes.src.value;
  });
});

// CONTINUE - FINISH SLIDE COMPONENT
// const backwardButton = document.querySelector(".backwardButton");
// const forwardButton = document.querySelector(".forwardButton");

// const slides = document.querySelectorAll(".slide");
// const slider = document.querySelector(".slider");
// // slider.style.transform = "scale(0.8)";

// let currentSlide = 0;
// const maxSlides = slides.length;

// forwardButton.addEventListener("click", () => {
//   if (currentSlide === maxSlides) {
//     currentSlide = 0;
//   } else {
//     currentSlide++;
//   }

//   slides.forEach((item, i) => {
//     item.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
//   });
// });

// backwardButton.addEventListener("click", () => {
//   if (currentSlide === maxSlides) {
//     currentSlide = 0;
//   } else {
//     currentSlide--;
//   }

//   slides.forEach((item, i) => {
//     item.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
//   });
// });

const leftButton = document.querySelector(".icon-arrow-left");
const rightButton = document.querySelector(".icon-arrow-right");
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;
const maxSlides = slides.length; // 4

// This function is the single source of truth for slide position.
// Run it once on load so slides start in the right place.
const goToSlide = function (slide) {
  slides.forEach((item, i) => {
    item.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0); // initialize positions

rightButton.addEventListener("click", () => {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0; // loop back to first
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
});

leftButton.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1; // jump to last
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
});

/*Automatic slides */
const autoSlide = () => {
  setInterval(() => {
    currentSlide++;

    if (currentSlide === maxSlides) {
      currentSlide = 0;
    }
    slides.forEach((item, i) => {
      item.style.transform = `translateX(${100 * (i - currentSlide)}%)`;
    });
  }, 10000);
};

autoSlide();
