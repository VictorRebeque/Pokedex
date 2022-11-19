const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 10
let offset = 0


function loadPokemonsItens(offset, limit) {
    
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = (pokemons.map((pokemon) => {
                return`
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types"> 
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
            </li>
            `}).join(''))
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonsItens(offset,limit)

loadMoreButton.addEventListener('click',() => {
    offset += limit
    loadPokemonsItens(offset,limit)
})
