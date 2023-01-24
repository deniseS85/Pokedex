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
        <div class="infoOverlay" id="infoOverlay" onclick="closeOverlay(this)" style="display: none;">
            <div class="info-card" style="background-color:${changeBg()}" onclick="doNotCloseOverlay(event)">
                <div class="headlineInfoCard">
                    <img class="arrow" onclick="closeOverlay(this)" src="img/arrow.png">
                    <img onclick="changeHeartIcon(this)" class="heart" src="img/heart.png">
                </div>
                <div class="namePokemon">
                    <h2 class="name">${pokemon['name']}</h2>
                    <h2>${getIndex()}</h2>
                </div>
                <div class="type">${getType()}</div>
                <div class="middleContent">
                    <img onclick="prePokemon(this)" class="arrow-left" src="img/arrow-left.png">
                    <img class="imgInfoCard" src="${pokemon['sprites']['other']['home']['front_default']}">
                    <img onclick="nextPokemon(this)" class="arrow-right" src="img/arrow-right.png">
                </div>
                ${generateHTMLDataNav()}
            </div>
        </div>`;
}

function generateHTMLDataNav() {
    return /*html*/ `
        <div class="data-card">
            <nav>
                <a onclick="showAbout(this)" class="anchor-active linkAbout">About</a>
                <a onclick="showStats(this)" class="linkStats">Base Stats</a>
                <a onclick="showMoves(this)" class="linkMove">Moves</a>
            </nav>
            
            ${generateHTMLDataTableAbout()}
            ${generateHTMLDataBaseStats()}
            ${generateHTMLDataMoves()}

        </div>
    </div>`;
}

function generateHTMLDataTableAbout() {
    return /*html*/ `
        <table class="tableAbout">
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

function generateHTMLDataMoves() {
    return /*html*/ `
        <div class="moveContainer" style="display:none">
            ${getMoves()}
        </div>`;
}
