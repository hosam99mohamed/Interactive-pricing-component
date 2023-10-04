let duration = document.querySelector(".money .month");
let duration2 = document.querySelector(".money2 .month");
let Views = document.querySelector(".title span");
let cost = document.querySelector(".money .dollar");
let cost2 = document.querySelector(".money2 .dollar");
let slider = document.querySelector(".myrange");
let toggle = document.querySelector("#Billing");
let pageViews = ["10k", "50k", "100k", "500k", "1M"];
let perMonth = [8, 12, 16, 24, 36];
let isYearly = false;

slider.addEventListener("input", function () {
  updatePrice();
  Views.innerHTML = pageViews[slider.value];

  let value = this.value * 25;
  this.style.background = `linear-gradient(
    to right,
    hsl(174, 77%, 80%) 0%,
    hsl(174, 77%, 80%) ${value}%,
    hsl(224, 65%, 95%) 0%,
    hsl(224, 65%, 95%) 100%
  )`;
});

toggle.addEventListener("change", function () {
  if (isYearly == false) {
    isYearly = true;
    duration.innerHTML = "year";
    duration2.innerHTML = "year";
  } else {
    isYearly = false;
    duration.innerHTML = "month";
    duration2.innerHTML = "month";
  }
  updatePrice();
});

function updatePrice() {
  if (isYearly) {
    cost.innerHTML = "$" + perMonth[slider.value] * 0.75 + ".00";
    cost2.innerHTML = "$" + perMonth[slider.value] * 0.75 + ".00";
  } else {
    cost.innerHTML = "$" + perMonth[slider.value] + ".00";
    cost2.innerHTML = "$" + perMonth[slider.value] + ".00";
  }
}
