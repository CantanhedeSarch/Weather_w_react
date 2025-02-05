import './WeatherInformations5days.css'

function WeatherInformations5days({ weather5days }) {
    console.log(weather5days)
    let dailyForecast = {}

    for (let forecast of weather5days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }
    const next5daysforecast = Object.values(dailyForecast).slice(1,6)
    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })
        return newDate
    }
    return (
        <div className='weather-container'>
            <h3>Proximos 5 dias: </h3>
            <div className='weatherlist'>
                {next5daysforecast.map(forecast => (
                    <div key={forecast.dt} className='weatheritem'>
                        <p className='forecastday'> {convertDate(forecast)} </p>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                        <p className='description'> {forecast.weather[0].description} </p>
                        <p> {Math.round(forecast.main.temp_min)} °C min / {Math.round(forecast.main.temp_max)}°C máx </p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default WeatherInformations5days