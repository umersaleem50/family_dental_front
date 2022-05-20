const parentEl = document.querySelector(".navi__links");

const clearAllLinks = () => {
  document
    .querySelectorAll(".navi__link")
    .forEach((el) => el.classList.remove("navi__link--active"));
};

const setActiveLink = (e) => {
  e.target.classList.add("navi__link--active");
};

export const activateNavLinks = () => {
  parentEl.addEventListener("click", (e) => {
    const classes = e.target.classList;
    if ([...classes].includes("navi__link")) {
      console.log(e, "clicked");

      const elName = e.target.innerHTML;

      const elTop = document.querySelector(`.section--${elName.toLowerCase()}`);

      elTop.scrollIntoView({ behavior: "smooth" });

      clearAllLinks();
      setActiveLink(e);
    }
  });
};

export const makeAnAppointScroll = () => {
  document.querySelector(".btn--cta").addEventListener("click", () => {
    document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
  });
};
