"use strict";

((doc) => {
  // ======== header ========
  const header = doc.querySelector(".header");

  // ======== button show ========
  const btnShowHeader = doc.querySelector(
    ".header__btn[aria-label='btn-open']"
  );
  btnShowHeader.addEventListener("click", showHeader);

  // ======== button hide ========
  const btnHideHeader = doc.querySelector(
    ".header__btn[aria-label='btn-close']"
  );
  btnHideHeader.addEventListener("click", hideHeader);

  // ======== navbar ========
  const navHeader = doc.querySelector(".header__nav");

  // ======== animation scroll call ========
  window.onscroll = function () {
    scrollTopHeader();
  };

  // ======== header controller ========
  let n = 1;
  function showHeader() {
    navHeader.style.display = "block";
    navHeader.classList.add("showHeaderAnimation");
    navHeader.classList.remove("hideHeaderAnimation");
  }
  function hideHeader() {
    navHeader.classList.add("hideHeaderAnimation");

    setTimeout(() => {
      navHeader.style.display = "none";
    }, 500);
  }

  // ======== display controller ========
  window.onresize = function () {
    if (window.innerWidth > 767) {
      navHeader.style.display = "block";
    }
  };

  // ======== animation scroll ========
  function scrollTopHeader() {
    if (
      document.body.scrollTop > 330 ||
      document.documentElement.scrollTop > 330
    ) {
      header.style.position = "fixed";
      header.classList.add("showHeader");
    } else {
      header.style.position = "relative";
      header.classList.remove("showHeader");
    }
  }
})(document);
