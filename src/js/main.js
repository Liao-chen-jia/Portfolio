const $Footer = document.querySelector(".c-footer");
const $NoChange = document.querySelector(".l-index")

//- 主畫面不需要偵測，需要他一直存在
if($NoChange == null) {

  //- 進入視窗內第一次偵測，來判斷視窗大小是否足夠，不足就要顯示c-footer
  //- (10/24)目前不明原因scrollWidth偵測的範圍不包含滾條本身，所以先設定成750
  if (document.documentElement.scrollWidth <= 750) {
    $Footer.classList.add("is-actived");
  } else {
    $Footer.classList.remove("is-actived");
  }

  //- 觸發window更改視窗大小時就就偵測一次
  window.addEventListener('resize', function(){
    console.log(document.documentElement.scrollWidth)
    //- 當瀏覽器寬度小於767.98時，把c-footer顯示出來
    if (document.documentElement.scrollWidth <= 750) {
      $Footer.classList.add("is-actived");
    } else {
      $Footer.classList.remove("is-actived");
    }
  })
  
} else {
  $Footer.classList.add("is-actived");
}

