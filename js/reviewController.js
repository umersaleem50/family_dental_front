export const moveSlide = (n) => {
  const reviews = document.querySelectorAll(".review");
  reviews.forEach((el, i) => {
    el.style.transform = `translateX(${(i + 1 - n) * 100}%)`;
  });
};

export const clearAllDots = (reviewButtons) => {
  document.querySelectorAll(".review__button").forEach((el) => {
    el.classList.remove("review__button--active");
  });
};

export const activeDot = (currentSlide) => {
  document
    .querySelectorAll(".review__button")
    [currentSlide - 1].classList.add("review__button--active");
  // reviewButton.classList.add("review__button--active");
};

export const createDots = (el, dotParent) => {
  console.log(el);
  dotParent.innerHTML = "";
  let dotsArr = [];

  el.forEach((_, i) =>
    dotsArr.push(`<div class="review__button" data-slide=${i + 1}></div>`)
  );

  dotParent.innerHTML = dotsArr.join(" ");
};
