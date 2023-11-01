// eventos.js
function saludar() {
    alert("Hola!");
}

const divContainer = document.getElementById("divContainer");
divContainer.addEventListener("click", function() {
    alert("Hola! Soy el div");
});