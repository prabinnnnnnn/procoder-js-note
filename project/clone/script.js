const inputFields = document.querySelectorAll('.input-text')
const chechBoxs = document.querySelectorAll('.checkBox')
const warningText = document.querySelector('.warning-text')
const day = document.querySelector('.day')
const todayDate = document.querySelector('.date')
const taskComleteText = document.querySelector('.task')
const progressBar = document.querySelector('.progress-bar')
const quort = document.querySelector('.quort')
const addButton = document.querySelector('.add-button')
const container = document.querySelector('.container')
const todoCard = document.querySelector('.todo-card')

const object = {}

const quorts = [
  'Raise the bar by completing your goals!',
  'Well done you have complete your first task',
  'You are doing great!',
  'favalous, greate job ',
  'whooyaa ! ',
  'Bhooya! you have complete all the task'
]


const week = [
  'Sunday','Monday','Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday'
]

let date = new Date()
day.innerHTML = `${week[date.getUTCDay()]}`
const getDate = setInterval(function () {
  const date = new Date
  return todayDate.innerHTML = date.toLocaleTimeString()
}, 1000)

taskComleteText.innerHTML = `0/${inputFields.length} Completed`
warningText.innerHTML = `Please set all the ${inputFields.length} goals!`


chechBoxs.forEach((box) => {

  box.addEventListener('click', () => {
    
    const inputValues = [...inputFields].every((input) => {
      return input.value

    })

    if (inputValues) {
      box.parentElement.classList.toggle('complete')
      const inputId = box.nextElementSibling.id
      object[inputId].complete = !object[inputId].complete
      let trueValue = Object.values(object).filter(e => e.complete).length
      progressBar.style.width = `${(100 * trueValue) / inputFields.length}%`
      console.log(trueValue)
      quort.innerHTML = quorts[trueValue]
    }

    else {
      warningText.parentElement.classList.add('warning')
    }

  })
})


inputFields.forEach((input) => {
  // remove the warning text
  input.addEventListener('focus', () => {
    warningText.parentElement.classList.remove('warning')
  })

  
  input.addEventListener('input', (e) => {
    const random = Math.floor(Math.random() * 1000) + 1
    input.setAttribute('id', random )

    object[input.id] = {
      value: e.target.value,
      complete: false
    }
  })

})


addButton.addEventListener('click', () => {
  container.appendChild(todoCard.cloneNode(true))
})




