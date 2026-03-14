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
    // console.log(item.attributes.src.value);

    lightbox.classList.remove("hidden");
    lightbox.lastElementChild.attributes.src.value = item.attributes.src.value;
  });
});
