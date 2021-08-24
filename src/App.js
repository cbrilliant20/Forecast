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
  const [icon, setIcon] = useState("")
  const [forecastDaily, setForecastDaily] = useState([])
  const [forecastHourly, setForecastHourly] = useState([])
  const [current, setCurrent] = useState([])
  const [currentWeather, setCurrentWeather] = useState([])
  const [forecastDailyIcon, setForecastDailyIcon] = useState("")
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
        setIcon(weatherData.data.current.weather[0].main)
        setForecastDaily(weatherData.data.daily)
        setForecastHourly(weatherData.data.hourly)
        setCurrent(weatherData.data.current)
        setCurrentWeather(weatherData.data.current.weather[0])
        // setForecastDailyIcon(weatherData.data.daily.weather[0].main)
      })
  }, [latitude, longitude])

  return (
    <div
      className="App"
      class="bg-lightGray text-darkGray p-12 h-screen w-screen relative font-poppins "
    >
      <div class="bg-white  h-full grid grid-rows-4 grid-cols-3 rounded-3xl ">
        <Overview
          class="row-span-3 "
          icon={icon}
          current={current}
          currentWeather={currentWeather}
        />
        <Forecast
          class="col-span-3 "
          forecastDaily={forecastDaily}
          forecastHourly={forecastHourly}
          icon={icon}
          forecastDailyIcon={forecastDailyIcon}
        />
        <Highlights class="row-span-2 col-span-2 " current={current} />
      </div>
    </div>
  )
}

export default App
