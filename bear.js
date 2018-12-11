function Bear(name, type, mood) {

   const x = (Math.floor(Math.random() * 25) + 1);
   this.name = name;
   this.age = x;
   this.type = type;
   this.mood = mood;
   this.fur = "Very soft"
   this.introduction = () => `Hi human! My name is ${this.name}! I'm a ${this.type}!`
}

// use of constructor and template literal
// proper use of arrow function

const bearButton = document.getElementById("bear-button")

let nameOut = document.getElementById("bear-name-out")
let ageOut = document.getElementById("bear-age-out")
let typeOut = document.getElementById("bear-type-out")
let moodOut = document.getElementById("bear-mood-out")
let furOut = document.getElementById("bear-fur-out")
let introOut = document.getElementById("bear-intro")

bearButton.onclick = function() {

    let nameArray = ["Barry", "Susie B. Berrington", "Rodalpho", "Marco Polo", "Stevensen", "Buddy", "Brenda", "Smokey", "Sandy Claws", "Persephone"]

    let typeArray = ["Polar Bear", "Grizzly Bear", "Space Bear", "Teddy Bear", "Black Bear", "Koala Bear", "Panda Bear", "Coca-Cola Bear", "Nuclear Bear", "Park Ranger Bear"]
    
    let moodArray = ["Dignified", "Jovial", "Hangry", "Aloof", "Mischeivious", "Politically Active", "Fiscally Conservative", "Fearful", "Lazy", "Disgusted"]
    
    var a = Math.floor(Math.random() * 10)
    var b = Math.floor(Math.random() * 10)
    var c = Math.floor(Math.random() * 10)

    let bearName = nameArray[a];

    let bearType = typeArray[b];

    let bearMood = moodArray[c];

    let bearBuild = new Bear(bearName, bearType, bearMood)

    // use of custom JS objects

    nameOut.textContent = bearBuild.name;
    ageOut.textContent = bearBuild.age;
    typeOut.textContent = bearBuild.type;
    moodOut.textContent = bearBuild.mood;
    furOut.textContent = bearBuild.fur;
    introOut.textContent = bearBuild.introduction();
    
    // object properties accessed with dot notation
}

