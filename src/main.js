import { getCityID, getCityForecastById } from './utils/requests'

export default async function getForecast(cityName) {

    try {
        const cityId = await getCityID(cityName)
        const cityForecast = await getCityForecastById(cityId)

        console.log(`
    Clima em ${cityForecast.name}, ${cityForecast.state}
        Temperatura: ${cityForecast.temperature}°
        Direção do vento: ${cityForecast.wind_direction}
        Velocidade do vento: ${cityForecast.wind_velocity} km/h
        Humidade: ${cityForecast.humidity}%
        Condição: ${cityForecast.condition}
        Pressão atmosférica: ${cityForecast.pressure}
        Sensação: ${cityForecast.sensation}°
        `)
    } catch (error) {
        console.log(error.message)
    }
}