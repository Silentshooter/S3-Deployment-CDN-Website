// ===============================
// MOBILE MENU
// ===============================

const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {

  const isOpen = nav.classList.toggle("active");

  menu.setAttribute("aria-expanded", isOpen);

  menu.textContent = isOpen ? "×" : "☰";

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

    menu.setAttribute("aria-expanded", "false");

    menu.textContent = "☰";

  });

});


// ===============================
// HERO BUTTON
// ===============================

function scrollToSection() {

  document
    .getElementById("services")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealItems =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(

    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          observer.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealItems.forEach(item => {

  observer.observe(item);

});


// ===============================
// CONTACT FORM
// ===============================

const form =
  document.getElementById("contactForm");


form.addEventListener("submit", (event) => {

  event.preventDefault();

  const button =
    form.querySelector("button");

  const originalText =
    button.innerHTML;


  button.innerHTML =
    "Message Sent ✓";

  button.style.background =
    "#55c98a";


  setTimeout(() => {

    form.reset();

    button.innerHTML =
      originalText;

    button.style.background =
      "";

  }, 2200);

});
