import React from "react"
import { DateTime } from "luxon"

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

const Overview = ({ temperature, icon, weatherDescription, weatherMain }) => {
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
    <section class="bg-white row-span-4 col-span-1 rounded-3xl">
      <div class="p-8 flex flex-col items-start justify-between h-full ">
        {/* Insert Data */}
        {weatherIcons}

        {/* Insert Data */}
        <p class="text-5xl flex">
          {Math.floor(temperature)} <span class="text-2xl ">°F</span>
        </p>
        {/* Insert Data */}
        <p>
          {DateTime.now().toFormat("MMMM dd")}, {/* <br /> */}
          <span class="text-lightGray ml-1">
            {DateTime.now().toFormat("hh: mm")}
          </span>
        </p>
        <div class="h-1 w-full bg-offWhite self-center"></div>
        <hr class="text-lightGray" />
        {/* Insert Data */}
        <div class="flex items-center gap-x-4">
          {weatherIcons}
          <p class="capitalize">{weatherDescription}</p>
        </div>
        {/* Insert Data */}
        <div class="flex items-center gap-x-4 ">
          {weatherIcons}
          <p class="capitalize">{weatherMain}</p>
        </div>
        <div>
          <button class="bg-darkGray text-white  px-32 py-6 rounded-xl w-full">
            About the App
          </button>
        </div>
      </div>
    </section>
  )
}

export default Overview
