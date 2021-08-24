import React from "react"
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
        {/* Form */}
        {/* <form action="" class="flex items-center gap-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="city"
            class="bg-none text-black outline-none"
            placeholder="Search for City..."
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            name="country"
            class="bg-none text-black outline-none"
            placeholder="Search for Country..."
            onChange={(e) => handleChange(e)}
          />
          <button
            class="bg-offWhite text-darkGray active:bg-pink-600 font-bold uppercase text-base px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <FontAwesomeIcon icon={faSearchLocation} />
          </button>
        </form> */}
        {/* Insert Data */}
        {weatherIcons}

        {/* Insert Data */}
        <p class="text-5xl flex">
          {Math.floor(temperature)} <span class="text-2xl ">°F</span>
        </p>
        {/* Insert Data */}
        <p>
          Monday, <span class="text-lightGray">16:00</span>
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
