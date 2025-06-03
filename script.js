function scrollToCards() {
  const section = document.getElementById("cards-section");
  section.scrollIntoView({ behavior: "smooth" });
}

function toggleDetails(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}

function toggleSub(id) {
  const el = document.getElementById(id);
  el.classList.toggle("hidden");
}
