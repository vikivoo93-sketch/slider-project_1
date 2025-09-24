const slider = document.querySelector(".slider");
const after = document.querySelector(".after");

slider.addEventListener("input", (e) => {
  const value = e.target.value;
  after.style.width = `${value}%`;
});
