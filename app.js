
const etch = document.querySelector(".etch");
for (let row = 0; row < 16; row++){
    let divRow = document.createElement("div");
    divRow.classList.add("row");

    let squares = [];
    for (let col = 0; col < 16; col++){
        let square = document.createElement("div");
        square.classList.add("square");
        squares.push(square);
    } 
    divRow.append(...squares);
    etch.appendChild(divRow);
}

