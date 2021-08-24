import React from "react"
import feels from "../Assets/feels.png"
import humidity from "../Assets/humidity.png"
import sunrise from "../Assets/sunrise.png"
import sunset from "../Assets/sunset.png"
import uv from "../Assets/uv.png"
import wind from "../Assets/wind.png"
import visibility from "../Assets/visibility.png"

const Highlights = ({ current }) => {
  return (
    <section class="bg-offWhite row-span-2 col-span-2 rounded-r-3xl  -mt-4">
      <div class="px-4 flex  items-center justify-between pb-4">
        <div class="flex gap-x-4 mb-5">
          <p>Today's Highlights</p>
        </div>
      </div>

      {/* Cards */}

      <div class="grid grid-cols-3 grid-rows-2 gap-1 mx-4 ">
        {/* Feels Like */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3">
          <p class="self-start text-lightGray">Feels Like</p>
          <div class="flex items-center gap-x-4 justify-between">
            {Math.round(current.feels_like)}°F
            <img src={feels} />
          </div>
        </div>

        {/* Humidity */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3 ">
          <p class="self-start text-lightGray">Humidity</p>
          <div class="flex items-center gap-x-4 justify-between">
            {Math.floor(current.humidity)} %
            <img src={humidity} alt="" />
          </div>
        </div>

        {/* WindSpeed*/}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3">
          <p class="self-start text-lightGray">Wind Speed</p>
          <div class="flex items-center gap-x-4 justify-between ">
            {Math.floor(current.wind_speed)} mp/h
            <img src={wind} class="w-1/3" />
          </div>
        </div>

        {/* Sunrise/Sunset */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3">
          <p class="self-start text-lightGray">Sunrise & Sunset</p>
          <div class="flex flex-col  ">
            <div class="flex items-end justify-between gap-x-4 ">
              <p>
                {new Date(current.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img src={sunrise} class="w-1/4" />
            </div>
            <div class="flex items-end justify-between gap-x-4 ">
              <p>
                {new Date(current.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img src={sunset} class="w-1/4 " />
            </div>
          </div>
        </div>

        {/* UV */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3">
          <p class="self-start text-lightGray">UV Index</p>
          <div class="flex items-center gap-x-4 justify-between">
            {current.uvi}
            <img src={uv} />
          </div>
        </div>

        {/* Visibility */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3">
          <p class="self-start text-lightGray">Visibility</p>
          <div class="flex items-center gap-x-4 justify-between">
            {Math.round(current.visibility / 1609)} miles
            <img src={visibility} class="w-1/3" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
