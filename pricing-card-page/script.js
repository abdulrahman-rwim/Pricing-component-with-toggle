const toggleBtn = document.querySelector(".toggle-switch");

let monthlyPrices = [19, 99];
let annualPrices = [190, 990];

function activateToggle() {
  toggleBtn.classList.toggle("active");

  if (toggleBtn.classList.contains("active")) {
    document
      .querySelectorAll(".pricing-card__price")
      .forEach((price, index) => {
        price.textContent = `$${annualPrices[index]}`;
      });
  } else {
    document
      .querySelectorAll(".pricing-card__price")
      .forEach((price, index) => {
        price.textContent = `$${monthlyPrices[index]}`;
      });
  }
}
toggleBtn.addEventListener("click", activateToggle);
