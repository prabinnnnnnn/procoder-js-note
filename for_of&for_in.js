//const fruits = ['apple', 'mango', 'kera', 'grapes', 'pear']


/* for (let i = 0; i < fruits.length; i++) {
  const element = fruits[i];
  console.log(element)
  }  */
 
 //FOR ARRAY WE CAN USE FOR OF LOOP 
 // its is easy and short code to loop an array,string, typedArray, map, set, node list  we can't use in object
 
 /* for (const fruit of fruits) {
  console.log(fruit)
  } */
 
/* const numbers = [20, 30, 50, 64, 75]
 
let total = 0
for (const num of numbers) {
  total += num
}

console.log(total) */

//  FOR OBJECT WE USE FOR IN LOOP TO ITRRATE THE OBJ

/* const personDetails = {
  userName: 'prabin',
  age: 18,
  level: 'Juinor',
  work:'Frontend Dev'
}

for (const key in personDetails) {
  console.log(key,':',personDetails[key])
}

// you can use find the key of the object 

for (const key in personDetails) {
  if (Object.prototype.hasOwnProperty.call(personDetails, key)) {
    const element = key + ' : ' + personDetails[key];
    console.log(element)
  }
} */



