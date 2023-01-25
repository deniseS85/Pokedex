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

function changeBgItems() {
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

function changeBoxShadow() {
    let type = pokemon['types'][0]['type']['name'];

    if (type == 'grass') {
        return '-2px -2px 20px 2px var(--lightgreen), 2px 2px 20px 2px var(--lightgreen);';
     } 
     if (type == 'fire') {
         return '-2px -2px 20px 2px var(--lightred), 2px 2px 20px 2px var(--lightred);';
     }
     if (type == 'water') {
         return '-2px -2px 20px 2px var(--lightblue), 2px 2px 20px 2px var(--lightblue);';
     }
     if (type == 'bug') {
         return '-4px -4px 20px 4px var(--lightpurple), 4px 4px 20px 4px var(--lightpurple);';
     }
     if (type == 'electric') {
         return '-2px -2px 20px 2px var(--lightyellow), 2px 2px 20px 2px var(--lightyellow);';
     }
     if (type == 'normal') {
         return '-2px -2px 20px 2px var(--lightochre), 2px 2px 20px 2px var(--lightochre);';
     }
     if (type == 'poison') {
         return '-2px -2px 20px 2px var(--lightpink), 2px 2px 20px 2px var(--lightpink);';
     }
     if (type == 'ground') {
         return '-1px -1px 20px 1px var(--lightbrown), 1px 1px 20px 1px var(--lightbrown);';
     }
     if (type == 'fairy') {
         return '-2px -2px 20px 2px var(--lightrosa), 2px 2px 20px 2px var(--lightrosa);';
     }
}
/*todo */
function getIndex() {
    let index = pokemon['id'];
    if (index < 10) {
        return '#00' + index;
    } else {
        return '#0' + index;
    }
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
    let preInfoOverlay = currentOverlay.closest('.card').previousElementSibling.querySelector('.infoOverlay');
   
    currentOverlay.style.display = 'none';
    preInfoOverlay.style.display = 'flex';

    let firsChildOverlay = currentOverlay.firstElementChild;

    console.log(firsChildOverlay);

   /*  if (firsChildOverlay) {
        firsChildOverlay = currentOverlay.closest('.card').lastElementChild.querySelector('.infoOverlay')
    } else {
       
    } */
   
} 
 
function nextPokemon(el) {
    let currentOverlay = el.closest('.infoOverlay');
    let nextInfoOverlay = currentOverlay.closest('.card').nextElementSibling.querySelector('.infoOverlay');
   
    currentOverlay.style.display = 'none';
    nextInfoOverlay.style.display = 'flex';

} 

function doNotCloseOverlay(event) {
    event.stopPropagation();
}