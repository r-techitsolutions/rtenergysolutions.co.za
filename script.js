document.addEventListener("DOMContentLoaded", () => {
  const showEmailBtn = document.getElementById("showEmail");
  const email = document.getElementById("email");

  showEmailBtn.addEventListener("click", () => {
    email.classList.remove("hidden");
  });
});
