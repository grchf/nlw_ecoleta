// FORM ESTADO E CIDADE

function populateUFs() {
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() ) 
    .then( states => {
        for( const state of states ) {
            // ufSelect.innerHTML = ufSelect.innerHTML + `<option value="1">Valor</option>`
            ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
        }
    } )
}

populateUFs()

function getCities(event) {
    const citySelect = document.querySelector("[name=city]")
    const stateInput = document.querySelector("[name=state]")

    const ufValue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    
    // Limpar o chachê das cidades
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() ) 
    .then( cities => {
        for( const city of cities ) {
            citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    } )
}

// procurar seletores .querySelector
// addEventListener = procurar ações realizadas no site
// função vazia = function(){} OU () => {}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getCities)


// ITENS DE COLETA
// pegar todos os li's

const itemsToCollect = document.querySelectorAll(".items-grid li")
for (const item of itemsToCollect) {
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript
    // itemLi.classList.add("selected") /* adicionar */
    // itemLi.classList.remove("selected") /* remover */
    itemLi.classList.toggle("selected") /* adcionar ou remover*/

    const itemId = itemLi.dataset.id

    // verificar se existem itens selecionados, se sim, pegar tais itens
    const alreadySelected = selectedItems.findIndex( item => {
        const itemFound = item == itemId
        return itemFound
    } )

    // se já estiver selecionado
    if(alreadySelected >= 0) {
        // tirar da seleção
        const filteredItems = selectedItems.filter( item => {
            const itemIsDifferent = item != itemId
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
    // se não estiver selecionado,
        // adicionar à seleção
        selectedItems.push(itemId)
    }

    // atualizar o campo escondido com os itens selecionados
    collectedItems.value = selectedItems

}