
// Array 1 
let portalLocations = ["Drellyn's Ferry", "Zathar House", "Osteroc", "Mines"];

// use console.log to print the array to the console
console.log(portalLocations);

/* 1. -------------------------------------------------
Practice adding and removing elements from an array using .unshift, .shift, .push, .pop */

//Add a location to the beginning of the array.

portalLocations.unshift("Toron");
console.log(portalLocations);

//Add a location to the end of the  array.

portalLocations.push("Dennovar");
console.log(portalLocations);


// Remove the first location from the array

portalLocations.shift();
console.log(portalLocations);


// Remove the last location from the array

portalLocations.pop();
console.log(portalLocations);


/* 2. -------------------------------------------------
Wrap statements in a function so you can call them at will. */

// Wrap one or more of the previous steps in a function and call the function. 

function addLocations() {
    portalLocations.unshift("Toron");
    portalLocations.push("Dennovar");
    console.log(portalLocations);
}

function removeLocations() {
    portalLocations.shift();
    portalLocations.pop();
    console.log(portalLocations);
}

addLocations();
removeLocations();

/* 3. -------------------------------------------------
Use the index of an element to find, add, and remove elements from the array
Practice wrapping your statements in a function and calling them. */

// Find the index of "Mines"

function findMines() {
    portalLocations.indexOf("Mines");
    console.log("testMinesIndex: ",portalLocations.indexOf("Mines"));
}

findMines();

// add "Hell" to portalLocations after "Zathar House" and before "Osteroc"

function addHell() {
    portalLocations.splice(2,0,"Hell");
    console.log("testHellAdd: ",portalLocations);
}

addHell();

// Change "Hell" to "Ghost Lord's Keep"

function addGLK() {
    portalLocations.splice(2,1,"Ghost Lord's Keep");
    console.log("testGLK: ",portalLocations);
}

addGLK();

// remove "Ghost Lord's Keep" from portalLocations

function removeGLK() {
    portalLocations.splice(2,1);
    console.log("removeGLK: ",portalLocations);
}

removeGLK();

// Array 2

// write a for loop to recreate splice helper function
