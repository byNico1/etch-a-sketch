const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-button");
const rangeValue = document.querySelector(".input-value");
const rangeSlider = document.querySelector("#myRange");

rangeValue.innerText = `${rangeSlider.value} x ${rangeSlider.value}`;
rangeSlider.oninput = sliderChange;

function clear() {
  gridContainer.innerHTML = "";
  makeRows(rangeSlider.value, rangeSlider.value);
}

function sliderChange() {
  makeRows(rangeSlider.value, rangeSlider.value);
  rangeValue.innerText = `${rangeSlider.value} x ${rangeSlider.value}`;
}

function randomColor() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  this.style.backgroundColor = randomColor;
}

function makeRows(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", randomColor);
    gridContainer.appendChild(cell).className = "grid-item";
  }
}
makeRows(rangeSlider.value, rangeSlider.value);

clearButton.addEventListener("click", clear);
