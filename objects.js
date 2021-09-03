// Object 1
let playerCharacters = {
    "Druid": "Akasha",
    "Rogue": "Elektropop",
    "Warlock": "Samuel",
    "Monk": "Rabbit",
    "Bard": "Nico",
}

console.log(playerCharacters)

/* 1. Return data from an object */

// Return the value of "Warlock"

console.log("testReturnWarlock: ",playerCharacters.Warlock);

// BONUS : Return any key

const playerKeys = Object.keys(playerCharacters);
console.log("Find a player key: ",playerKeys[1]);

/* 2.  Add and remove key/value pairs */

// add the key/value pair, "Dragonborn" : "Za'a'a'a'a'thar"

playerCharacters.Dragonborn = "Za'a'a'a'a'thar";
console.log("Hi Rob!",playerCharacters);

// Remove key/value pair

delete playerCharacters.Dragonborn;
console.log("Bye Rob!",playerCharacters);


/* BONUS  */

// Refactor so the functions so they are reusable 


function addPlayer(playerClass, playerName) {
    playerCharacters[playerClass] = playerName;
    console.log(playerCharacters);
};

addPlayer("Sorcerer", "Ilshan");

function removePlayer(playerClass) {
    delete playerCharacters[playerClass];
    console.log("Bye",playerClass,"!",playerCharacters);
};

function listClass(party) {

}

/* test block for accepting user input

const readline = require('readline');

const userNewClass = [];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Which class would you like to add? ', (answer) => {
    userNewClass.push(answer);
    console.log("User typed: ",userNewClass);

    rl.close();
});

end test block for accepting user input */


/* 3. -------------------------------------------------
Change value and key */

// Change value "Nico" to "Nicolas"


// Change key "Bard" to "BestClass"


// Object 2
let efreetiBottle = {
    "index": "efreeti-bottle",
    "name": "Efreeti Bottle",
    "equipment_category": {
        "index": "wondrous-items",
        "name": "Wondrous Items",
        "url": "/api/equipment-categories/wondrous-items"
    },
    "desc": [
        "Wondrous item, very rare",
        "This painted brass bottle weighs 1 pound. When you use an action to remove the stopper, a cloud of thick smoke flows out of the bottle. At the end of your turn, the smoke disappears with a flash of harmless fire, and an efreeti appears in an unoccupied space within 30 feet of you.",
        "The first time the bottle is opened, the GM rolls to determine what happens.",
        "| d100 | Effect |",
        "|---|---|",
        "| 01-10 | The efreeti attacks you. After fighting for 5 rounds, the efreeti disappears, and the bottle loses its magic. |",
        "| 11-90 | The efreeti serves you for 1 hour, doing as you command. Then the efreeti returns to the bottle, and a new stopper contains it. The stopper can't be removed for 24 hours. The next two times the bottle is opened, the same effect occurs. If the bottle is opened a fourth time, the efreeti escapes and disappears, and the bottle loses its magic. |",
        "| 91-100 | The efreeti can cast the wish spell three times for you. It disappears when it grants the final wish or after 1 hour, and the bottle loses its magic. |"
    ],
    "url": "/api/magic-items/efreeti-bottle"
};

    // Print the value of the "name" key.

    // Print the second element of "desc"

    console.log(efreetiBottle.desc[1]);

    // Add a key value pair to efreetiBottle. The key should be called "Owner" and the value should be an array of strings that includes at least one element. 
    // ex "owner": ["Samuel", "Rabbit"]

efreetiBottle["Owner"] = ["Samuel", "Rabbit"];

    // Add another element to the "desc" array that adds to the description. 


    // Loop over the description and print each line: