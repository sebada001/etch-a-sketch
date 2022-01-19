
var container = document.querySelector(".container");

var eraserToggle = document.getElementById("eraser-toggle");

var rainbowToggle = document.getElementById("rainbow-toggle");

var mouseDown = 0;

eraserToggle.addEventListener("change", eraser);

rainbowToggle.addEventListener("change", rainbow);


document.body.onmousedown = function() { 
  ++mouseDown;
}
document.body.onmouseup = function() {
  --mouseDown;
}

///////////////////////// MAKE ROW FUNCTION ///////////////////////// 

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (var i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        cell.addEventListener("mouseleave", (e)=>{ modeLeave(e) });
        cell.addEventListener("mouseenter", (e)=>{ modeEnter(e) });
        cell.addEventListener("click",  (e)=>{ modeClick(e) });
        container.appendChild(cell).className = "grid-item";
    }
}

///////////////////////// DRAW MODES /////////////////////////

//////// DRAW ////////
const drawModeClick = function clickFunction(x){
    x.target.style.backgroundColor = "var(--light-color-1)";
    }
const drawModeEnter = function mouseEnterFunction(x){
    if (mouseDown){
         x.target.style.backgroundColor = "var(--light-color-1)";
    }
    else{
        return
    }}
const drawModeLeave = function mouseLeaveFunction(x){
    if (mouseDown){
        x.target.style.backgroundColor = "var(--light-color-1)";
        }
    else{
        return
    }}

//////// ERASE ////////
const eraseModeClick = function clickFunctionEraser(x){
    x.target.style.backgroundColor = "var(--dark-color-2)";
}
const eraseModeEnter = function mouseEnterFunctionEraser(x){
    if (mouseDown){
        x.target.style.backgroundColor = "var(--dark-color-2)";
    }
    else{
        return
    }}
const eraseModeLeave = function mouseLeaveFunctionEraser(x){
    if (mouseDown){
        x.target.style.backgroundColor = "var(--dark-color-2)";
    }
    else{
        return
    }}
//////// RAINBOW ////////
const rainbowModeClick = function clickFunctionRainbow(x){
        x.target.style.backgroundColor = getRandomColor();
    
}
const rainbowModeEnter = function mouseEnterFunctionRainbow(x){
    if (mouseDown){
        x.target.style.backgroundColor = getRandomColor();
    }
    else{
        return
    }}
const rainbowModeLeave = function mouseLeaveFunctionRainbow(x){
    if (mouseDown){
        let xColor = x.target.style.backgroundColor;
        x.target.style.backgroundColor = getRandomColor();
    }
    else{
        return
    }}
///////////////////////// RANDOM COLOR FUNCTION /////////////////////////
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
///////////////////////// ACTIVE DRAW MODE /////////////////////////
var modeClick = drawModeClick;
var modeEnter = drawModeEnter;
var modeLeave = drawModeLeave;


///////////////////////// START STATE /////////////////////////
makeRows(16, 16);

///////////////////////// GRID MAKER / REPLACES OLD GRID /////////////////////////

function gridMaker(){
    var gridValue = document.getElementById("inputNumber").value;
    if (gridValue >= 100){
        gridValue = 100;
    }
    removeChildren(container);
    makeRows(gridValue, gridValue);
}

///////////////////////// RAINBOW MODE ///////////////////////// 

function rainbow(){
    if (rainbowToggle.checked == true){
    modeClick = rainbowModeClick;
    modeEnter = rainbowModeEnter;
    modeLeave = rainbowModeLeave;

    }
    else{
    
    modeClick = drawModeClick;
	modeEnter = drawModeEnter;
	modeLeave = drawModeLeave;

}}

///////////////////////// ERASER ///////////////////////// 

function eraser(){

    if (eraserToggle.checked == true){
    modeClick = eraseModeClick;
    modeEnter = eraseModeEnter;
    modeLeave = eraseModeLeave;
    }

    else{
    modeClick = drawModeClick;
	modeEnter = drawModeEnter;
	modeLeave = drawModeLeave;
}}

///////////////////////// CLEANER / DESTROYER OF OLD BOARD ///////////////////////// 

function removeChildren(parent){
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}


