// HEADER ANIMÉ
const header = document.getElementById("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// SECTIONS AU SCROLL
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(function (element) {
    const position = element.getBoundingClientRect().top;
    const hauteurEcran = window.innerHeight;

    if (position < hauteurEcran - 100) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // pour afficher celles déjà visibles au chargement
