// console.dir(document.querySelector('.c-marquee__text'))
"use strict";
(function () {
    function getBillboardWidth() {
      return document.querySelector(".c-marquee__text").offsetWidth;
    }
    function getWindowWidth() {
      return window.innerWidth;
    }
    // function setBillboardContent() {
    //     document.querySelector(".billboard h1").textContent = this.value;
    // }
    function startBillboard() {
      let billboard = document.querySelector(".c-marquee__text");
      let initLeft = getWindowWidth();
      let timer = setInterval(() => {
          if (initLeft < getBillboardWidth() * -1) {
              initLeft = getWindowWidth();
          }
          initLeft -= 1;
          billboard.style.left = initLeft + "px";
      }, 1);
    }
    // function setBillboardColor() {
    //     document.querySelector(".billboard h1").style.color = this.value;
    // }

    // document
    //     .getElementById("txt")
    //     .addEventListener("input", setBillboardContent);
    // document
    //     .getElementById("color")
    //     .addEventListener("input", setBillboardColor);

    startBillboard();
})();
