function turnOff(element) {
    element.innerText ="Logout";
}

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results")

searchButton.addEventListener("Click", () => {
    const query = searchInput.value.toLowerCase();
}
)
function sumar1() {
    const boton = document.querySelector(".sum-button");
    let texto = boton.textContent;
    let numero =parseInt(texto);
    boton.textContent =(numero + 1) +  "Likes";
}
