var $grid = $(".features").isotope({
  // options
});
// filter items on button click
$(".buttons").on("click", "a", function () {
  var filterValue = $(this).attr("data-filter");
  $grid.isotope({ filter: filterValue });
});
// ====================================================
//add active class to button filter in feature section
// =======================================================
const buttons = document.querySelectorAll(".buttons a");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    removeActiveClass();
    button.classList.add("active");
  });
});
function removeActiveClass() {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
}
// ====================================================
//slider -----------😥😥😥😥😥😛😛😛😌-------------
// =======================================================
//slider ---image
var showed_box = 0;

function next() {
  showed_box += -40;

  if (showed_box < -80) showed_box = -80;
  document.querySelector(".slider__img-container").style.transform =
    "translateY(" + showed_box + "vw)";
}

function prev() {
  showed_box += 40;

  if (showed_box > 0) showed_box = 0;
  document.querySelector(".slider__img-container").style.transform =
    "translateY(" + showed_box + "vw)";
}

// slider text
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i = 0;
  var slides = document.querySelectorAll(".slider__text");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[slideIndex - 1].classList.add("active");
}
// ====================================================
//Modal open close
// ====================================================
const bodyContent = document.querySelector(".body-content");
const modalEmail = document.querySelector(".modal-email");
const modalVerification = document.querySelector(".modal-verification");
console.log(bodyContent, modalEmail);
function openModal() {
  bodyContent.classList.add("active");
  modalEmail.classList.add("active");
}
function closeModal() {
  modalEmail.classList.remove("active");
  bodyContent.classList.remove("active");
  modalVerification.classList.remove("active");
}
function openVerification() {
  modalEmail.classList.remove("active");
  bodyContent.classList.remove("active");
  setTimeout(() => {
    bodyContent.classList.add("active");
    modalVerification.classList.add("active");
  }, 1000);
}
function closeVerification() {
  modalVerification.classList.remove("active");
}

// ====================================================
//slider icon
// ====================================================
let slideNumber = 0;
const slideLeftIcon = document.querySelector(".slider__controls a:first-child");
const slideRightIcon = document.querySelector(".slider__controls a:last-child");
function increaseSlideNumber() {
  slideNumber++;
  if (slideNumber == 1) slideLeftIcon.classList.add("reverse");
  else if (slideNumber === 2) {
    slideLeftIcon.classList.add("hide");
    slideLeftIcon.classList.remove("reverse");
    slideRightIcon.classList.add("reverse");
  }
}
