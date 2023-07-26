const gridContainer = document.querySelector(".grid-container");
const clearButton = document.querySelector(".clear-button");
const rangeValue = document.querySelector(".input-value");
const rangeSlider = document.querySelector("#myRange");

const randomColor = document.querySelector(".random-color");
const customColor = document.querySelector("#customColor");

rangeValue.innerText = `${rangeSlider.value} x ${rangeSlider.value}`;
rangeSlider.oninput = sliderChange;

randomColor.addEventListener("click", () => (mode = "random"));
customColor.addEventListener("input", customColorF);

let mode = "random";
let globalColor;

function customColorF(e) {
  mode = "custom";
  globalColor = e.target.value;
}

function clear() {
  gridContainer.innerHTML = "";
  makeRows(rangeSlider.value, rangeSlider.value);
}

function sliderChange() {
  makeRows(rangeSlider.value, rangeSlider.value);
  rangeValue.innerText = `${rangeSlider.value} x ${rangeSlider.value}`;
}

function colorChange() {
  let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (mode === "random") {
    this.style.backgroundColor = randomColor;
  } else {
    this.style.backgroundColor = globalColor;
  }
}

function makeRows(rows, cols) {
  gridContainer.style.setProperty("--grid-rows", rows);
  gridContainer.style.setProperty("--grid-cols", cols);
  for (let c = 0; c < rows * cols; c++) {
    let cell = document.createElement("div");
    cell.addEventListener("mouseover", colorChange);
    gridContainer.appendChild(cell).className = "grid-item";
  }
}
makeRows(rangeSlider.value, rangeSlider.value);

clearButton.addEventListener("click", clear);
