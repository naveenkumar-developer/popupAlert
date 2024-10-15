const popupMsg = document.querySelector("#popup");
const popBtn = document.querySelector("#pupupBtn");
const closepopBtn = document.querySelector("#closePopupBtn");
popBtn.addEventListener("click", function () {
  popupMsg.classList.add("showPopup");
});

closepopBtn.addEventListener("click", function () {
  popupMsg.classList.remove("showPopup");
});
