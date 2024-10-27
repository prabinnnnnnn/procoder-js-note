/* const months = ["January","February","March","April","May","June","July",'money']


//IT RETURN VALUE IN ARRAY
const useOfMap = months.map((month, index, array) => {
  return month
})


console.log(useOfMap)


//FILTER RETURN THE TRUE VALUE 

const useOfFilter = months.filter((month,index) => {
  return month.toLocaleLowerCase().includes('m')
})
  const restParameter1 = (...prams) => {
  return prams.reduce((attrator, pram) => {
    const add = attrator + pram
    return add
  }, 0)

}

const rst = restParameter1(1, 2, 3, 5, 6)
console.log(rst)

console.log(useOfFilter)


const students = [
  {
    name: 'prabin',
    age:18
  },
    {
    name: 'rabin',
    age:19
  },
      {
    name: 'abin',
    age:17
  },
        {
    name: 'bin',
    age:25
  },
    {
    name: 'arbin',
    age:16
},
]

const getAdultStudents = students.filter((student) => {
  return student.age >= 18
})

getAdultStudents


//REDUCE

// its add the value and make it one 
// if you don't value before {} braacess the acumalator value will be the first value of the array
// if you don't give a value before {} it will run from index 1 
// output will be ["February","March","April","May","June","July",'money']
// but the is any thing num,string ,boolean 
// output will be ["January","February","March","April","May","June","July",'money']



const year = months.reduce((accumulator, value, index, array) => {
  //console.log(accumulator) // apple
  console.log(index, value)
  return value
})


// second example 


const nums = [1, 2, 3, 4]

const useOfReduce = nums.reduce((accumulator, num) => {
  const add = accumulator + num
  console.log(add)
  return add
},0)

// if you don't give the value of acculumator it's automatly value will be the first index of array (1)
console.log(useOfReduce)


 */