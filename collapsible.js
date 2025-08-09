document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".collapsible");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      btn.classList.toggle("active");
      const content = btn.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
