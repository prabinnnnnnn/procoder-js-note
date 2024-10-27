// DIFFERENT BETWEEN SPREAD AND REST PRAMS 
// SPREAD IS USED TO SPREAD THE VALUE AND REST USED TO COLLECT THE VALUE

// SPREAD OPREATORS 

// WHEN WE USE ... IN ARGUMENTS , ARRAY , OBJECT IS CALLED SPREAD OPREATORS 

/* const array1 = [1, 2, 3, 4, 5]
const array2 = [6, 7, 8, 9, 10]

const array = [...array1, ...array2]


const informations = {
  user: 'prabin',
  age: 18,
  work: 'Frontend Dev'
}


const introduction = { ...informations }
console.log(introduction)

// 

function add() {
  console.log(arguments)
  let sum = 0
  for (const args of arguments) {
    sum += args
  }
  return sum

}

const addResult = add(...array)

console.log(addResult) */


// REST PRAMS IS USED IN PARAMETER OF A FUNCTION WHAT EVER ARGUMENT THEY ARE COLLECT IN ARRAY
// IN THE IS USED IN ES6 REPLACE OF arguments

/* 
const restParameter = (...prams) => {

  console.log(prams)
  for (let rest of prams) {
    console.log(rest)
  }
}

restParameter(1,2,3,656,636) */

//  WE CAN USE REDUCE BECAUSE ARGUMENTS ARE COLLECT IN ARRAY

/* 

  const restParameter1 = (...prams) => {
  return prams.reduce((attrator, pram) => {
    const add = attrator + pram
    return add
  }, 0)

}

const rst = restParameter1(1, 2, 3, 5, 6)
console.log(rst) 

*/



