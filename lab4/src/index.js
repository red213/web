import {getAboutMe} from './view';
import {getPokemon} from './pokemon'

document.getElementById('viewTab').onclick = getAboutMe;
document.getElementById('pokemonTab').onclick = getPokemon;

getAboutMe();