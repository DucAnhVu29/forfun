const scrollEl = document.documentElement;
const root = document.documentElement;

let scrollPos;

function animation() {
  if (scrollPos !== scrollEl.scrollTop) {
    scrollPos = scrollEl.scrollTop;
    root.style.setProperty("--scrollPos", scrollPos + "px");
  }
  window.requestAnimationFrame(animation);
}

window.requestAnimationFrame(animation);

container = document.getElementById("container");
welcome = document.getElementById("welcome");

const myScrollFunc = function () {
  const y = window.scrollY;
  if (y < 100) {
    container.className = "container hide";
    welcome.className = "welcome";
  } else if (y > 100 && y < 200) {
    container.className = "container hide";
    welcome.className = "welcome1";
  } else if (y > 200 && y < 300) {
    welcome.className = "welcome2";
    container.className = "container1";
  } else if (y > 300 && y < 400) {
    welcome.className = "welcome3";
    container.className = "container1";
  } else if (y >= 400) {
    container.className = "container";
  } else {
    container.className = "container hide";
  }
};

window.addEventListener("scroll", myScrollFunc);

const DaysUI = document.getElementById("days");
const HoursUI = document.getElementById("hours");
const MinutesUI = document.getElementById("minutes");
const SecondsUI = document.getElementById("seconds");

const TotalDaysUI = document.getElementById("totalDays");
const TotalHoursUI = document.getElementById("totalHours");
const TotalMinutesUI = document.getElementById("totalMinutes");
const TotalSecondsUI = document.getElementById("totalSeconds");

function ChosenDate(date) {
  this.date = new Date(date);
}

let newYearDate = new ChosenDate("1 1 2022");

function countdown() {
  const newYearsDate = newYearDate.date;
  const currentDate = new Date();

  const totalSecond = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSecond / 3600 / 24);
  const hours = Math.floor(totalSecond / 3600) % 24;
  const minutes = Math.floor(totalSecond / 60) % 60;
  const seconds = Math.floor(totalSecond) % 60;

  const totalDays = Math.floor(totalSecond / 3600 / 24);
  const totalHours = Math.floor(totalSecond / 3600);
  const totalMinutes = Math.floor(totalSecond / 60);

  DaysUI.innerHTML = formatTime(days);
  HoursUI.innerHTML = formatTime(hours);
  MinutesUI.innerHTML = formatTime(minutes);
  SecondsUI.innerHTML = formatTime(seconds);

  TotalDaysUI.innerHTML = formatTime(totalDays);
  TotalHoursUI.innerHTML = formatTime(totalHours);
  TotalMinutesUI.innerHTML = formatTime(totalMinutes);
  TotalSecondsUI.innerHTML = formatTime(Math.floor(totalSecond));
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);

//

document.querySelector(".menu-icon").addEventListener("click", (event) => {
  const menuWrapper = document.querySelector(".menu-wrapper");
  if (menuWrapper.classList.contains("nav-active")) {
    menuWrapper.className = "menu-wrapper";
  } else {
    menuWrapper.className = "menu-wrapper nav-active";
  }
});
