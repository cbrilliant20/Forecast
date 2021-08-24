import React from "react"
import { DateTime } from "luxon"
import cloud from "../Assets/cloud.png"
import drizzle from "../Assets/drizzle.png"
import fog from "../Assets/fog.png"
import rain from "../Assets/rain.png"
import snow from "../Assets/snow.png"
import sun from "../Assets/sun.png"
import thunder from "../Assets/thunder.png"

const Overview = ({ icon, current, currentWeather }) => {
  // let weatherIcons = null

  // if (icon === "Haze") {
  //   weatherIcons = <img src={fog} />
  // } else if (icon === "Thunderstorm") {
  //   weatherIcons = <img src={thunder} />
  // } else if (icon === "Drizzle") {
  //   weatherIcons = <img src={drizzle} />
  // } else if (icon === "Rain") {
  //   weatherIcons = <src src={rain} />
  // } else if (icon === "Snow") {
  //   weatherIcons = <img src={snow} />
  // } else if (icon === "Mist") {
  //   weatherIcons = <img src={fog} />
  // } else if (icon === "Clear") {
  //   weatherIcons = <img src={sun} />
  // } else if (icon === "Clouds") {
  //   weatherIcons = <img src={cloud} />
  // }
  const iconurl =
    "http://openweathermap.org/img/wn/" + `${currentWeather.icon}` + ".png"

  const iconurlLarge =
    "http://openweathermap.org/img/wn/" + `${currentWeather.icon}` + "@4x.png"

  return (
    <section class="bg-white row-span-4 col-span-1 rounded-3xl">
      <div class="p-8 flex flex-col items-start justify-between h-full ">
        <img src={iconurlLarge} alt="" class="self-center -m-8 w-3/4 " />
        {/* Insert Data */}
        <p class="text-5xl flex">
          {Math.floor(current.temp)} <span class="text-2xl ">°F</span>
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
          <img src={iconurl} alt="" />

          <p class="capitalize ">{currentWeather.main}</p>
        </div>
        {/* Insert Data */}
        <div class="flex items-center gap-x-4 ">
          <img src={iconurl} alt="" />
          <p class="capitalize">{currentWeather.description}</p>
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
