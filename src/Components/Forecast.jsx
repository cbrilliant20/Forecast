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
import React, { useState } from "react"
import cloud from "../Assets/cloud.png"
import drizzle from "../Assets/drizzle.png"
import fog from "../Assets/fog.png"
import rain from "../Assets/rain.png"
import snow from "../Assets/snow.png"
import sun from "../Assets/sun.png"
import thunder from "../Assets/thunder.png"

const Forecast = ({ forecastDaily, forecastHourly, icon }) => {
  const [toggle, setToggle] = useState(false)

  let weatherIcons = null

  if (icon === "Haze") {
    weatherIcons = <img src={fog} />
  } else if (icon === "Thunderstorm") {
    weatherIcons = <img src={thunder} />
  } else if (icon === "Drizzle") {
    weatherIcons = <img src={drizzle} />
  } else if (icon === "Rain") {
    weatherIcons = <src src={rain} />
  } else if (icon === "Snow") {
    weatherIcons = <img src={snow} />
  } else if (icon === "Mist") {
    weatherIcons = <img src={fog} />
  } else if (icon === "Clear") {
    weatherIcons = <img src={sun} />
  } else if (icon === "Clouds") {
    weatherIcons = <img src={cloud} />
  }

  return (
    <section class="bg-offWhite row-span-2 col-span-2 rounded-r-3xl">
      <div class="pt-8 px-4 flex  items-center justify-between ">
        <div class="flex gap-x-4">
          <button onClick={() => setToggle(!toggle)}>Today</button>
          <button onClick={() => setToggle(!toggle)}>Weekly</button>
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
      {!toggle && (
        <div class="flex flex-row gap-2 mx-4  text-center text-sm capitalize mt-6">
          {forecastDaily.slice(0, 5).map((data, index) => {
            return (
              <div
                class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-4 py-3"
                key={index}
              >
                <p class="">{data.weather[0].main}</p>
                <div class="w-1/2">{weatherIcons}</div>

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
      )}

      {/* Forecast Hourly */}
      {toggle && (
        <div class="flex flex-row gap-2 mx-4  text-center text-sm capitalize mt-6">
          {forecastHourly.slice(0, 5).map((data, index) => {
            return (
              <div
                class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3"
                key={index}
              >
                <p class="">{data.weather[0].main}</p>
                <div class="w-1/2">{weatherIcons}</div>{" "}
                <p class="flex gap-x-2">
                  {Math.floor(data.temp)}
                  {"°"}
                  <span class="text-lightGray">
                    {Math.floor(data.temp)}
                    {"°"}
                  </span>
                </p>
              </div>
            )
          })}
        </div>
      )}
    </section>
  )
}

export default Forecast
