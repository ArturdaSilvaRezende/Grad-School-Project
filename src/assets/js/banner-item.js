"use strict";

((doc) => {
  const bannerData = {
    bannerItemTitle: [
      doc.querySelector(".banner__graduateItem[data-item='item-all-courses']"),
      doc.querySelector(
        ".banner__graduateItem[data-item='item-virtual-class']"
      ),
      doc.querySelector(".banner__graduateItem[data-item='item-real-meeting']"),
    ],
    graduateDesc: [
      doc.querySelector(".banner__graduateDesc[data-banner='all-courses']"),
      doc.querySelector(".banner__graduateDesc[data-banner='virtual-class']"),
      doc.querySelector(".banner__graduateDesc[data-banner='real-meeting']"),
    ],
  };
  const { bannerItemTitle, graduateDesc } = bannerData;

  for (let i = 0; i < bannerItemTitle.length && graduateDesc.length; i++) {
    //show itens
    bannerItemTitle[i].addEventListener("mouseenter", (e) => {
      graduateDesc[i].style.display = "block";
      graduateDesc[i].classList.add("bannerItemShow");
      graduateDesc[i].classList.remove("bannerItemHide");
    });

    //hide itens
    bannerItemTitle[i].addEventListener("mouseleave", () => {
      graduateDesc[i].classList.add("bannerItemHide");

      setTimeout(() => {
        graduateDesc[i].style.display = "none";
      }, 260);
    });
  }
})(document);
