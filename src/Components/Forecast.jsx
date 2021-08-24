import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearchLocation,
  faCloudSun,
  faCloudRain,
  faSmog,
  faBolt,
  faSnowman,
  faSun,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import moment from "moment"

const Forecast = ({ forecastDaily, forecastHourly, icon }) => {
  let weatherIcons = null

  if (icon === "Haze") {
    weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
  } else if (icon === "Thunderstorm") {
    weatherIcons = <FontAwesomeIcon icon={faBolt} size="lg" color="#212121" />
  } else if (icon === "Drizzle") {
    weatherIcons = (
      <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
    )
  } else if (icon === "Rain") {
    weatherIcons = (
      <FontAwesomeIcon icon={faCloudRain} size="lg" color="#212121" />
    )
  } else if (icon === "Snow") {
    weatherIcons = (
      <FontAwesomeIcon icon={faSnowman} size="lg" color="#212121" />
    )
  } else if (icon === "Mist") {
    weatherIcons = <FontAwesomeIcon icon={faSmog} size="lg" color="#212121" />
  } else if (icon === "Clear") {
    weatherIcons = <FontAwesomeIcon icon={faSun} size="lg" color="#212121" />
  } else if (icon === "Clouds") {
    weatherIcons = <FontAwesomeIcon icon={faCloud} size="lg" color="#212121" />
  }

  return (
    <section class="bg-offWhite row-span-2 col-span-2 rounded-r-3xl">
      <div class="py-8 px-4 flex  items-center justify-between ">
        <div class="flex gap-x-4">
          <p>Today</p>
          <p>Week</p>
        </div>
        <div class="flex gap-x-4">
          <button
            class="bg-darkGray text-white active:bg-pink-600 font-bold uppercase text-base py-2 px-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            <p class="flex ">°F</p>
          </button>
          <button
            class="bg-white text-darkGray active:bg-pink-600 font-bold uppercase text-base py-2 px-2.5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
          >
            <p class=" flex ">°C</p>
          </button>
        </div>
      </div>

      {/* Forecast Daily */}
      <div class="flex flex-row gap-2 mx-4  text-center text-sm ">
        {forecastDaily.slice(0, 5).map((data, index) => {
          return (
            <div
              class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3"
              key={index}
            >
              <p class="">{data.weather[0].description}</p>
              {weatherIcons}
              <p class="flex gap-x-2">
                {Math.floor(data.temp.max)}
                {"°"}
                <span class="text-lightGray">
                  {Math.floor(data.temp.min)}
                  {"°"}
                </span>
              </p>
            </div>
          )
        })}
      </div>

      {/* Forecast Hourly */}

    </section>
  )
}

export default Forecast
