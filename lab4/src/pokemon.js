async function getAbility(url) {
    let response = await fetch(url);
    let json = await response.json();
    return json.effect_entries[0].effect;
}

export async function getPokemon() {
    document.getElementById("main").innerHTML = await getPokemonInfo('piplup');
}

async function getPokemonInfo(pokemonName) {
    const url = 'https://pokeapi.co/api/v2/pokemon/${pokemonName}/';
    let response = await fetch(url);
    let pokemonInfo = '<section id = "pokemonInfo"> <h2 id = "name">${pokemonName} abilities </h2><div id="abilities">';
    let json = await response.json();

    for (let i = 0; i < json.abilities.length; i++) {
        let abilityName = json.abilities[i].ability.name;
        let abilityURL = json.abilities[i].ability.url;
        let abilityDescription = await getAbility(abilityURL);
        pokemonInfo += '<div class="ability"><h2 class = "abilityName">${abName}</h2><br><span class="description">${abilityDescription}</span></div>';
    }
    pokemonInfo += '</div></section>';
    return pokemonInfo;
}