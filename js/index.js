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

//3
const tabItem3 = document.querySelectorAll(".tabBtn3");
const tabInner3 = document.querySelectorAll(".tab_inner3");

tabItem3.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabInner3.forEach((inner) => {
      inner.classList.remove("active");
    });

    tabItem3.forEach((item) => {
      item.classList.remove("active");
    });

    tabItem3[idx].classList.add("active");
    tabInner3[idx].classList.add("active");
  });
});

//1 수정
const tabItem4 = document.querySelectorAll(".tabBtn4");
const tabInner4 = document.querySelectorAll(".tab_inner4");

tabItem4.forEach((tab, idx) => {
  tab.addEventListener("click", function () {
    tabInner4.forEach((inner) => {
      inner.classList.remove("active");
    });

    tabItem4.forEach((item) => {
      item.classList.remove("active");
    });

    tabItem4[idx].classList.add("active");
    tabInner4[idx].classList.add("active");
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

// 반원
// let canvas = document.querySelector("canvas");
// var ctx = canvas.getContext("2d");
// ctx.beginPath();
// ctx.arc(50, 50, 40, Math.PI * 0.5, Math.PI * 1.5);
// ctx.rotate(Math.PI / 2);
// ctx.stroke();

// 아코디언
let accorClip = document.getElementsByClassName("accorClip");
{
  accorClip !== null &&
    $(accorClip).click(function () {
      $(this).next(".accorContent").stop().slideToggle(300);
      $(this).toggleClass("on").siblings().removeClass("on");
      $(this).next(".accorContent").siblings(".accorContent").slideUp(300); // 1개씩 펼치기
    });
}

// 라디오 // for문으로 수정 필요
// 자동사료급이기
{
  document.getElementsByClassName("feedingType") !== null &&
    $(document).ready(function () {
      $('input[type="radio"][class="feedingType"]').on("click", function () {
        let startSetting = $(
          'input[type=radio][class="feedingType"]:checked'
        ).val();
        if (startSetting == "recommand") {
          $("#task_time_setting_H1").css("opacity", "1");
          $("#task_time_setting_M1").css("opacity", "1");
          $("#task_time_setting_H2").css("opacity", "1");
          $("#task_time_setting_M2").css("opacity", "1");
          $("#alertBox").css("display", "block");
        } else {
          $("#task_time_setting_H1").css("opacity", "0");
          $("#task_time_setting_M1").css("opacity", "0");
          $("#task_time_setting_H2").css("opacity", "0");
          $("#task_time_setting_M2").css("opacity", "0");
          $("#alertBox").css("display", "none");
        }
      });
    });
}
// 양액기
{
  document.getElementsByClassName("nutrientType") !== null &&
    $(document).ready(function () {
      $('input[type="radio"][class="nutrientType"]').on("click", function () {
        let startSetting = $(
          'input[type=radio][class="nutrientType"]:checked'
        ).val();
        if (startSetting == "recommand") {
          $("#period1").css("display", "flex");
          $("#period2").css("display", "flex");
          $("#dltBtn1").css("display", "block");
          $("#dltBtn2").css("display", "block");
          $("#task_time_setting_H1").css("display", "block");
          $("#task_time_setting_M1").css("display", "block");
          $("#task_time_setting_H2").css("display", "block");
          $("#task_time_setting_M2").css("display", "block");
        } else {
          $("#period1").css("display", "none");
          $("#period2").css("display", "none");
          $("#dltBtn1").css("display", "none");
          $("#dltBtn2").css("display", "none");
          $("#task_time_setting_H1").css("display", "none");
          $("#task_time_setting_M1").css("display", "none");
          $("#task_time_setting_H2").css("display", "none");
          $("#task_time_setting_M2").css("display", "none");
        }
      });
    });
}

// 소모품관리
$(function () {
  $("#toggle_id").bind("click", function () {
    if ($("#toggle_id").val() == 0) {
      $("#toggle_id").val(1);
    } else {
      $("#toggle_id").val(0);
    }
    let isHide = $("#toggle_id").val();
    if (isHide == 1) {
      // Button 숨기기
      $();
      $("#admin_id").hide();
    } else {
      // Button 보이기
      $("#admin_id").show();
    }
  });
});

// 제품 뷰 옵션 추가

// 체크박스
$("input:checkbox").prop("checked", true);

// <-------------->
// 스플래시 / 배경 애니메이션
