/* // NORMAL FUNCTION
function normal(a) {
 console.log(a,'|| ' + typeof a) 
}

// THIS ARE THE NORMAL FUNCTION WE HAVE PASS STRING , OBJECTS, ARRAYS
normal('prabin')
normal({ name: 'prabin', age: 18 })
normal([1, 2, 3, 4])



// HIGH ORDER FUNCTION

// IF A FUNCTION TAKE , FUNCTION IN A ARGUMRNTS AND CALLS, IS CALLED HIGHER ORDER FUNCTION
function a(para) {
  para()
}

function b() {
  console.log(5 + 6)
}

a(b)

// IF A FUNCTION RETURN A FUNCION IS ALSO AN HIGHER FUNCTION ,  IN HERE ADD() HAS RETURN TH SUB() 

function add(){
  function sub(){
    console.log(5 + 6)
  }
  
  return sub
}

const getValue = add()

console.log(getValue)


// CALLBACK FUNCTION
// IF WE CALL A FUNCTION AND PASS THE THE FUNCTION , THE PASSING FUNCTION IS CALL BACK FUNCTION;

// call is an higher order function and back is callback function becaues we pass back in call fnc;

function call(called) {
  called()
}


function back() {
  console.log('hello ')
}


call(back) // this is call back function

 */


// cal;back function example of W3 school
/* function display(text) {
  document.querySelector('.para').innerHTML = text
}

function value(a,b, displayText) {
  let sum = a + b
  displayText(sum)
}


value(5,5, display) */