let container = document.querySelector('.container');
let clear = document.querySelector(".clear");
let colorPicker = document.getElementById("colorPicker");
let buttonsContainer = document.querySelector(".colorContainer");
let sizeValue = document.querySelector(".sizeValue")
let selectedColor = "black";
let isDrawing = false; // Keep track of whether the mouse is currently being held down
let sizeSlider = document.querySelector("#sizeSlider")
let userInput = 16;



clear.addEventListener('click', () => {
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
});

/*sizeSlider.addEventListener("click", (e) => {
userInput = e.target.value
sizeValue.innerHTML = userInput + " x " + userInput
container.innerHTML = ""
console.log(userInput)

})*/

let grid = document.createDocumentFragment();
for (let i = 0; i < (userInput*userInput); i++) {
let newDiv = document.createElement("div");
newDiv.classList.add("pixel");
grid.appendChild(newDiv);

container.appendChild(grid);
}
divs = document.querySelectorAll('.pixel');

container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;




divs.forEach((div) => {
    div.addEventListener('mousedown', () => {
        isDrawing = true;
        div.style.backgroundColor = selectedColor;
    });

    div.addEventListener('mouseover', (e) => {
            if(isDrawing){
            e.target.style.backgroundColor = selectedColor;
            }
    });
    div.addEventListener('mouseup', () => {
        isDrawing = false;
    });

});

colorPicker.addEventListener("input", () => {
    selectedColor = colorPicker.value;
});


buttonsContainer.addEventListener("click", (e) => {
    let clickedButton = e.target; 
    if (clickedButton.classList.contains("color")) {
        selectedColor = clickedButton.style.backgroundColor;
    }
});


