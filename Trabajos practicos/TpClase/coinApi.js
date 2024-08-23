require('dotenv').config({path:'..../.env'})
process.env.api_key;

const apiKey = api_key
const url = ' https://rest.coinapi.io/v1/exchanges'
const fetchData = async () => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-CoinAPI-Key': apiKey
            }
        })

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText)
        }
        const data = await response.json()
        data.forEach(exchange => {
            console.log('Nombre:', exchange.name)
            console.log('Volumen en 1 hora:', exchange.volume_1hrs_usd)
            console.log('Volumen en 1 dia:', exchange.volume_1day_usd)
            console.log('-----------------------------------')
        })
    } catch (error) {
        console.error('Hubo un problema con el Fetch:', error)
    }
}

window.onload = fetchData