let currentPokemon = [];

async function loadAllPokemon() {

    for (let i = 1; i < 51; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let pokemon = await response.json();
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
                <div class="info-type">${gettype()}</div>
                <div class="imageInfo">
                    <div class="img-bg" style="background-color:${changeBgItems()}">
                        <img onclick="openOverlay(this)" class="pokeImg" src="${pokemon['sprites']['other']['home']['front_default']}">
                    </div>
                </div>
            </div>
            <div class="infoOverlay" style="display: none;">
                <div class="info-card" style="background-color:${changeBg()}">
                    <div class="headlineInfoCard">
                        <img class="arrow" onclick="closeOverlay(this)" src="img/arrow.png">
                        <img src="img/heart.png">
                    </div>
                    <div class="namePokemon">
                        <h2 class="name">${pokemon['name']}</h2>
                        <h2>${getIndex()}</h2>
                    </div>
                    <div class="type">${gettype()}</div>
                    <img class="imgInfoCard" src="${pokemon['sprites']['other']['home']['front_default']}">
                    <div class="data-card"></div>
                </div>
            </div>
        </div>`;
}

function generateHTMLOverlay() {
    return /*html*/ `
        <div class="info-card" style="background-color:${changeBg()}"></div>`
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

function gettype() {
    let isSecondType = '';
    for (let i = 0; i < pokemon['types'].length; i++) {
        isSecondType += /*html*/ `
            <div class="type1" style="background-color:${changeBgItems()}">${pokemon['types'][i]['type']['name']}</div>`;
        }
        return isSecondType;
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
