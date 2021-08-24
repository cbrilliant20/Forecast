import "./App.css"
import axios from "axios"
import Overview from "./Components/Overview"
import Forecast from "./Components/Forecast"
import Highlights from "./Components/Highlights"
import { useEffect, useState } from "react"

const URL = `https://api.openweathermap.org/data/2.5/onecall`
const API_KEY = `10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`

function App() {
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [city, setCity] = useState("")
  const [temperature, setTemperature] = useState(null)
  const [humidity, setHumidity] = useState(null)
  const [sunrise, setSunrise] = useState(null)
  const [sunset, setSunset] = useState(null)
  const [icon, setIcon] = useState("")
  const [forecastDaily, setForecastDaily] = useState([])
  const [forecastHourly, setForecastHourly] = useState([])
  // const [loading, seLloading] = useState(true)
  const [weatherDescription, setWeatherDescription] = useState(null)
  const [weatherMain, setWeatherMain] = useState(null)
  const [current, setCurrent] = useState([])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude)
      setLongitude(position.coords.longitude)
    })
    axios
      .get(
        `${URL}?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${API_KEY}&units=imperial`
      )
      .then((weatherData) => {
        // setloading(false)
        setTemperature(weatherData.data.current.temp)
        setSunset(weatherData.data.current.sunset)
        setSunrise(weatherData.data.current.sunrise)
        setHumidity(weatherData.data.current.humidity)
        setCity(weatherData.data.timezone)
        setIcon(weatherData.data.current.weather[0].main)
        setForecastDaily(weatherData.data.daily)
        setForecastHourly(weatherData.data.hourly)
        setWeatherDescription(weatherData.data.current.weather[0].description)
        setWeatherMain(weatherData.data.current.weather[0].main)
        setCurrent(weatherData.data.current)
      })
  }, [latitude, longitude])

  return (
    <div
      className="App"
      class="bg-lightGray text-darkGray p-16 h-screen w-screen relative font-poppins "
    >
      <div class=" bg-white h-full grid grid-rows-4 grid-cols-3 rounded-3xl ">
        <Overview
          class="row-span-3"
          temperature={temperature}
          icon={icon}
          weatherMain={weatherMain}
          weatherDescription={weatherDescription}
        />
        <Forecast
          class="col-span-3 ..."
          forecastDaily={forecastDaily}
          forecastHourly={forecastHourly}
          icon={icon}
        />
        <Highlights
          class="row-span-2 col-span-2 ..."
          sunrise={sunrise}
          sunset={sunset}
          humidity={humidity}
          current={current}
        />
      </div>
    </div>
  )
}

export default App
