const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".navbar a");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");

  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");

    const icon = menuBtn.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

// Highlight the navigation item for the current section.
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  sections.forEach(section => {
    const top = section.offsetTop - 150;
    const bottom = top + section.offsetHeight;
    const id = section.getAttribute("id");
    const link = document.querySelector(`.navbar a[href="#${id}"]`);

    if (scrollY >= top && scrollY < bottom) {
      navLinks.forEach(item => item.classList.remove("active"));
      if (link) link.classList.add("active");
    }
  });
});

// Simple typing effect.
const typing = document.querySelector(".typing");
const words = ["IT Student", "Programmer", "Future IT Professional"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const word = words[wordIndex];

  if (!deleting) {
    typing.textContent = word.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === word.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typing.textContent = word.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();

// Message form demo.
document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formMessage = document.getElementById("formMessage");
  formMessage.textContent = "Thank you! Your message has been received.";
  event.target.reset();
  setTimeout(() => { formMessage.textContent = ""; }, 5000);
});

// Current year.
document.getElementById("year").textContent = new Date().getFullYear();
