
function changecolor(selectedColor) {
    var label = document.getElementById("colorLabel");
    label.style.color = "";
    if (selectedColor == "Red") {
        label.style.color = "Red";
    } else if (selectedColor == "Blue") {
        label.style.color = "Blue"; 
    } else if (selectedColor == "Green"){
        label.style.color = "Green";
        }
    }
