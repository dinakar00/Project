document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("navToggle");
  const navList = document.getElementById("navList");
  const yearEl = document.getElementById("year");


  navToggle?.addEventListener("click", () => {
    navList.classList.toggle("show");
  });


  document.querySelectorAll(".nav-list a").forEach((link) => {
    link.addEventListener("click", () => navList.classList.remove("show"));
  });


  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});


function handleContact(event) {
  event.preventDefault();

  const form = event.target;
  const msg = document.getElementById("formMsg");

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();


  if (!name || !email || !message) {
    msg.textContent = "Please complete all fields.";
    return;
  }


  msg.textContent =
    "Thanks — your message was sent (demo). Replace this with a real backend.";

  form.reset();
}


const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});


backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


