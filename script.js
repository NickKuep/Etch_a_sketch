//create a variable grid div that will be the canvas for the etch_a_sketch
function generateCanvas(size) {
  let canvas = document.querySelector(".canvas");
  let gridDiv = canvas.querySelectorAll("div");
  gridDiv.forEach((div) => div.remove(div));
  canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let amount = size * size;

  for (let i = 0; i < amount; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.style.backgroundColor = "white";
    canvas.insertAdjacentElement("beforeend", gridDiv);
    gridDiv.addEventListener("mouseover", () => {
      gridDiv.style.backgroundColor = "black";
    });
  }
}
generateCanvas(16);
// Update the current slider value (each time you drag the slider handle)

let slider = document.getElementById("myRange");
let output = document.querySelector(".gridRatio");
output.textContent = `${slider.value} X ${slider.value}`; // Display the default slider value
slider.oninput = function () {
  output.textContent = `${this.value} X ${this.value}`;
  sliderValue = this.value;
  generateCanvas(sliderValue);
};

//on hover effect that color the div black
function colorDiv() {
  gridDiv.addEventListener("mouseover", () => {
    gridDiv.style.backgroundColor = "black";
  });
}
