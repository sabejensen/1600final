import {anime} from "/assets/anime.js"

let animeCards = document.querySelector("#card-div");
var locationVar = animeCards;

const cardFunction = (element => {
    let currentID = element.mal_id;

    let cardWrap = document.createElement("div");
    cardWrap.className = "cardWrap";
    cardWrap.id = currentID;
    locationVar.appendChild(cardWrap);

    let outerWrap = document.getElementById(currentID)

    let currentID2 = element.mal_id + "x";
    
    let cardWrapInt = document.createElement("div");
    cardWrapInt.className = "cardWrapInt";
    cardWrapInt.id = currentID2;
    outerWrap.appendChild(cardWrapInt);

    let innerWrap = document.getElementById(currentID2)

    let currentID3 = element.mal_id + "y";

    let cardFront = document.createElement("div");
    cardFront.className = "cardFront";
    cardFront.id = currentID3;
    innerWrap.appendChild(cardFront);

    let frontside = document.getElementById(currentID3)

    let imgsrc = document.createElement("img");
    imgsrc.src = element.image_url;
    frontside.appendChild(imgsrc);

    let currentID4 = element.mal_id + "z";

    let cardBack = document.createElement("div");
    cardBack.className = "cardBack";
    cardBack.id = currentID4;
    innerWrap.appendChild(cardBack);

    let backside = document.getElementById(currentID4)


    let cardTitle = document.createElement("h8");
    cardTitle.textContent = element.title;
    backside.appendChild(cardTitle);

    let cardBreak = document.createElement("hr");
    backside.appendChild(cardBreak);

    let showScore = document.createElement("p");
    showScore.textContent = "Community Score: " + element.score;
    backside.appendChild(showScore);
    
    let epCount = document.createElement("p");
    epCount.textContent = "Episodes: " + element.episodes;
    backside.appendChild(epCount);

    let trailerTitle = document.createElement("p");
    trailerTitle.textContent = "Trailer:"
    backside.appendChild(trailerTitle);

    if(element.trailer_url !== null) {
        let trailer = document.createElement("iframe");
        trailer.src = element.trailer_url;
        backside.appendChild(trailer);
    } else {
        let noTrailer = document.createElement("p");
        noTrailer.textContent = "The trailer for this title is unavailable.";
        backside.appendChild(noTrailer);
    }

    let studio = document.createElement("p");
    studio.textContent = "Studio: " + element.studios[0].name;
    backside.appendChild(studio);

    let relYear = document.createElement("p");
    relYear.textContent = "Year: " + element.aired.prop.from.year;
    backside.appendChild(relYear);

    let showSource = document.createElement("p");
    showSource.textContent = "Source: " + element.source;
    backside.appendChild(showSource);

    let showGenres = document.createElement("p");
    showGenres.textContent = "Genres: " + element.genres[0].name + ", " + element.genres[1].name;
    backside.appendChild(showGenres); 


    let cardFlip = document.getElementById(currentID2);
    cardFlip.addEventListener('click', function() {
    cardFlip.classList.toggle('is-flipped');
    });
}); 

anime.forEach(cardFunction);

let newCardDiv = document.createElement("div");
newCardDiv.id = "new-card-sec";
animeCards.appendChild(newCardDiv);

locationVar = newCardDiv;


let bonusCard = [
    {
    mal_id: 31964,
    image_url: "https://myanimelist.cdn-dena.com/images/anime/10/78745.jpg",
    trailer_url: "https://www.youtube.com/embed/D5fYOnwYkj4",
    title: "Boku no Hero Academia",
    source: "Manga",
    episodes: 13,
    aired: {
        prop: {
            from: {
                year: 2016
            },
        },
    },
    score: 8.43,
    studios: [
        {
        name: "Bones",
    }],
    genres: [
        {
        name: "Action",
        },
        {
        name: "Comedy",
    }],
    },
    {
    mal_id: 21603,
    image_url: "https://cdn.myanimelist.net/images/anime/11/61519.jpg",
    trailer_url: "https://www.youtube.com/embed/J4KkvN2qipg",
    title: "Mekakucity Actors",
    source: "Music",
    episodes: 12,
    aired: {
        prop: {
            from: {
                year: 2014
                },
            },
        },
    score: 7.18,
    studios: [
        {
        name: "Shaft",
        }],
    genres: [
        {
        name: "Sci-Fi",
        },
        {
        name: "Comedy",
        },
        {
        mal_id: 31,
        type: "anime",
        name: "Super Power",
        url: "https://myanimelist.net/anime/genre/31/Super_Power"
    }]
    },
    {
    mal_id: 16742,
    image_url: "https://cdn.myanimelist.net/images/anime/12/51619.jpg",
    trailer_url: "https://www.youtube.com/embed/IJjsjU0Dwpo",
    title: "Watashi ga Motenai no wa Dou Kangaetemo Omaera ga Warui!",
    source: "Web manga",
    episodes: 12,
    aired: {
        prop: {
            from: {
                year: 2013
                },
                },
            },
    score: 7.22,
    studios: [
        {
        name: "Silver Link.",
        }],
    genres: [
        {
        name: "Slice of Life",
        },
        {
        name: "Comedy",
        }]
    },
    {
    mal_id: 10800,
    image_url: "https://cdn.myanimelist.net/images/anime/3/35749.jpg",
    trailer_url: null,
    title: "Chihayafuru",
    source: "Manga",
    episodes: 25,
    aired: {
        prop: {
            from: {
                year: 2011
                },
            },
        },
    score: 8.28,
    studios: [
        {
        name: "Madhouse",
        }],
    genres: [
        {
        name: "Drama",
        },
        {
        name: "Game",
        }]
    },
];



let animeButton = document.createElement("button");
animeButton.textContent = "Press for New Card";
animeCards.appendChild(animeButton);

animeButton.addEventListener("click", () => {
    var rng = Math.floor(Math.random() * 5)
    cardFunction(bonusCard[rng])
    bonusCard[rng].mal_id++;
})



// swap trailer out for synopsis when null on final version. 
// Synopsis can be pulled out in a box and toggled.

// there are 39 vehicles in the vehiclesArray
// add radio buttons so that the user can do a random film, 
// character, planet, species, starship, or vehicle from Star Wars


