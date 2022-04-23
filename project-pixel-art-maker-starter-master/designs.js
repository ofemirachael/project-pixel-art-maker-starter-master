// Select color input
var colorInput = document.querySelector("#colorPicker");
var formInputs = document.querySelector("#sizePicker");

// Select size input
var gridHeight = document.querySelector("#inputHeight");
var gridwidth = document.querySelector("#inputWidth");

// When size is submitted by the user, call makeGrid()
formInputs.addEventListener("submit", makeGrid);
//formInputs.addEventListener('click',)

function makeGrid(e) {
    e.preventDefault();
    // Remove and replace with new created grid
    while (pixelCanvas.firstChild) {
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }

    // Create the table row(s)
   for (var i = 0; i < gridHeight.value; i++){
       // select the table
        var table = document.getElementById("pixelCanvas");
        // create a new table row(s)
        var row = table.insertRow(i);
        // Create the table column(s) and assign color to it
        for (var j = 0; j < gridwidth.value; j++){
            // insert and get the a particular table cell
            var cells = row.insertCell(j);
            var targetCell = row.getElementsByTagName("td");
            // append color to the table cell 
            cells.addEventListener("click", addColor)
        }   
   }
    
  
}
// function to append choosen color
function addColor() {
    this.setAttribute("style", `background-color: ${colorInput.value}`);
} 






