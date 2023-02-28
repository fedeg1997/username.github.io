const div = document.querySelector("div");

document.querySelector(".hide").addEventListener("click", () => {
  div.classList.add("div_hide");
});

document.querySelector(".show").addEventListener("click", () => {
  div.classList.remove("div_hide");
});
