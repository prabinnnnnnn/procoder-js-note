const openBtn = document.querySelector('.open')
const popup = document.querySelector('.popup')
const backDrop = document.querySelector('.backdrop')


openBtn.addEventListener('click', () => {
  popup.parentElement.classList.add('main-container')
  popup.style.scale = '1'
})

backDrop.addEventListener('click', () => {
    popup.parentElement.classList.toggle('main-container')
})

