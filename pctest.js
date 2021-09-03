let brutteSquadde = {
    "Druid": {"Akasha": 13},
    "Rogue": {"Elektropop": 12},
    "Warlock": {"Samuel": 14},
    "Monk": {"Rabbit": 20},
    "Bard": {"Nico": 6},
}

let dashingFive = {
    "who knows": {"Dash": 1},
    "also unsure": {"Kadmos": 1},
    "it's a mystery": {"Maekkelforce": 1},
    "just hard to tell": {"Thi": 1},
    "no but for real though": {"Kull the Broken": 1},
}


function partyRoster(party) {

    let players = [];
    let classesArray = Object.keys(party);

    for (let i = 0; i < classesArray.length; i++){
        players.push(Object.keys(party[classesArray[i]])[0]);
    };

    console.log(players);
}

partyRoster(brutteSquadde);
partyRoster(dashingFive);
partyRoster(brutteSquadde, dashingFive);

// [akasha,electropop,samuel,rabbit,nico]
