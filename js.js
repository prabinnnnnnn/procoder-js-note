/* const myName = 'moktan'

const obj = {
  first_Name: 'prabin',
  last_Name:myName,
  age: 18,
  address:{
    localAddress: 'kapan',
     permenent_address: 'sindhuli'
    
  }

}

Object.seal(obj)
Object.freeze(obj)
obj.address.phoneNumber = 98076573932 // add
delete obj.age
obj.age = 19
console.log(obj) */

  //use of [] js ko out of scope value haru excess garna milcha console.log(obj)
// obj.address.phoneNum = 9820389409 used to add the value in obj console.log(obj)

//delete obj.last_Name  // used to delet value from obj console.log(obj)


// Object.seal('object') is used to seal the object, which make object can't add & remove value

/* Object.seal(obj)

obj.gender = 'male' // the value has not add in object
obj.first_Name = 'Prabin Moktan' // but we can change the value

console.log(obj) */

//Object.freeze(obj) freeze is used to freeze the object, which make object can't add & remove value and change the value

/* console.log(obj)
obj.first_Name = 'prabinnnnn_'
obj.gender = 'male' */

//console.log('first_Name' in obj) in is used to check the key is exisist or not => result (true) because first_Name is exisist in object


/* const arr = ['apple', 'mango', 'banana', 'lichi', 'guva']

//const newarr = arr.slice(0, 3)
//console.log(newarr) out put ['apple', 'mango', 'banana']

const newarr = arr.splice(0, 3, 'grapes','quvi')

console.log(newarr)
console.log(arr)


const num = [1, 2, 3, 4]

const o = num.splice(1,1)

console.log(num) */


/* const arr = [[1, 2], ['apple', 'banana']]
arr[1].push('mango')

console.log(arr)

console.log(arr[1][0]) // apple // thats how the mutidimensional array are get


const ticTok = [
  ["X", null, null],
  [null, null, 'O'],
  ['O', null, 'X']
]

console.log(ticTok) */

/* const name = 'prabin'
// FOR ARRAYS and OBJECT


const arr = [1, 2, 3, 4, 5]
const arrShallowCopy = arr
arrShallowCopy.push(6)

console.log(arr)
console.log(arrShallowCopy)
console.log(arr === arrShallowCopy)


// shallow copy
const array = [1, 2, 3, 4, 5]
const arrayDeepCopy = [...array] // Es6 (...) spread opreators
//const arrayDeepCopy = [].concat(array) using concat()
//Object.assign(arrayDeepCopy,array) old style
//const arrayDeepCopy = array.slice()
array.push(66)

console.log(array)
console.log(arrayDeepCopy)
console.log(array === arrayDeepCopy) // false because deepcopy have different address 


// DEEP COPY
const obj = {
  firstName: 'prabin',
  lastName: 'Moktan', 
  address: {
    city: 'ktm',
    pincode: 23457
  }
  
}

//const obj1 = {...obj} // shallow copy

const obj1 = JSON.parse(JSON.stringify(obj)) // deep copy

obj.firstName = 'Ravi'
obj.address.city = 'pokhara'

console.log(obj)
console.log(obj1) */


// COMPOUND OPREATORS

/* num = num + 10 // short num += 10 
num = num - 10 // num -= 10
num = num * 10 // num *= 10
num = num / 10 // num /= 10
num = num % 10 // num %= 10
num = num + 1 // increment ++num / num++ 
num = num - 1 // decrement --num / num-- */


/* let num = 5
let numa = num++ // if the ++ num paxi cha vhani num value chai change huncha tara asign garey ko value ma old value dekhauncha
console.log(numa) result (5)
console.log(num) result (6) */

/* let numa = ++num
console.log(numa) //result (6)
console.log(num) // result (6) */

// WHILE LOOP

/* let num = 0

while (num < 101) {
  num++
  console.log(num)
} 


let arr = ['rabin', 'sobin', 'nabin', 'prabin','babin']
let i = 0

console.log(arr.length)

while (i < arr.length) {
  console.log(`${i + 1}. ${arr[i] + ' lama'} `)
  i++
} */


// FOR LOOP

/* 
let array = ['rabin', 'sobin', 'nabin', 'prabin', 'babin']

let even = []
console.log(even)

for (let i = 0; i <= 100; i++){
  if (i % 2 === 0) {
     even.push(i)
   }
} */

// DO WHILE LOOP  at least it runs one time

/* let i = 0

do {
  console.log(i)
  i++
} while (i <= 5); */


// FOR OF LOOP

/* const array = ['rabin', 'sobin', 'nabin', 'prabin', 'babin']

let character = ''

for (const char of array) {
  character += char + ' '
}

console.log(character) */

// FOR IN LOOP

/* const person = {fname:"John", lname:"Doe", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}

console.log(text) */


/* function getNumber(a,b){
  const add = a * b
  return add
}

const ans = getNumber(4,5)

console.log(ans) */

/* let aname = 'prabin'


aal() // function are run in memory execution phase that why we can access the function

function aal() {
  let a = 5
  let b = 6
  console.log(a, b)
  add(5, 6)
} 

function add(x,y) {
  return x + y
}  */



/* fnc()  // we can't access this fuction before decleration we have declare variables with fnc
 
const fnc = function () {  // this type of function inizilition can't access before declear
  console.log('hello')
} */
