import {vehicles} from "/assets/vehicles.js"
import {people} from "/assets/people.js"
import {species} from "/assets/species.js"
import {planets} from "/assets/planets.js"
import {starships} from "/assets/starships.js"
import {films} from "/assets/films.js"

// proper use of import/export statements

const vehiclesArray = vehicles.map(vehicles => vehicles.name);
const filmsArray = films.map(films => films.title);
const peopleArray = people.map(people => people.name);
const speciesArray = species.map(species => species.name);
const planetsArray = planets.map(planets => planets.name);
const starshipsArray = starships.map(starships => starships.name);

let RBVehicles = document.getElementById("rbvehicles")
let RBFilms = document.getElementById("rbfilms")
let RBPeople = document.getElementById("rbcharacters")
let RBPlanets = document.getElementById("rbplanets")
let RBSpecies = document.getElementById("rbspecies")
let RBStarships = document.getElementById("rbstarships")


let randomSW = document.getElementById("randomSW");

const ranButton = document.getElementById("randomButton")

RBVehicles.onclick = function() {
    randomSW.innerHTML = "<br>"
    ranButton.textContent = "Random Vehicle";
}
RBFilms.onclick = function() {
    randomSW.innerHTML = "<br>"
    ranButton.textContent = "Random Film";
}
RBPeople.onclick = function() {
    randomSW.innerHTML = "<br>"
    ranButton.textContent = "Random Character";
}
RBPlanets.onclick = function() {
    randomSW.innerHTML = "<br>"
    ranButton.textContent = "Random Planet";
}
RBSpecies.onclick = function() {
    randomSW.innerHTML = "<br>"
    ranButton.textContent = "Random Species";
}
RBStarships.onclick = function() {
    randomSW.innerHTML = "<br>"
    ranButton.textContent = "Random Starship";
}

ranButton.onclick = function() {
    if(RBVehicles.checked) {
        const x = Math.floor(Math.random() * (39));
        randomSW.textContent = vehiclesArray[x];
    } 
    if (RBFilms.checked) {
        const x = Math.floor(Math.random() * (7));
        randomSW.textContent = filmsArray[x];
    }
    if (RBPeople.checked) {
        const x = Math.floor(Math.random() * (87));
        randomSW.textContent = peopleArray[x];
    }
    if (RBPlanets.checked) {
        const x = Math.floor(Math.random() * (61));
        randomSW.textContent = planetsArray[x];
    }
    if (RBSpecies.checked) {
        const x = Math.floor(Math.random() * (37));
        randomSW.textContent = speciesArray[x];
    }
    if (RBStarships.checked) {
        const x = Math.floor(Math.random() * (37));
        randomSW.textContent = starshipsArray[x];
    }

}


if(document.getElementById("red").checked = true) {

}