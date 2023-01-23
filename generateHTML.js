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
                ${generateHTMLDataNav()}
            </div>
        </div>`;
}


function generateHTMLDataNav() {
    return /*html*/ `
        <div class="data-card">
            <nav>
                <a onclick="openLink(this)" class="anchor-active">About</a>
                <a onclick="openLink(this)">Base Stats</a>
                <a onclick="openLink(this)">Evolution</a>
                <a onclick="openLink(this)">Moves</a>
            </nav>
            
            ${generateHTMLDataTableAbout()}
            ${generateHTMLDataBaseStats()}
            ${generateHTMLDataTableEvolution()}
            ${generateHTMLDataTableMoves()}

        </div>
    </div>`;
}

function generateHTMLDataTableAbout() {
    return /*html*/ `
        <table class="tableAbout" style="display:none">
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
        </table>`;
}

function generateHTMLDataBaseStats() {
    return /*html*/ `
       ${getStats()}`;
}

function generateHTMLDataTableEvolution() {
    return /*html*/ `
        <table class="tableEvolution" style="display:none">
            <tr>
                <td>huhu><td>
            </tr>
        </table>`;
}


function generateHTMLDataTableMoves() {
    return /*html*/ `
        <table class="tableMoves" style="display:none">
            <tr>
                <td>what><td>
            </tr>
        </table>`;
}
