import {
  moveSlide,
  createDots,
  clearAllDots,
  activeDot,
} from "./js/reviewController";
import { displayMap } from "./js/map";

const reviews = document.querySelectorAll(".review");
const btnReviewLeft = document.querySelector(".review__control--left");
const btnReviewRight = document.querySelector(".review__control--right");
const dotParent = document.querySelector(".review__buttons");
let reviewButtonArr;
let interval;

let currentSlide = 1;

const cleanAndSlide = (currentSlide) => {
  moveSlide(currentSlide);
  clearAllDots();
  activeDot(currentSlide);
};

const setnewInterval = () => {
  return setInterval(() => {
    moveSlideRight();
  }, 5000);
};

const resetInterval = () => {
  clearInterval(interval);
  interval = setnewInterval();
};

export const moveSlideRight = () => {
  if (currentSlide < reviews.length) {
    currentSlide += 1;
  } else {
    currentSlide = 1;
  }
  cleanAndSlide(currentSlide);
};

export const moveSlideLeft = () => {
  if (currentSlide <= 1) {
    currentSlide = reviews.length;
  } else {
    currentSlide -= 1;
  }
  cleanAndSlide(currentSlide);
};

btnReviewLeft.addEventListener("click", (e) => {
  moveSlideLeft();
  resetInterval();
});

btnReviewRight.addEventListener("click", (e) => {
  moveSlideRight();
  resetInterval();
});

dotParent.addEventListener("click", function (e) {
  if (e.target.classList.contains("review__button")) {
    currentSlide = e.target.dataset["slide"] * 1;
    cleanAndSlide(currentSlide);
    resetInterval();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  //dom is fully loaded, but maybe waiting on images & css files
  // console.log("loaded");
  // console.log(reviews);
  createDots(reviews, dotParent);
  moveSlide(currentSlide);
  clearAllDots();
  activeDot(currentSlide);

  interval = setnewInterval();

  displayMap();
});
