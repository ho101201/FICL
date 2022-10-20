// 달력 // 날짜 배열
// 날짜 정보
let date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();
const viewDay = date.getDay();

if (document.querySelector(".year") !== null) {
  document.querySelector(".year").textContent = `${viewYear}년`;
  document.querySelector(".month").textContent = `${viewMonth + 1}월`;
  //
  document.querySelector(".year_month_day").textContent = `${viewYear}년 ${
    viewMonth + 1
  }월 ${viewDay + 16}일`;
}

console.log(document.querySelector("year_month_day"));

// 지난 달 마지막 Date, 이번 달 마지막 Date
const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

// Dates 기본 배열
const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

// prevDates 계산
if (PLDay !== 6) {
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
  }
}

// nextDates 계산
for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}

// Dates 합치기
const dates = prevDates.concat(thisDates, nextDates);

// Dates 정리
const firstDateIndex = dates.indexOf(1);
const lastDateIndex = dates.lastIndexOf(TLDate);
dates.forEach((date, i) => {
  // 달 구분
  const condition =
    i >= firstDateIndex && i < lastDateIndex + 1 ? "this" : "other";

  dates[
    i
  ] = `<div class="date"><span class="${condition}">${date}</span></div>`;
});

// 오늘 날짜 클래스 추가
const today = new Date();
if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
  for (let date of document.querySelectorAll(".this")) {
    if (+date.innerText === today.getDate()) {
      date.classList.add("today");
      break;
    }
  }
}

// Dates 그리기
document.querySelector(".dates").innerHTML = dates.join("");
