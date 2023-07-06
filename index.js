const heroSection = document.querySelector(".section-hero");

// creating  a portfolio tabbed component
const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
  const p_btn_clicked = e.target;

  p_btn.forEach((currElem) => currElem.classList.remove("p-btn-active"));

  p_btn_clicked.classList.add("p-btn-active");

  // get the btn number
  const btn_num = p_btn_clicked.dataset.btnNum;

  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  //sabhi images ko hidden karne par
  p_img_elem.forEach((currElem) =>
    currElem.classList.add("p-image-not-active")
  );

  //match number ki images dikha do
  img_active.forEach((currElem) =>
    currElem.classList.remove("p-image-not-active")
  );
});



// *******************create a Scorll button*********************

//for scroll bar k liye top ka reference lene par
// heroSection

// footer ka reference lene par
const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top">
</ion-icon>`;

footerElem.after(scrollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);

// navbar links ko active karne par
const portfolioSec = document.querySelector(".section-portfolio");

const contactSec = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
  e.preventDefault();
  portfolioSec.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
  e.preventDefault();
  contactSec.scrollIntoView({ behavior: "smooth" });
});


// creating a sticky responsive navbar
const observer = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    !ent.isIntersecting
      ? document.body.classList.add("sticky")
      : document.body.classList.remove("sticky");
  },
  {
    root: null,
    threshold: 0,
  }
);

observer.observe(heroSection);

// creating a responsive navbar
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener("click", () => {
  headerElem.classList.toggle("active");
});
