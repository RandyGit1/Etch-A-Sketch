let etch = document.querySelector(".etch");
const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-button");
const etchDimensions = parseInt(getComputedStyle(etch).width);

gridButton.addEventListener("click", ()=>{
    removeGrid();
    let numSquares = parseInt(prompt("How many squares on each side would you like? (x squares by x)"));
    let squareDimensions = etchDimensions / numSquares;
    createGrid(numSquares, squareDimensions);
});


function createGrid(numSquares, squareDimensions){
    for (let row = 0; row < numSquares; row++){
        let divRow = document.createElement("div");
        divRow.classList.add("row");
    
        let squares = [];
        for (let col = 0; col < numSquares; col++){
            let square = document.createElement("div");
            square.classList.add("square");
            square.style.cssText = `width: ${squareDimensions}px; height: ${squareDimensions}px;`;
            squares.push(square);
        } 
        divRow.append(...squares);
        etch.appendChild(divRow);
    }
}

function removeGrid(){
    etch.innerHTML = "";
}

