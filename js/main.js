
// Toggle the "active" class on the container when the button is clicked.
var toggle = document.getElementById("toggle");
var container = document.getElementById("container");

toggle.onclick = function () {
    container.classList.toggle("active");
}

