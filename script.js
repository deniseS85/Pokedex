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

function generateHTMLCard() {
    return /*html*/ `
        <div class="card" style="background-color:${changeBg()}; box-shadow:${changeBoxShadow()}">
            <div class="headline">
                <h2>${pokemon['name']}</h2>
                <h2>${getIndex()}</h2>
            </div>
            <div class="card-content">
                <div class="info-type">${getType()}</div>
                <div class="imageInfo">
                    <div class="img-bg" style="background-color:${changeBgItems()}">
                        <img onclick="openOverlay(this)" class="pokeImg" src="${pokemon['sprites']['other']['home']['front_default']}">
                    </div>
                </div>
            </div>
            ${generateHTMLInfoCard()}`;
}

function generateHTMLInfoCard() {
    return /*html*/ `
        <div class="infoOverlay" style="display: none;">
            <div class="info-card" style="background-color:${changeBg()}">
                <div class="headlineInfoCard">
                    <img class="arrow" onclick="closeOverlay(this)" src="img/arrow.png">
                    <img onclick="changeHeartIcon(this)" class="heart" src="img/heart.png">
                </div>
                <div class="namePokemon">
                    <h2 class="name">${pokemon['name']}</h2>
                    <h2>${getIndex()}</h2>
                </div>
                <div class="type">${getType()}</div>
                <img class="imgInfoCard" src="${pokemon['sprites']['other']['home']['front_default']}">
                ${generateHTMLDataCard()}
            </div>
        </div>`;
}

function generateHTMLDataCard() {
    return /*html*/ `
        <div class="data-card">
            <nav>
                <a href="#">About</a>
                <a href="#">Base Stats</a>
                <a href="#">Evolution</a>
                <a href="#">Moves</a>
            </nav>
            <table>
                <tr>
                    <td>Species</td>
                    <td>${pokemon['species']['genera']['7']['genus']}</td>
                </tr>
                <tr>
                    <td>Height</td>
                    <td>${pokemon['height']/10} m</td>
                </tr>
                <tr>
                    <td>Weight</td>
                    <td>${pokemon['weight']/10} kg</td>
                </tr>
                <tr>
                    <td>Abilities</td>
                    ${getAbility()}
                </tr>
                <tr>
                    <td><b>Breeding</b></td>
                </tr>
                <tr>
                    <td>Egg Groups</td>
                    ${getEggGroup()}
                </tr>
            </table>
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
