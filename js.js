
var container = document.querySelector(".container");

var mouseDown = 0;

document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (var i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseleave", function(event){
            if (mouseDown){
                event.target.style.backgroundColor = "var(--light-color-1)";
            }
            else{
                return
            }
        }) 
        cell.addEventListener("mouseenter", function(eventTwo){
            if (mouseDown){
                eventTwo.target.style.backgroundColor = "var(--light-color-1)";
            }
            else{
                return
            }
        })
        cell.addEventListener("click", function(eventThree){
            eventThree.target.style.backgroundColor = "var(--light-color-1)";
        })
        container.appendChild(cell).className = "grid-item";
    }
}


makeRows(16, 16);

function gridMaker(){
    var gridValue = document.getElementById("inputNumber").value;
    if (gridValue >= 100){
        gridValue = 100;
    }
    removeChildren(container);
    makeRows(gridValue, gridValue);
}

function removeChildren(parent){
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
};

function checkCheckbox(){
    
}

console.log(container)

