"use strict";

((doc) => {
  const dropdownLink = doc.querySelector(".dropdown> .dropdown__link");
  const dropdownUl = doc.querySelector(".dropdown__ul");

  dropdownLink.addEventListener("click", controlDropdown);

  let n = 1;
  function controlDropdown(e) {
    if (n == 1) {
      dropdownUl.style.display = "block";
      dropdownUl.classList.add("dropdownShow");
      dropdownUl.classList.remove("dropdownHide");
      e.preventDefault();
      return (n = 0);
    } else {
      dropdownUl.classList.add("dropdownHide");
      setTimeout(() => {
        dropdownUl.style.display = "none";
      }, 300);
      e.preventDefault();
      return (n = 1);
    }
  }
})(document);
