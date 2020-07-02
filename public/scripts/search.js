//selecionar cidade
function getCity(event) {
    const cityInput = document.querySelector("input[name=search")
    const indexOfSelectedCity = event.target.selectedIndex
    cityInput.value = event.target.options[indexOfSelectedCity].text
}

document
    .querySelector("select[name=city]")
    .addEventListener("change", getCity)