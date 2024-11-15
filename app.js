let etch = document.querySelector(".etch");
const container = document.querySelector(".container");
const gridButton = document.querySelector(".grid-button");
const colorButton = document.querySelector(".color-mode");
const etchDimensions = parseInt(getComputedStyle(etch).width);

const initialSize = 16;
let draw = false;
let colorMode = false;
let opacity = 0;

etch.addEventListener("click", () => draw = !draw);
colorButton.addEventListener("click", () => colorMode = !colorMode);

createGrid(initialSize, etchDimensions/initialSize);

gridButton.addEventListener("click", ()=>{
    removeGrid();
    let numSquares = parseInt(prompt("How many squares on each side would you like? (x squares by x, limit of 100)"));
    if (numSquares > 100){
        numSquares = 100;
    }
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
            square.addEventListener("mouseenter", () => {
                if (draw){
                    opacity += 0.10;
                    if (colorMode){
                        square.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${opacity})`;
                    }
                    else{
                        square.style.backgroundColor = `rgb(0, 0, 0, ${opacity})`;
                    }
                }
            });
                
            squares.push(square);
        } 
        divRow.append(...squares);
        etch.appendChild(divRow);
    }
}

function removeGrid(){
    etch.innerHTML = "";
}

