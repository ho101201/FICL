// 모달 창
// 수조그룹생성
let modal = document.getElementById("cGrpModal");
let openPopup = document.getElementById("openCGrpModal");
let closePopup = document.getElementsByClassName("closePopup")[0];
let modalBtn = document.getElementsByClassName("modalConfBtn")[0];

openPopup.addEventListener("click", () => {
  modal.style.display = "flex";
});
closePopup.addEventListener("click", () => {
  modal.style.display = "none";
});
modalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
