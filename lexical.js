/*'use strict' 

it is used to prevent from this type of declaration

age = 10 
console.log(age) */


/* const userName = 'prabin'

function getName() {
  console.log(userName)
  return userName

}

// here the userName lexical scope is getName() local scope and the global scope
getName() */

/* 
const myName = 'prabin'


function Father() {
  const father = 'bau'
  //mother = 'aama'
 console.log(father)

    function son() {
      const son = `iam son of ${father}`
      console.log(son)

      function grandson() {
        const grandson = `iam ${myName} my father is ${father} and iam son of ${son}`
        console.log(grandson)
      }
      grandson()
    }
    son()

}

Father() */

// console.log(father) we can't excess function inner variables  

//console.log(mother) // but we can acess the value like this mother = aama not decleare by const, let and var to prevent this we should 'use strict' in top of js code 


//  LEXICAL SCOPE

// the grandson lexical scope is grandson() scope , son() scope , father() scope, and global scope son can acess the scope
// the son lexical scope is son() scope ,father() scope and global scope 
// the father lexical scope is father() scope and global scope


// CLOUSER 

//grandson  ko clouser son(), father()
//son ko clouser father()