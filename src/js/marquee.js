// const a = document.querySelector(".c-marquee__text");
// console.dir(a)

"use strict";
(function () {

    function getBillboardWidth() {
      //- 抓取 .c-marquee__text 的寬度
      return document.querySelector(".c-marquee__text").offsetWidth;
    }

    function getWindowWidth() {
      //- 抓取 視窗寬度
      return window.innerWidth;
    }

    //- 跑馬燈顯示列表
    const MarqueeList = [
      '「你會記得你吃過多少片麵包嗎」-- 迪奧·布蘭度',
      '「我從書上抬起眼，已毫無陌生之感，一切都偉大」 -- Rilke, Ｒ. M.',
      '「讀未見書如晤良友，讀己見書如逢故人。」 -- 陳繼儒'
    ]
    
    function startBillboard() {
      let billboard = document.querySelector(".c-marquee__text");
      let initLeft = getWindowWidth();
      let MarqueeListNum = 0;
      let timer = setInterval(() => {
          if (initLeft < getBillboardWidth() * -1) {
              initLeft = getWindowWidth();
              //- 跑到最後一個時候，讓他在從第一個跑
              if (MarqueeListNum == MarqueeList.length - 1) {
                MarqueeListNum = 0;
                billboard.textContent = MarqueeList[0];
              } else {
                MarqueeListNum += 1;
                billboard.textContent = MarqueeList[MarqueeListNum];
              }
          }
          initLeft -= 1;
          billboard.style.left = initLeft + "px";
      }, 1);
    }
    startBillboard();
})();
