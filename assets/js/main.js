/**=============================
 * WELCOME MESSAGE TYPEWRITER 
=============================*/
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("welcomeMessage").style.display = "none";
    document
      .querySelectorAll("body > :not(#welcomeMessage)")
      .forEach(function (element) {
        element.style.display = "block";
      });
  }, 7000);
});

/**=============================
 * NAVIGATION LINK ACTIVATOR 
=============================*/
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav__bar .link__item");
  const sections = document.querySelectorAll("section");

  function activateLink() {
    links.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  }

  links.forEach((link) => link.addEventListener("click", activateLink));

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

/**====================
 * MOUSE FOLLOWER
====================*/
document.addEventListener("mousemove", (event) => {
  const follower = document.querySelector(".mouse span");
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  follower.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
});

/**===============
 * THEME TOGGLE
===============*/
const themeIcon = document.querySelector(".theme__icon");

themeIcon.addEventListener("click", () => {
  document.body.classList.toggle("dark__mode");
  themeIcon.classList.toggle("sun");

  localStorage.setItem("saved-icon", getCurrentIcon());
  localStorage.setItem("saved-theme", getCurrentTheme());
});

const getCurrentTheme = () =>
  document.body.classList.contains("dark__mode") ? "dark" : "light";
const getCurrentIcon = () =>
  themeIcon.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme");
const savedIcon = localStorage.getItem("saved-icon");

if (savedTheme) {
  document.body.classList[savedTheme === "dark" ? "add" : "remove"](
    "dark__mode"
  );
  themeIcon.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

/**====================
 * PORTFOLIO MODEL 
====================*/
const cardDescription = document.querySelectorAll(".card__description");
const readMoreBtns = document.querySelectorAll(".card__btn");
const cardsCloseBtns = document.querySelectorAll(
  ".card__description__close__btn"
);

var cards = function (modalClick) {
  cardDescription[modalClick].classList.add("active");
};

readMoreBtns.forEach((readMoreBtn, i) => {
  readMoreBtn.addEventListener("click", () => {
    cards(i);
  });
});

cardsCloseBtns.forEach((cardsCloseBtn) => {
  cardsCloseBtn.addEventListener("click", () => {
    cardDescription.forEach((showCardDescription) => {
      showCardDescription.classList.remove("active");
    });
  });
});

/**===========================
 * SCROLL REVEAL ANIMATION 
===========================*/
const reveal = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("reveal__items");
    } else {
      entry.target.classList.remove("reveal__items");
    }
  });
});

const revealTop = document.querySelectorAll(".reveal__top");
revealTop.forEach((element) => reveal.observe(element));

const revealBottom = document.querySelectorAll(".reveal__bottom");
revealBottom.forEach((element) => reveal.observe(element));

const revealLeft = document.querySelectorAll(".reveal__left");
revealLeft.forEach((element) => reveal.observe(element));

const revealRotate = document.querySelectorAll(".reveal__rotate");
revealRotate.forEach((element) => reveal.observe(element));

const revealScale = document.querySelectorAll(".reveal__scale");
revealScale.forEach((element) => reveal.observe(element));
