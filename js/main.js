
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


document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".mobile-v2-menu-button");
  const menu = document.querySelector(".mobile-v2-menu");

  if (button && menu) {
    button.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      button.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        button.setAttribute("aria-expanded", "false");
      });
    });
  }
});
