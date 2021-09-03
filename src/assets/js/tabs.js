"use strict";

((doc) => {
  let tabHeader = doc.getElementsByClassName("tabs__header")[0];
  let tabBody = doc.getElementsByClassName("tabs__body")[0];
  let tabsPane = tabHeader.getElementsByTagName("div");

  for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", () => {
      tabHeader.getElementsByClassName("active")[0].classList.remove("active");
      tabsPane[i].classList.add("active");
      tabBody.getElementsByClassName("active")[0].classList.remove("active");
      doc.getElementsByClassName("tabs__content")[i].classList.add("active");
    });
  }
})(document);
