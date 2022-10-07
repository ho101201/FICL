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
}
