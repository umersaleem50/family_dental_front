const naviHeight = document
  .querySelector(".navi")
  .getBoundingClientRect().height;
let options = {
  root: null,
  threshold: 0,
  rootMargin: `-${naviHeight}px`,
};

const toggleNavi = (entries) => {
  //   document.querySelector(".navi").classList.add("navi--fixed");

  if (!entries[0].isIntersecting) {
    document.querySelector(".navi").classList.add("navi--fixed");
    document.querySelector(".btn--cta").classList.add(".btn--cta--fixed");
  } else {
    document.querySelector(".navi").classList.remove("navi--fixed");
  }
};

export const intersector = new IntersectionObserver(toggleNavi, options);
