
const characters = [ { 
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
     }, 
    { 
    name: "Leia Organa", 
    height: 160,
    gender: "female", 
    mass: 56,
    eye_color: "blue",
     }, 
    { 
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
     },
     { 
    name: "Chewie",
    height: 222, 
    gender: "male",
    mass: 190,
    eye_color: "black",
     },
     {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2, 
    eye_color: "red",
     },
];

// 1. Get the first name of a character whose mass is more than 75.
let massMoreThan75 = characters.find(character => character.mass > 75 )
console.log(massMoreThan75.name)
// 2. Get the first eye color of a character shorter than 180.
let eyeColor = characters.find(character => character.height > 180)
console.log(eyeColor.eye_color)
// 3. Get characters whose height is greater than 150 but less than 210.
let heightDiff = characters.filter(character => character.height > 150 && character.height  < 210  )
console.log(heightDiff);
// 4. Get all female characters.
let female = characters.filter(character => character.gender == "female")
console.log(female);
// 5. Get an array of all eye colors only.
let allEyeColors = characters.map(character => character.eye_color)
console.log(allEyeColors);
// 6. Get an array of all masses only.
let allMasses  = characters.map(character => character.mass)
console.log(allMasses);
// 7. Sort by name alphabetically (A to Z).
let alphabetically = characters.map(character => character.name)
let sortedName = alphabetically.sort()
console.log(sortedName);
// 8. Sort by height (low to high).
let lowToHigh = characters.map(character => character.height)
let sortedHigth = lowToHigh.sort()
console.log(sortedHigth);
// 9. Does every character have a height greater than 100?
let heightGreaterThan100 = characters.every(character => character.height > 100)
console.log(" Does every character have a height greater than 100?",heightGreaterThan100);
// 10. Is every character lighter than 200?
let lighterThan200 = characters.every(character => character.mass < 200)
console.log("Is every character lighter than 200?",lighterThan200);
// 11. Is there at least one character with black eyes?
let characterWithBlackEyes = characters.some(character => character.eye_color == "black")
console.log("Is there at least one character with black eyes?",characterWithBlackEyes);
// 12. Is there at least one character with a height of exactly 177?
let heightOfExactly177 = characters.some(character => character.height == 177 )
console.log("Is there at least one character with a height of exactly 177? ", heightOfExactly177);