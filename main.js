const btnOn = document.getElementById("btn-on");
const screen = document.getElementById("iphone-screen");
const time = document.getElementById("time");

btnOn.addEventListener("click", function () {
  screen.classList.toggle("display-none");
});

let today = new Date();

let getTime = today.getHours() + ":" + today.getMinutes();
getTime = ("0" + getTime).slice(-5);

time.textContent = getTime;
