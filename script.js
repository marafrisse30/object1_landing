const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const modal = document.getElementById("leadModal");
const openFormButtons = document.querySelectorAll(".open-form");
const closeFormButtons = document.querySelectorAll(".close-form");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

openFormButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

closeFormButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.remove("active");
    document.body.style.overflow = "";
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("active");
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const imgSrc = item.getAttribute("data-img");
    lightboxImg.src = imgSrc;
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
  document.body.style.overflow = "";
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }
});

const leadForm = document.querySelector(".lead-form");

leadForm.addEventListener("submit", (event) => {
  event.preventDefault();

  alert("Thank you. Your request has been submitted.");

  modal.classList.remove("active");
  document.body.style.overflow = "";
  leadForm.reset();
});

const siteHeader = document.querySelector(".site-header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    siteHeader.classList.add("scrolled");
  } else {
    siteHeader.classList.remove("scrolled");
  }
});