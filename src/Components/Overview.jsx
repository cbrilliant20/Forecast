import React from "react"
import { DateTime } from "luxon"
import About from "./About"

const Overview = ({ icon, current, currentWeather, pop, forecastHourly }) => {
  const iconurl = `http://openweathermap.org/img/wn/${currentWeather.icon}.png`

  const iconurlLarge = `http://openweathermap.org/img/wn/${currentWeather.icon}@4x.png`

  return (
    <section class="bg-white row-span-4 col-span-1 rounded-3xl">
      <div class="lg:p-8 lg:flex lg:flex-col items-center lg:items-start justify-between h-full  ">
        <div></div>
        <img src={iconurlLarge} alt="#" class="self-center lg:-m-8 lg:w-3/4 " />
        {/* Insert Data */}
        <p class="text-5xl flex ">
          {Math.floor(current.temp)} <span class="text-2xl ">°F</span>
        </p>
        {/* Insert Data */}
        <p>
          {DateTime.now().toFormat("MMMM dd")}, {/* <br /> */}
          <span class="text-lightGray ml-1">
            {DateTime.now().toFormat("hh:mm")}
          </span>
        </p>

        <div class=" hidden lg:block h-1 w-full bg-offWhite self-center"></div>

        {/* Insert Data */}
        <div class="flex items-center gap-x-4 ">
          <img src={iconurl} alt="#" />
          <p class="capitalize">{currentWeather.description}</p>
        </div>
        {/* Insert Data */}

        <div class="flex items-center gap-x-4">
          <img src="https://openweathermap.org/img/wn/10d.png" alt="#" />
          <div class="flex gap-x-1">
            <p>Rain -</p>
            {forecastHourly.slice(0, 1).map((data, index) => {
              return (
                <p class=" justify-start" key={index}>
                  {data.pop}%
                </p>
              )
            })}
            {/* // forecastHourly.weather[0].main */}
            {/* <p class="capitalize ">{currentWeather.main}</p> */}
          </div>
        </div>
        <div class="bg-darkGray text-white py-4 rounded-xl w-full text-center ">
          <About />
        </div>
      </div>
    </section>
  )
}

export default Overview
