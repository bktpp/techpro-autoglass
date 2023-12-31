"strict mode";

const hamBtn = document.querySelector(".ham__icon-btn");

const hamContainer = document.querySelector(".ham");
const menu = document.querySelector(".slideout");
const menuLinks = document.querySelectorAll(".slideout__item");

const handleMenu = () => {
   hamBtn.classList.toggle("toggle");
   menu.classList.toggle("show");
};

hamContainer.addEventListener("click", handleMenu);

menuLinks.forEach((link) => link.addEventListener("click", handleMenu));

// Section reveal

const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
   const [entry] = entries;

   if (!entry.isIntersecting) return;
   entry.target.classList.remove("section--hidden");
   observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
   root: null,
   threshold: 0.25,
});

allSections.forEach(function (section) {
   sectionObserver.observe(section);
   section.classList.add("section--hidden");
});

/*---------Email.js Form------------*/
