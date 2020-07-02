//popular select com os estados
/*
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
*/

//itens de coleta
const itemsToCollect = document.querySelectorAll(".items-grid li") //seleciona as li

for (const item of itemsToCollect) { //adiciona um ouvidor de evento (clicar na li)
    item.addEventListener("click", handleSelectedItem)  //evento = clicar na li
}

const collectedItems = document.querySelector("input[name=items]") //atribui os itens selecionados à input itens

let selectedItems = [] //array para armazenar os itens selecionados

function handleSelectedItem(event) { //função que é executada quando um item é selecionado
    const itemLi = event.target //alvo do evento

    itemLi.classList.toggle("selected") //adiona a classe selected ao alvo do evento (li)

    const itemId = itemLi.dataset.id //pega o id da li selecionada (target)

    //verificar se existem itens selecionados (armazenados no array selectedItems)
    const alreadySelected = selectedItems.findIndex( item => { //acha o index dos itens selecionados
        const itemFound = item == itemId //compara o index do item com o itemId com o id da li //será true se houver item no array e será false se não houver
        return itemFound //retorna os itens encontrados no array
    })

    //se já estiver selecionado (return true), remover do array
    if(alreadySelected >=0) { //se já existem itens selecionados
        //tirar da seleção
        const filteredItems = selectedItems.filter( item => { //pega cada item que vier pela alreadySelected
            const itemIsDifferent = item != itemId //compara  com os id das li (se forem iguais será false, se forem diferentes será true)
            return itemIsDifferent //retorna os itens que são diferentes
        })

        selectedItems = filteredItems //atualiza o array selectedItens com os itens que retornaram

    } else { //adicionar na seleção
        selectedItems.push(itemId) //adicionao o item selecionado no array
    }

    collectedItems.value = selectedItems //atualiza o input itens com os itens selecionados
}

