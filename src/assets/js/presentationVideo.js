"use strict";

((doc) => {
  const aboutArea = doc.querySelector(".about-video__video");
  const showVideo = doc.querySelector(".showVideo");
  const closeVideo = doc.querySelector(".closeVideo");

  showVideo.addEventListener("click", showArea);
  closeVideo.addEventListener("click", closeArea);

  function showArea() {
    aboutArea.style.display = "block";
    aboutArea.classList.add("lightSpeedIn");
    aboutArea.classList.remove("lightSpeedOut");
  }

  function closeArea() {
    aboutArea.classList.remove("lightSpeedIn");
    aboutArea.classList.add("lightSpeedOut");
    setTimeout(() => {
      aboutArea.style.display = "none";
    }, 500);
  }
})(document);
