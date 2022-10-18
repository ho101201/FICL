let closePopup = document.getElementsByClassName("closePopup")[0];
let modalBtn = document.getElementsByClassName("modalConfBtn")[0];
let body = document.querySelector("body");

if (document.getElementById("cGrpModal") !== null) {
  // 모달 창
  // 수조그룹생성
  let modal = document.getElementById("cGrpModal");
  let openPopup = document.getElementById("openCGrpModal");

  openPopup.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closePopup.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
} else if (document.getElementById("foodModal") !== null) {
  // 사료급이
  let modal = document.getElementById("foodModal");
  let openPopup2 = document.getElementById("openFoodModal");

  openPopup2.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closePopup.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
} else if (document.getElementById("addInfoModal") !== null) {
  // 양액기
  let modal = document.getElementById("addInfoModal");
  let openPopup2 = document.getElementById("openAddInfoModal");

  openPopup2.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closePopup.addEventListener("click", () => {
    modal.style.display = "none";
  });
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
} else if (document.getElementById("consumableModal") !== null) {
  // 소모품관리
  let modal = document.getElementById("consumableModal");
  let openPopup2 = document.getElementById("openConsumableModal");

  openPopup2.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  // closePopup.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
} else if (document.getElementById("optionPopup") !== null) {
  // 제품 뷰
  let modal = document.getElementById("optionPopup");
  let openPopup2 = document.getElementById("openOptionPopup");
  let botBtn1 = document.getElementById("bBtnC1");
  let botBtn2 = document.getElementById("bBtnC2");

  openPopup2.addEventListener("click", () => {
    modal.style.display = "flex";
    botBtn1.style.display = "none";
    botBtn2.style.display = "flex";
  });
  closePopup.addEventListener("click", () => {
    modal.style.display = "none";
    botBtn1.style.display = "flex";
    botBtn2.style.display = "none";
  });

  function btnToggle() {
    botBtn.classList.toggle("active");
  }
} else if (document.getElementById("applyModal") !== null) {
  // 교환 및 반품
  let modal = document.getElementById("applyModal");
  let openPopup2 = document.getElementById("openApplyModal");

  openPopup2.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  // closePopup.addEventListener("click", () => {
  //   modal.style.display = "none";
  // });
  modalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
} else if (document.getElementById("idAuthFailModal") !== null) {
  // 아이디 찾기_아이디 인증 실패 + 비밀번호 찾기
  let modal = document.getElementById("idAuthFailModal");
  let openPopup = document.getElementById("openIdAuthFailModal");
  let modal2 = document.getElementById("pwAuthFailModal");
  let openPopup2 = document.getElementById("openPwAuthFailModal");

  let closePopup2 = document.getElementsByClassName("closePopup2")[(0, 1)];

  openPopup.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  openPopup2.addEventListener("click", () => {
    modal2.style.display = "flex";
  });
  closePopup.addEventListener("click", () => {
    modal.style.display = "none";
  });
  closePopup2.addEventListener("click", () => {
    modal2.style.display = "none";
  });
} else if (document.getElementById("confPopup") !== null) {
  // 가계부
  let modal = document.getElementById("confPopup");
  let openPopup2 = document.getElementById("openConfPopup");

  openPopup2.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  closePopup.addEventListener("click", () => {
    modal.style.display = "none";
  });

  function btnToggle() {
    botBtn.classList.toggle("active");
  }
}
