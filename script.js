// Small interaction: navbar shadow on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  nav.style.boxShadow = window.scrollY > 20 
    ? "0 4px 20px rgba(0,0,0,0.5)" 
    : "none";
});
