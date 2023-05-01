const text = document.querySelector(".text");
const showBtn = document.querySelector(".show-btn");
const hideBtn = document.querySelector(".hide-btn");
const toggleBtn = document.querySelector(".toggle-btn");

showBtn.addEventListener("click", function () {
  text.classList.remove("hidden");
});

hideBtn.addEventListener("click", function () {
  text.classList.add("hidden");
});

// универсальная кнопка

toggleBtn.addEventListener("click", function () {
  text.classList.toggle("hidden");

  text.classList.contains("hidden")
    ? (toggleBtn.textContent = "Show")
    : (toggleBtn.textContent = "Hide");
});
