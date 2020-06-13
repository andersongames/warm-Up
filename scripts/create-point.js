//popular select com os estados
function populateUFs()  {
    const ufSelect = document.querySelector("select[name=uf]") //seleciona a select uf

    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados") //fetch no serviço
    .then( (res) => { return res.json() }) //retorna a resposta em  json
    .then( states => { //dados do jason

        for( const state of states ) { //adiciona uma option para cada Estado que retornou no json
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }        
    })
}

populateUFs() //executa a funcao populateUFs

//popular select com as cidades
function getCities(event) {
    const citySelect = document.querySelector("select[name=city]") //seleciona a select city
    const stateInput = document.querySelector("input[name=state]") //seleciona o input state

    const ufValue = event.target.value //pega o valor da uf no target (select uf) do evento (mudar)

    const indexOfSelectedState = event.target.selectedIndex //pega o index do evento (mudar estado)
    stateInput.value = event.target.options[indexOfSelectedState].text //atualiza o valor de stateInput com o texto (nome do estado) quando houver mudança na select state

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` //url dinâmica, interpola o serviço de cidades com o valor da uf

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>" //limpa o conteúdo da select city antes de carregar as cidades
    citySelect.disabled = true

    fetch(url) //fetch no serviço, com a url dinâmica
    .then( (res) => { return res.json() }) //retorna a resposta em  json
    .then( cities => { //dados do jason
        
        for( const city of cities ) { //adiciona uma option para cada Cidade que retornou no json
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }

        citySelect.disabled = false
    })
}

document
    .querySelector("select[name=uf]") //seleciona a select com name=uf
    .addEventListener("change", getCities) //adiciona um ouvidor de eventos, quando mudar o valor da select, executa a função getCities (passada por referência)