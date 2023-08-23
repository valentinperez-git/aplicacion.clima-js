let urlBase = 'https://api.openweathermap.org/data/2.5/weather'
let api_key = 'a236c59426cc41c96896c0977b4a03ea'
let difKelvin = 273.15


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
})

function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
    .then(data => data.json())
    .then(data => mostrarDatosClima(data))
}

function mostrarDatosClima(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const descripcion = data.weather[0].description
    const humedad = data.main.humidity
    const icono = data.weather[0].icon

    const ciudadTitulo = document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent = `La temperatura es ${Math.floor(temperatura-difKelvin)}ºC`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`

    const descripcionInfo = document.createElement('p')
    descripcionInfo.textContent = `La descripcion meteorològica es: ${descripcion}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(descripcionInfo)
    divDatosClima.appendChild(iconoInfo)
}
    