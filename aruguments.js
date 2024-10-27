/* // in old java script we use the arguments 

const add = function () {
  let sum = 0
  for (let add of arguments) {
    sum += add
  }
  return sum
}

const result = add(4, 6, 33, 89)

console.log(result) //(4+6+33+89 = 132)

// in ES6 we use (...)rest opreators , it is rest opreators and spread opreators kum ma use huncha tesma yesko name form huncha


const add1 = (...number) => { 
  let sum = 0
  for (let num of number) {
    sum += num
  }

  return sum
}


add1(2,4,5,6,89292) // output 89309


 */