//slider
let time  = 3500 //define o intervalo da transição
    currentImageIndex = 0  //começa o index em 0
    images = document.querySelectorAll("#slider img"), //seleciona os elementos com as imagens
    max = images.length //quantidade de imagens

function nextImage() {  //função para mudar de imagem
    images[currentImageIndex].classList.remove("selected") //remove a classe selected da imagem

    currentImageIndex++ //incrementa o index

    if(currentImageIndex >= max) //seta o index em 0 se for igual a quantidade de imagens
        currentImageIndex = 0

    images[currentImageIndex].classList.add("selected") //adiciona a classe selected na imagem
}

function start() { //função para chamar a nextImage() em determinado intervalo de tempo
    setInterval(() => { //chama a função
        nextImage() //função nextImage
    }, time); //intervalo de tempo (varíavel time)
}

//ouvidor de eventos
window.addEventListener("load", start) //evento load (carregar a página), executa a função start


//hide class
const searchButton = document.querySelector("#page-home main a")
const modal = document.querySelector("#modal")
const close = document.querySelector("#modal .header a")

searchButton.addEventListener("click", () => {
    modal.classList.remove("hide")
})

close.addEventListener("click", () => {
    modal.classList.add("hide")
})