
  
  
  //alert('hello')
  //confirm('are you sure')
  //prompt('hello')
/* 
    const para = document.querySelector('.para')

    let myName = 'prabin Moktan is bring good in frontend  '
    para.innerHTML = myName


    const PADSTART = '9808'

    const hiddenNumber = PADSTART.padStart(16, '*')

    console.log(hiddenNumber)
 */
/* 
     
  /* 
    let hex = '#'
    
    
    const get = ()=>{
      
    return "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();z
    
  }
    
    document.querySelector('body').style.backgroundColor = get()
    
    
    console.log(get()) */


    /*       const number = '@gmail.com'
      console.log(number.length)
      console.log(number.padStart(17, '*' )) */

      /*  prompt example
      const a = prompt('enter a value');
      const b = prompt('enter b value')

      console.log(Number(a) + Number(b))
 */

/*  conform example
const conform = confirm('are you sure? to exit')

 if(conform == true){
  console.log('exit')
 }
 else{
  console.log('stay')
} */




/*   

  // assign opreators
  let a = 10
  let b ='10'
  
  //equal opreator & strick equal opreator
  console.log(a == b) // true 
  
  console.log(a === b) // false because a is number and b is String 
  
  //not equal to & strick not equal
  console.log(a != b) // false 
  console.log(a !== b) // true 
  
  //greater than & greater Or equal
  console.log( a > b) // false 
  console.log(a >= b) //true
  
  //less than & less or equal
  console.log( a < b) //false
  console.log(a <= b) //true 
  
 */


/*   

//logical opretors 

// && (and) opreators the both statement should be true
console.log((2 < 3) && (5 > 2)) // true 
console.log((2 < 3) && (5 < 2)) // false 
new Date().getDay()

// || (or )  opreators one statement should true
console.log((2 < 3) && (5 > 2)) // true
console.log((2 < 3) && (5 > 2)) // true 

*/


/* const userName = prompt('Enter your Name') || 'prabin'
const age = prompt('Enter your age') || 18
const gender = prompt('Enter gender') || "He/She"


if(age >= 18 && age <= 25 ){
  console.log(`i'm ${userName} i am ${age} ${gender == 'male' ? 'he' : 'she'} is Frontend Dev`)
}

if (age > 25)  {
      console.log(`${userName} is ${age}. and ${gender == 'male' ? 'he' : 'she'} is Frontend Dev `)
    } */

/* 
const day = new Date().getDay()

console.log(new Date().getDay())

switch (day) {
  case 1: 
  console.log('sunday')
  break
  case 2:
    console.log('monday')
    break
    case 3:
      console.log('tueday')
      break
      case 4:
        console.log('wednesday')
        break
    case 5:
      console.log('thursday')
      break
    case 6:
      console.log('friday')
      break
    case 7:
      console.log('saturday')
      break
      //The default keyword specifies the code to run if there is no case match
      default:
        console.log('please choose the number between 1-7') 
        break
        
      } */

     
     /*   const user = 'prabin'
     const age = 17
     
     switch (true) {
      case (age > 0 && age < 18):
        console.log(`${user} is school student`)
        break
    case (age >= 18 && age <= 26):
      console.log(`${user} is a colleage student`)
      break;
    } */