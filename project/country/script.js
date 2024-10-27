
const darkModeBtn = document.querySelector('.darkModeBtn')
const navBar = document.querySelector('.navBar')
const countryCards = document.querySelector('.country-cards')
const searchBar = document.querySelector('.search-bar')




let isDarkModeOn = false

darkModeBtn.addEventListener('click', () => {
  if (!isDarkModeOn) {
    darkModeBtn.style.marginLeft = '50%'
    document.body.style.backgroundColor = '#475569'
    navBar.style.backgroundColor = '#94A3B8'
    isDarkModeOn = true
  }
  else {
    darkModeBtn.style.marginLeft = '0%'
    document.body.style.background = '#fff'
    navBar.style.backgroundColor = '#fff'
    isDarkModeOn = false
  }
})



function getsearch() {
  return searchBar.addEventListener('input', (e) => {
   e.target.value = value
  })
}



fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then((data) => data.map((country) => {
    const countryCard = document.createElement('div')
    countryCard.classList.add('country-card')
    countryCard.innerHTML = `
            <img src= ${country.flags.png} alt="">
            <div class="flex items-start flex-col gap-3 py-6">
              <h2 class="text-[20px] font-[Gilroy-bold]">${country.name.common}</h2>
              <p>Population: ${country.population} </p>
              <p>Region: ${country.continents} </p>
              <p>Capital: ${country.capital} </p>
            </div>
    `
    countryCards.append(countryCard)
  }))



