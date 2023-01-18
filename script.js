grid = document.createDocumentFragment();
container = document.querySelector('.container')
gomme = document.querySelector(".gomme")
let userInput = 100;
colorPicker = document.querySelector(".colorPicker")
console.log(colorPicker)

gomme.addEventListener('click', () => {
    divs.forEach((div)=> {
        div.classList.remove("red");
    })
})

for (let i = 0; i < (userInput*userInput); i++) {
        // Create a new div element
    let newDiv = document.createElement("div")
    newDiv.classList.add("pixel")
        // Add some content to the div
        // Add the div to the fragment
    grid.appendChild(newDiv);
}
    // Add the div to the body of the document
container.appendChild(grid);

//je veux append l'user input pour changer le nombre de colonnes
container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
container.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;


divs = document.querySelectorAll('.pixel')

divs.forEach((div)=> {
    div.addEventListener('mouseover', ()=> {
    div.classList.add("red");
    })
})


