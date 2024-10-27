/* 
// DESTRUCTURING OF ARRAY

const colors = ['red', 'blue', 'green', 'yellow', 'sykblue']

//const [, , third] = colors // green

// we can use {} to bracket because behind the since the array is object
const {4: sky} = colors // skyblue

console.log(sky)


//  OBJECT

const user = {
  name: 'prabin',
  age: 18,
  address: {
    city: 'kapan',
    state:'kathmandu'
  }
}


//const {address} = user
//const {city} = address 

// multi-destructuring 

const { address: { city } } = user 
console.log(city)

// USING DESTRUCTURING IN FUNCTION WITH ARRAY


function usingArrayInDestructuring1([,,,,sky]) {
  console.log(sky)
}

function usingArrayInDestructuring2({4: sky}) {
  console.log(sky)
}


usingArrayInDestructuring1(colors)
usingArrayInDestructuring2(colors)





// USING DESTRUCTURING IN FUNCTION WITH OBJECT

function usingObjectInDestructuring1({address}) {
  console.log(address)
}

function usingObjectInDestructuring2({address:{city}}) {
  console.log(city)
}

usingObjectInDestructuring1(user)
usingObjectInDestructuring2(user) */