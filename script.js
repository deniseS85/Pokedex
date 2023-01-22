let currentPokemon;

async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
    let response = await fetch(url);
    currentPokemon = await response.json();
   
    renderPokemonInfo();
}

function renderPokemonInfo() {
    let card = document.getElementById('card');
    card.querySelector('.pokedex').innerHTML = currentPokemon['name'];
    card.querySelector('.pokeImg').src = currentPokemon['sprites']['other']['home']['front_default'];
    card.querySelector('.type1').innerHTML = currentPokemon['types'][0]['type']['name'];
    card.querySelector('.type2').innerHTML = currentPokemon['types'][1]['type']['name'];
    
    console.log(currentPokemon);
}


