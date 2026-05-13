const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});

document.querySelector(".primary-button")?.addEventListener("click", () => {
  const title = window.prompt("Announcement title");

  if (!title) {
    return;
  }

  const list = document.querySelector(".announcement-list");
  const item = document.createElement("article");
  item.className = "announcement";
  item.innerHTML = `
    <div class="date-badge">
      <span>${new Date().getDate()}</span>
      <small>${new Date().toLocaleString("en", { month: "short" })}</small>
    </div>
    <div>
      <h3></h3>
      <p>Draft update added locally for prototype review.</p>
      <div class="tags">
        <span>Draft</span>
        <span>Prototype</span>
      </div>
    </div>
  `;

  item.querySelector("h3").textContent = title;
  list?.prepend(item);
});
