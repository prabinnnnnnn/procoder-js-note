// leetcode quection


//Q1)
/* var createCounter = function (n) {
    
    return function() {
      return n++
    };
};

const counter = createCounter(10)
counter()
counter()
counter()  */

//Q2)

/* var createHelloWorld = function () {
  
  return function (...args) {
    return args = 'Hello World'
  }
  
};

const f = createHelloWorld();
f();
 */


var createCounter = function (init) {

  const reset = function () {
    return init = 5
  }
  const increment =  function() {
      return init = init + 1
    }
  const decrement = function () {
      return init = init - 1
  }

  
  return { increment, decrement, reset}

};


const counter = createCounter(5)

counter.increment(); // 6
counter.reset(); // 5
counter.decrement(); // 4

const counter1 = createCounter(0)
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
counter.reset(); // 0
counter.reset(); // 0