"use strict";

((doc) => {
  let countDownDate = new Date("Jan 30, 2023 15:59:25").getTime();

  const idDay = doc.querySelector("#day");
  const idHour = doc.querySelector("#hour");
  const idMinute = doc.querySelector("#minute");
  const idSecond = doc.querySelector("#second");

  let x = setInterval(() => {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    idDay.innerHTML = days;
    idHour.innerHTML = hours;
    idMinute.innerHTML = minutes;
    idSecond.innerHTML = seconds;
  }, 1000);
})(document);
