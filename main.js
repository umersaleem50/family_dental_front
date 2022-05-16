import { moveSlide } from "./js/reviewController";
// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `

const reviews = document.querySelectorAll(".review");
const btnReviewLeft = document.querySelector(".review__control--left");
const btnReviewRight = document.querySelector(".review__control--right");
let currentSlide = 1;

btnReviewLeft.addEventListener("click", (e) => {
  // e.preventDefault();
  if (currentSlide <= 1) {
    currentSlide = reviews.length;
  } else {
    currentSlide -= 1;
  }
  moveSlide(currentSlide);
});

btnReviewRight.addEventListener("click", (e) => {
  if (currentSlide < reviews.length) {
    currentSlide += 1;
  } else {
    currentSlide = 1;
  }
  moveSlide(currentSlide);
});
console.log(reviews);

document.addEventListener("DOMContentLoaded", function () {
  //dom is fully loaded, but maybe waiting on images & css files
  console.log("loaded");
  console.log(reviews);
  moveSlide(currentSlide);
});
