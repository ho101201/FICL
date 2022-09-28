//1 수정
const tabItem = document.querySelectorAll(".tabBtn");
const tabInner = document.querySelectorAll(".tab_inner");

tabItem.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabInner.forEach((inner) => {
      inner.classList.remove("active");
    });

    tabItem.forEach((item) => {
      item.classList.remove("active");
    });

    tabItem[idx].classList.add("active");
    tabInner[idx].classList.add("active");
  });
});

//2
const tabItem2 = document.querySelectorAll(".tabBtn2");
const tabInner2 = document.querySelectorAll(".tab_inner2");

tabItem2.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabInner2.forEach((inner) => {
      inner.classList.remove("active");
    });

    tabItem2.forEach((item) => {
      item.classList.remove("active");
    });

    tabItem2[idx].classList.add("active");
    tabInner2[idx].classList.add("active");
  });
});

//플로팅 버튼
$(document).ready(function () {
  /*웹페이지 열었을 때*/
  $("#mng").show();
  $("#exit").hide();

  /*img1을 클릭했을 때 img2를 보여줌*/
  $("#img1").click(function () {
    $("#img1").hide();
    $("#img2").show();
  });

  /*img2를 클릭했을 때 img1을 보여줌*/
  $("#img2").click(function () {
    $("#img1").show();
    $("#img2").hide();
  });
});
