export const moveSlide = (n) => {
  const reviews = document.querySelectorAll(".review");
  reviews.forEach((el, i) => {
    el.style.transform = `translateX(${(i + 1 - n) * 100}%)`;
    console.log(el.style.transfrom);
  });
};
