const toggle = document.querySelector(".menu-toggle");
const list = document.querySelector(".menu-list");

toggle.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  list.hidden = open;
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".menu")) {
    toggle.setAttribute("aria-expanded", "false");
    list.hidden = true;
  }
});

const gallery = document.querySelector(".gallery");
const step = () => gallery.querySelector(".project").offsetWidth + 24;

document.querySelector(".gallery-arrow.prev").addEventListener("click", () =>
  gallery.scrollBy({ left: -step(), behavior: "smooth" }));
document.querySelector(".gallery-arrow.next").addEventListener("click", () =>
  gallery.scrollBy({ left: step(), behavior: "smooth" }));
