function Bear(name, type, mood) {
let x = Math.floor(Math.random() * 20);

   this.name = name;
   this.age = x;
   this.type = type;
   this.mood = mood;
   this.fur = "Very soft"

}

const bearButton = document.getElementById("bear-button")

let nameField = document.getElementById("bear-name")

let polarField = document.getElementById("polar")
let grizzlyField = document.getElementById("grizzly")
let teddyField = document.getElementById("teddy")
let spaceField = document.getElementById("space")

let adventurousField = document.getElementById("adventurous")
let jovialField = document.getElementById("jovial")
let dignifiedField = document.getElementById("dignified")
let solemnField = document.getElementById("solemn")
let hangryField = document.getElementById("hangry")

let nameOut = document.getElementById("bear-name-out")
let ageOut = document.getElementById("bear-age-out")
let typeOut = document.getElementById("bear-type-out")
let moodOut = document.getElementById("bear-mood-out")
let furOut = document.getElementById("bear-fur-out")


bearButton.onclick = function() {


    if(nameField !== null && nameField.value) {
        let bearName = nameField.value;
    } else {
        let nameArray = ["Sebastion", "Susie B. Berrington", "Barry", "Rodalpho", "Craig the Bear", "Daniel-san", "Santa Claws", "Brenda"];
        
        if(nameArray.length !== 0) {
            let bearName = nameArray.shift();
        } else {
            let bearName = "YOU MUST CONSTRUCT ADDITIONAL PYLONS"
        }
    }

    if(polarField.checked) {
        let bearType = polarField.value;
    } else if(grizzlyField.checked) {
        let bearType = grizzlyField.value;
    } else if(teddyField.checked) {
        let bearType = teddyField.value;
    } else if(spaceField.checked) {
        let bearType = spaceField.value;
    } else {
        let bearType = "Black Bear";
    }

    if(adventurousField.selected) {
        let bearMood = adventurousField.value;
    } else if(jovialField.selected) {
        let bearMood = jovialField.value;
    } else if(dignifiedField.selected) {
        let bearMood = dignifiedField.value;
    } else if(solemnField.selected) {
        let bearMood = solemnField.value;
    } else if(hangryField.selected) {
        let bearMood = hangryField.value;
    } else {
        let bearMood = "Aloof"
    }
    
    let bearBuild = new Bear(bearName, bearType, bearMood)

    nameOut.textContent = bearBuild.name;

}

// add html placeholder, then use data to construct new bear, display new bear