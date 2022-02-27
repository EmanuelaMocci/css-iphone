const btnOn = document.getElementById("btn-on");
const screen = document.getElementById("iphone-screen");
const time = document.getElementById("time");
const bg = document.getElementById("background-default");
const btn1 = document.getElementById("background1");
const btn2 = document.getElementById("background2");

btnOn.addEventListener("click", function () {
  screen.classList.toggle("display-none");
});

// set real time
const date = Date().slice(16, 21);

time.textContent = date;

// background
btn1.addEventListener("click", function () {
  screen.classList.add("background1");
  screen.classList.remove("background2");
});
btn2.addEventListener("click", function () {
  screen.classList.add("background2");
  screen.classList.remove("background1");
});
bg.addEventListener("click", function () {
  screen.classList.remove("background1");
  screen.classList.remove("background2");
});
