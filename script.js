let currentPokemon = [];

async function loadAllPokemon() {

    for (let i = 1; i < 51; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let pokemon = await response.json();
        let speciesURL = pokemon['species']['url'];
        let speciesResponse = await fetch(speciesURL);
        pokemon['species'] = await speciesResponse.json();
        currentPokemon.push(pokemon);
        renderPokemonInfo(i-1);
    }
}

function renderPokemonInfo(i) { 
    let cardcontainer = document.getElementById('card-container');

    pokemon = currentPokemon[i];
    cardcontainer.innerHTML += generateHTMLCard();
}

function getIndex() {
    return '#' + String(pokemon['id']).padStart(3, '0');
}

function getType() {
    let isSecondType = '';
    for (let i = 0; i < pokemon['types'].length; i++) {
        isSecondType += /*html*/ `
            <div class="type1" style="background-color:${changeBgItems()}">${pokemon['types'][i]['type']['name']}</div>`;
        }
        return isSecondType;
}

function getAbility() {
    let isSecondAbility = '';
    for (let i = 0; i < pokemon['abilities'].length; i++) {
        isSecondAbility +=  /*html*/ `
            <td>${pokemon['abilities'][i]['ability']['name']}&ensp;</td>`; 
    } 
    return isSecondAbility;
}

function getEggGroup() {
    let eggGroup = '';
    for (let i = 0; i < pokemon['species']['egg_groups'].length; i++) { 
        eggGroup += /*html*/ `
            <td>${pokemon['species']['egg_groups'][i]['name']}</td>`
    }
    return eggGroup;
}

function getStats() {
    let stats = '';

    for (let i = 0; i < pokemon['stats'].length; i++) {
        stats += /*html*/ `
            <div class="statsContainer" style="display:none">
                <div class="contentLeft">
                    <div class="statsText">${pokemon['stats'][i]['stat']['name']}</div>
                </div>
                <div class="contentRight">
                    <div class="statsNumber">${pokemon['stats'][i]['base_stat']}%</div>
                </div>
                <div class="progressbar">
                    <div style="width:${pokemon['stats'][i]['base_stat']}%"></div>
                </div>
            </div>`;
    }
    return stats;
}

function getMoves() {
    let moves = '';
    for (let i = 0; i < pokemon['moves'].length; i++) {
        moves += /*html*/ `
        <div class="moves">${pokemon['moves'][i]['move']['name']}</div>`;
    }
    return moves;
}

function changeHeartIcon(el) {
    let heart = el.closest('.headlineInfoCard').querySelector('.heart');

    if (heart.src.match('img/heart.png')) {
        heart.src = 'img/heart_active.png';
    } else {
        heart.src = 'img/heart.png';
    }

}

function openOverlay(el) {
    let overlay = el.closest('.card').querySelector('.infoOverlay');
    overlay.style.display = 'flex';
    document.getElementById('header').style.display = 'none';
    document.body.style.overflow = 'hidden';
}

function closeOverlay(el) {
    let overlay = el.closest('.card').querySelector('.infoOverlay');
    overlay.style.display = 'none';
    document.getElementById('header').style.display = '';
    document.body.style.overflow = '';
}

function showStats(el) {
    let stabsContainer = el.closest('.data-card').querySelectorAll('.statsContainer');
    el.closest('.data-card').querySelector('.tableAbout').style.display = 'none';
    el.closest('.data-card').querySelector('.linkAbout').classList.remove('anchor-active');
    el.closest('.data-card').querySelector('.moveContainer').style.display = 'none';
    el.closest('.data-card').querySelector('.linkMove').classList.remove('anchor-active');
    el.closest('.data-card').querySelector('.linkStats').classList.add('anchor-active');

    for (let i = 0; i < stabsContainer.length; i++) {
        stabsContainer[i].style.display = 'flex';
    }
}

function showMoves(el) {
    let stabsContainer = el.closest('.data-card').querySelectorAll('.statsContainer');
    el.closest('.data-card').querySelector('.moveContainer').style.display = 'flex';
    el.closest('.data-card').querySelector('.linkMove').classList.add('anchor-active');
    el.closest('.data-card').querySelector('.tableAbout').style.display = 'none';
    el.closest('.data-card').querySelector('.linkAbout').classList.remove('anchor-active');
    el.closest('.data-card').querySelector('.linkStats').classList.remove('anchor-active');

    for (let i = 0; i < stabsContainer.length; i++) {
        stabsContainer[i].style.display = 'none';
    }
}

function showAbout(el) {
    let stabsContainer = el.closest('.data-card').querySelectorAll('.statsContainer');
    el.closest('.data-card').querySelector('.tableAbout').style.display = 'flex';
    el.closest('.data-card').querySelector('.linkAbout').classList.add('anchor-active');
    el.closest('.data-card').querySelector('.linkStats').classList.remove('anchor-active');
    el.closest('.data-card').querySelector('.moveContainer').style.display = 'none';
    el.closest('.data-card').querySelector('.linkMove').classList.remove('anchor-active');
   
    for (let i = 0; i < stabsContainer.length; i++) {
        stabsContainer[i].style.display = 'none';
    }
}

function searchPokemon(el) {
    let searchPokemon = el.value.toLowerCase();
    let cardcontainer = document.getElementById('card-container');
    let childCardContainer = cardcontainer.querySelectorAll('.card');

    for (let i = 0; i < childCardContainer.length; i++) {
        let pokemonName = childCardContainer[i].querySelector('.headline h2').innerHTML;

        if (pokemonName.substring(0, searchPokemon.length) == searchPokemon) {
           childCardContainer[i].style.display = 'flex';
        } else {
            childCardContainer[i].style.display = 'none';
        }
    } 
}

function prePokemon(el) {
    let currentOverlay = el.closest('.infoOverlay');
    let preInfoOverlay;

    if (currentOverlay.closest('.card').previousElementSibling == null) {
        preInfoOverlay = currentOverlay.closest('.card-container').lastElementChild.querySelector('.infoOverlay');
    } else {
        preInfoOverlay = currentOverlay.closest('.card').previousElementSibling.querySelector('.infoOverlay');
    }
    
    currentOverlay.style.display = 'none';
    preInfoOverlay.style.display = 'flex';
} 
 
function nextPokemon(el) {
    let currentOverlay = el.closest('.infoOverlay');
    let nextInfoOverlay;

    if (currentOverlay.closest('.card').nextElementSibling == null) {
        nextInfoOverlay = currentOverlay.closest('.card-container').firstElementChild.querySelector('.infoOverlay');
    } else {
        nextInfoOverlay = currentOverlay.closest('.card').nextElementSibling.querySelector('.infoOverlay');
    }
    
    currentOverlay.style.display = 'none';
    nextInfoOverlay.style.display = 'flex';

} 

function doNotCloseOverlay(event) {
    event.stopPropagation();
}