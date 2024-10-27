/* const evenNumber = [0, 2, 3, 4, 5, 6, 8, 9]


  const odd = []
  const even = []
  
const getvalue = evenNumber.filter((od, i) => {

   if (od % 2 === 1) {
    odd.push(od)
  }
  else{
    even.push(od)
  }
  
})

getvalue

console.log(odd)
console.log(even)



// SOME 

// IT IS LIKE OR OPRATORS ONE VALUE SHOULD MATCH THE CONDITON AND IT WILL RETURN TRUE
// if it find the condition true it doesn't check the other 
// exapmle there are 2 odd value it find the 3 ,it doesn't check other it will end the function because there is 9 also
// it take true value 

const resultOfEven = evenNumber.some((even, i) => {

  if (even % 2 === 1) {
    //console.log(i)
  }

  return even % 2 === 1

})

//console.log(resultOfEven)

// EVERY 

// ITS CHECK THE CONDITION AND RETURN TRUE AND FALSE 
// IF ANY CONDITION IS FALSE IT WILL RETURN FALSE, EVERY CONDITION SHOULD BE TRUE



const oddNumber = [1, 3, 5, 7, 9, 12]

const resultOfOdd = oddNumber.every((odd, i) => {
  console.log(odd, odd % 2 === 1)
  return odd % 2 === 1
})

console.log(resultOfOdd)

// HERE RETURN VALUE IS FALSE BECAUSE 12 IS EVEN NUMBER */