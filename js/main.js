
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".mobile-menu-button");
  const nav = document.querySelector(".subnav");
  if (btn && nav) {
    btn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }
});
