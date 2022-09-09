
const temp = document.querySelector('.currTemp')
const form = document.querySelector('#form')
const unit = document.querySelector('.unit')

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const city = await form.elements.city.value;
    const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b73cddb55b44e62b4a4d236b57573959`)
    var currTemp = res.data.main.temp
    const inCel = Math.round(currTemp - 273.15)
    temp.innerHTML = `${inCel}`
    unit.style.visibility = 'visible'
    form.reset()
})


