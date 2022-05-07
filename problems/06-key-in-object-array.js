/***********************************************************************
Write a function `keyInObjectArray(objArray, keyString)` that takes in an array
of objects as the first parameter and a string as the second. The
`keyInObjectArray` function will return `true` if any of the objects contains
the `keyString` as a key within them, and `false` if not.

//understand: the function should determine if the string is witihn the object array
//returns a BOOLEAN
//FOR LOOP through the object array
//use an if statement to get the BOOLEAN
//if an objectkey in arr === string, return true
//set a variable as objects.key(objArray) for object array.
//that pulls keys ^ if the key === keystring return true

***********************************************************************/

let objArray = [
  { name: "Rupert" },
  { age: 42 },
  { planet: "Earth", system: "Milky Way" }
];



function keyInObjectArray(objArray, keyString) {
 // let keys = Object.keys(objArray);
for (key of objArray){
  if (keyString === key){
    return true
  }
}
return false;
}


Examples:


keyInObjectArray(objArray, 'planet'); // => true
keyInObjectArray(objArray, 'age'); // => true
keyInObjectArray(objArray, 'food'); // => false
keyInObjectArray(objArray, 'animal'); // => false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = keyInObjectArray;
