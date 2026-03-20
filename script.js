/* NAVBAR INTERSECTIONOBSERVER */
const navbar = document.querySelector(".navbar");
const hero = document.querySelector(".hero");
const aboutus = document.querySelector("#aboutus");

const obsCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      navbar.classList.add("observer");
    } else if (entry.isIntersecting) {
      navbar.classList.remove("observer");
    }
  });
};

const obsOptions = {
  root: null, // defaults to the browser viewport
  rootMargin: "0px",
  threshold: 0,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(hero);

/* GALLERY PHOTO OVERLAY */
const gallerySection = document.querySelector("#gallery");
const photoContainer = document.querySelectorAll(".photo-container");
const lightbox = document.querySelector("#lightbox");
const lightboxCloseButton = document
  .querySelector("#lightbox-close")
  .addEventListener("click", () => {
    lightbox.classList.add("hidden");
    document.body.classList.remove("no-scroll");
  });

const lightboxImg = document.querySelector("#lightbox-img");

photoContainer.forEach((item) => {
  item.addEventListener("click", () => {
    document.body.classList.add("no-scroll");

    lightbox.classList.remove("hidden");
    lightbox.lastElementChild.attributes.src.value = item.attributes.src.value;
    lightbox.lastElementChild.attributes.alt.value = item.attributes.alt.value;
  });
});

/* SLIDES FROM REVIEWS SECTION */
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
    currentSlide = 0;
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

/* CONTACT US */
const nameInput = document.querySelector("#name");
const phone = document.querySelector("#phone");
const textarea = document.querySelector(".textarea");
const sendBtn = document
  .querySelector(".btn-send")
  .addEventListener("click", (e) => {
    e.preventDefault();
    console.log(nameInput.value);
    console.log(phone.value);
    console.log(textarea.value);

    nameInput.value = "";
    phone.value = "";
    textarea.value = "";
  });

/* FOOTER */
const currentYear = document.querySelector(".currentYear");

const updateYear = () => {
  const yearNow = new Date().getFullYear();
  currentYear.innerText = yearNow;
};

updateYear();
