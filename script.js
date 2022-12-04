let incBtn = document.getElementById("inc-btn");
let decBtn = document.getElementById("dec-btn");
let resetBtn = document.getElementById("reset");
let valueEl = document.getElementById("value-el");
let count = 0;
function increament() {
  // count = count+1;
  count++;

  if (count >= 10) {
    count = count++;
    // count++;
  } else {
    count = "0" + count++;
  }
  valueEl.textContent = count;
}
function decreament() {
  if (count > 0) {
    count = count - 1;
    // count--;
  } else {
    count = "0" + count--;
  }
  valueEl.textContent = count;
}
const resetFun = () => {
  count = 0;
  valueEl.innerText = count;
};
incBtn.addEventListener("click", increament);
decBtn.addEventListener("click", decreament);
resetBtn.addEventListener("click", resetFun);
