let framework = {
    "home" : {
        "teamName" : "",
        "colors" : ["",""],
        "players" : [{},{}],
    },
    "away" : {
        "teamName" : "",
        "colors" : ["",""],
        "players" : [{},{}],
    },
};


function gameObject() {
    
    let structure = {
        "home" : {
            "teamName" : "Brooklyn Nets",
            "colors" : ["Black","White"],
            "players" : [
                {"playerName" : "Alan Anderson"},
                {"number" : 0},
                {"shoe" : 16},
                {"points" : 22},
                {"rebounds" : 12},
                {"assists" : 12},
                {"steals" : 3},
                {"blocks" : 3},
                {"slamDunks" : 3},
                {"playerName" : "Reggie Evans"},
                {"number" : 30},
                {"shoe" : 14},
                {"points" : 12},
                {"rebounds" : 12},
                {"assists" : 12},
                {"steals" : 12},
                {"blocks" : 12},
                {"slamDunks" : 7},
                {"playerName" : "Brook Lopez"},
                {"number" : 11},
                {"shoe" : 17},
                {"points" : 17},
                {"rebounds" : 19},
                {"assists" : 10},
                {"steals" : 3},
                {"blocks" : 1},
                {"slamDunks" : 7},
                {"playerName" : "Mason Plumlee"},
                {"number" : 1},
                {"shoe" : 19},
                {"points" : 26},
                {"rebounds" : 11},
                {"assists" : 6},
                {"steals" : 3},
                {"blocks" : 8},
                {"slamDunks" : 5},
                {"playerName" : "Jason Terry"},
                {"number" : 31},
                {"shoe" : 15},
                {"points" : 19},
                {"rebounds" : 2},
                {"assists" : 2},
                {"steals" : 4},
                {"blocks" : 11},
                {"slamDunks" : 1},
            ],
        },
        "away" : {
            "teamName" : "Charlotte Hornets",
            "colors" : ["Turquoise","Purple"],
            "players" : [
                {"playerName" : "Jeff Adrien"},
                {"number" : 4},
                {"shoe" : 18},
                {"points" : 10},
                {"rebounds" : 1},
                {"assists" : 1},
                {"steals" : 2},
                {"blocks" : 7},
                {"slamDunks" : 2},
                {"playerName" : "Bismack Biyombo"},
                {"number" : 0},
                {"shoe" : 16},
                {"points" : 12},
                {"rebounds" : 4},
                {"assists" : 7},
                {"steals" : 22},
                {"blocks" : 15},
                {"slamDunks" : 10},
                {"playerName" : "DeSagna Diop"},
                {"number" : 2},
                {"shoe" : 14},
                {"points" : 24},
                {"rebounds" : 12},
                {"assists" : 12},
                {"steals" : 4},
                {"blocks" : 5},
                {"slamDunks" : 5},
                {"playerName" : "Ben Gordon"},
                {"number" : 8},
                {"shoe" : 15},
                {"points" : 33},
                {"rebounds" : 3},
                {"assists" : 2},
                {"steals" : 1},
                {"blocks" : 1},
                {"slamDunks" : 0},
                {"playerName" : "Kemba Walker"},
                {"number" : 33},
                {"shoe" : 15},
                {"points" : 6},
                {"rebounds" : 12},
                {"assists" : 12},
                {"steals" : 7},
                {"blocks" : 5},
                {"slamDunks" : 12},
            ],
        },
    };
    
    console.log(structure);
    //console.log(structure.away.players[0]);
    //console.log(structure.home.teamName);

    //shoe size - search *.players[""] for string; record index as i; return i+2 for shoe size
    /*function shoeSize(name) {

    }*/

    //teamcolors - search *.teamname, return match.colors[] **COMPLETE**
    function teamColors(name) {
       
        let answer = [];
        let homeTeamName = structure.home.teamName;
        let awayTeamName = structure.away.teamName;


        if  (name == homeTeamName) {
            answer.push(structure.home.colors);
        } else if (name == awayTeamName) {
            answer.push(structure.away.colors);
        } else {
            answer.push("Team not found");
        }; 
        
        console.log(answer);
        return answer;

    };

    //teamColors("Charlotte Hornets");

    //teamnames - return array of team names **COMPLETE**
    function teamNames() {
        let answer = [];
        let homeTeamName = structure.home.teamName;
        let awayTeamName = structure.away.teamName;

        answer.push(homeTeamName, awayTeamName);

        console.log(answer);
        return answer;    
    };

    //teamNames();

    //playernumbers - search *.teamname, return match.[i, i+9,for <length] ***COMPLETE***
    function playerNumbers(name) {

        let answer = [];
        let homeTeamName = structure.home.teamName;
        let awayTeamName = structure.away.teamName;

        if (name == homeTeamName) {
            
            for (let i = 1; i < structure.home.players.length; i+=9) {
                answer.push(structure.home.players[i]);
                };

        } else if (name == awayTeamName) {
            
            for (let i = 1; i < structure.away.players.length; i+=9) {
                answer.push(structure.away.players[i]);
                };

        } else {
                answer.push("no result");
        };

        console.log(answer);
        return answer;

    };

    //playerNumbers("Brooklyn Nets");
    //playerNumbers("Charlotte Hornets");

    //playerstats - search *.players[""] for string; record index as i; return i+1...8 as objects with => mapping

    //bigshoerebounds - find largest shoe size; return rebounds for that player

    // mostpointsscored - player with most points

    // winningteam - team with most points

    // playerwithlongestname - player with longest name
        // create array of strings of all player names, then order by length and return [0]
    /*function playerWithLongestName() {
        let allPlayers = [];
        let longName = structure.home.players[0];
        console.log(longName.playerName.length);
    };

    playerWithLongestName(); */


    // longnamestealsaton? - boolean; find player with longest name; compare their steals vs all other steals; return true if greater
        // find player with longest name and their steals; create array of all steals and orderby large to small; if longnamesteals >= allsteals[0] then return true; else return false
    
    return structure;
};

gameObject();

