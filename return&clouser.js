/* const a = 10;
const b = 53;

function add() {
  console.log(a + b)
}

add()

console.dir(add) */


// CLOUSER 

// IF CHILD ACSESS THE VALUE OF PARENT AND PARENT RETURN CHILD IT FORM A CLOUSER , CLOUSER HAVE VALUE OF THE PARENT IN CHILD
/* 
function grandParent() {

  const c = 6
  const d = 6
  
  function parent() {
  
  const a = 5
  const b = 5
  
  function child(){
    return a + b + c + d
  }
  
  return child
  }
  
  return parent()
  
}

const getValue = grandParent()

console.dir(getValue) */

// IT WILL FORM A TWO CLOUSER , PARENT CLOUSER AND GRANDPARENT CLOUSER BECAUSE CHILD HAD USED THE PARENT VALUE AND GRANDPARENT



// ONE TIME EXECUTION OF CODE


/* function getValue() {
  let execution = false
  
  return function () {
    if (!execution) {
      execution = true
      console.log('function is run')
    }
  }
}

const val = getValue()

val()
val()

console.dir(val) */