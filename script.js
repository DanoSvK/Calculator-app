const switcher = document.querySelector("#theme-switch");
const header = document.querySelector("header");
const mainInput = document.querySelector(".main__input");
const equals = document.querySelector(".equals");
const grid = document.querySelector(".main__grid");

// Theme color switcher
document.documentElement.setAttribute("data-theme", "theme-1");
switcher.addEventListener("input", function () {
  if (switcher.value == 1) {
    document.documentElement.setAttribute("data-theme", "theme-1");
    document.body.style.color = "#ffffff";
    mainInput.style.color = "#ffffff";
  } else if (switcher.value == 2) {
    document.documentElement.setAttribute("data-theme", "theme-2");
    document.body.style.color = "#36362C";
    mainInput.style.color = "#36362C";
  } else if (switcher.value == 3) {
    document.documentElement.setAttribute("data-theme", "theme-3");
    document.body.style.color = "#FFE53D";
    mainInput.style.color = "#FFE53D";
    equals.style.color = "#FFE53D";
  }
});

grid.addEventListener("click", function (e) {
  const target = e.target.matches(".key");
  if (!target) return;
  if (e.target.textContent !== "del" && e.target.textContent !== "reset")
    mainInput.textContent += e.target.textContent;
});

function add(num1, num2) {
  return num1 + num2;
}
