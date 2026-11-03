window.DaylightNavigation = (() => {
function initializeNavigation(onNavigate) {
  document.addEventListener("click", event => {
    const trigger = event.target.closest("[data-page], [data-action='new-entry']");
    if (!trigger) return;
    event.preventDefault();
    if (trigger.dataset.action === "new-entry") {
      onNavigate("editor", { date: null });
      return;
    }
    const page = trigger.dataset.page;
    if (page) onNavigate(page);
  });
}

function setActiveNavigation(page) {
  document.querySelectorAll(".main-nav [data-page]").forEach(button => {
    const active = button.dataset.page === page ||
      (page === "editor" && button.dataset.page === "journals") ||
      (page === "detail" && button.dataset.page === "journals");
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(section => {
    const active = section.id === `page-${page}`;
    section.classList.toggle("active", active);
    section.setAttribute("aria-hidden", String(!active));
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}
return { initializeNavigation, setActiveNavigation, showPage };
})();
