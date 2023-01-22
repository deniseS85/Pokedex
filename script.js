let currentPokemon = [];
let pokemon;

async function loadAllPokemon() {

    for (let i = 1; i < 51; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        allPokemon = await response.json();
        currentPokemon.push(allPokemon); 
    }
    renderPokemonInfo();
}


function renderPokemonInfo() { 
    let cardcontainer = document.getElementById('card-container');
       
    for (let i = 0; i < currentPokemon.length; i++) {
        pokemon = currentPokemon[i];
        
        cardcontainer.innerHTML += generateHTMLCard();
    } 
}

function generateHTMLCard() {
    return /*html*/ `
        <div class="card" id="card" style="background-color:${changeBg()}">
            <h2>${pokemon['name']}</h2>
            <div class="card-content">
                <div class="info-type">
                    <div class="type1" style="background-color:${changeBgImg()}">${pokemon['types'][0]['type']['name']}</div>
                    <div class="type1">
                </div>
            </div>
            <div class="imageInfo">
                <div class="img-bg" style="background-color:${changeBgImg()}">
                    <img class="pokeImg" src="${pokemon['sprites']['other']['home']['front_default']}">
                </div>
            </div>
        </div>`;
}

function changeBg() {
    let type = pokemon['types'][0]['type']['name'];

    if (type == 'grass') {
       return 'var(--green)';
    } 
    if (type == 'fire') {
        return 'var(--red)';
    }
    if (type == 'water') {
        return 'var(--blue)';
    }
    if (type == 'bug') {
        return 'var(--purple)';
    }
    if (type == 'electric') {
        return 'var(--yellow)';
    }
    if (type == 'normal') {
        return 'var(--ochre)';
    }
    if (type == 'poison') {
        return 'var(--pink)';
    }
    if (type == 'ground') {
        return 'var(--brown)';
    }
    if (type == 'fairy') {
        return 'var(--rosa)';
    }
}

function changeBgImg() {
    let type = pokemon['types'][0]['type']['name'];

    if (type == 'grass') {
        return 'var(--lightgreen)';
     } 
     if (type == 'fire') {
         return 'var(--lightred)';
     }
     if (type == 'water') {
         return 'var(--lightblue)';
     }
     if (type == 'bug') {
         return 'var(--lightpurple)';
     }
     if (type == 'electric') {
         return 'var(--lightyellow)';
     }
     if (type == 'normal') {
         return 'var(--lightochre)';
     }
     if (type == 'poison') {
         return 'var(--lightpink)';
     }
     if (type == 'ground') {
         return 'var(--lightbrown)';
     }
     if (type == 'fairy') {
         return 'var(--lightrosa)';
     }
}
 
    
/* 

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
} */

