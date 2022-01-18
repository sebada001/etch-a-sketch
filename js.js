var cellNumber = 36; //take grid column value as you want


var container = document.querySelector(".container");

for (var i = 0; i < cellNumber; i++){
    var cell = document.createElement("div");
    // cell.style.border = "1px solid red";
    cell.style.backgroundColor = "green";
    cell.style.width = "1fr";
    cell.style.height = "1fr";
    // cell.style.aspectRatio = "1/1";
    container.appendChild(cell); 
    cell.addEventListener("mouseover", function(event){
        event.target.style.backgroundColor = "blue";
    })
    cell.addEventListener("mouseleave", function(eventTwo){
        eventTwo.target.style.backgroundColor = "green";
    })
    
}

container[container.length-1].addEventListener("click", function () {
    alert("test");
}, false);




console.log(container)

