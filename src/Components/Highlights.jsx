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
    <section class="row-span-2 col-span-2 lg:rounded-br-3xl  lg:bg-offWhite">
      <div class="lg:pl-4 flex  items-center justify-between pb-4">
        <div class="flex gap-x-4 mb-5">
          <p>Today's Highlights</p>
        </div>
      </div>

      {/* Cards */}

      <div class="grid grid-cols-3 grid-rows-2 gap-1 lg:mx-4 mb-8 text-sm lg:text-base">
        {/* Feels Like */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3  border lg:border-none shadow">
          <p class="lg:self-start  text-lightGray">Feels Like</p>
          <div class="flex items-center gap-x-4 justify-between">
            {Math.round(current.feels_like)}°F
            <img src={feels} alt="#" class="w-1/2 " />
          </div>
        </div>

        {/* Humidity */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3  border lg:border-none shadow">
          <p class="lg:self-start   text-lightGray">Humidity</p>
          <div class="flex items-center gap-x-4 justify-between">
            {Math.floor(current.humidity)} %
            <img src={humidity} alt="#" class="w-1/2 " />
          </div>
        </div>

        {/* WindSpeed*/}
        <div class="flex flex-1 flex-col justify-evenly items-center  rounded-xl bg-white gap-y-2 py-3 px-3  border lg:border-none shadow">
          <p class="lg:self-start  text-lightGray text-center ">Wind Speed</p>
          <div class="flex items-center gap-x-4 justify-between ">
            {Math.floor(current.wind_speed)} mp/h
            <img src={wind} alt="#" class="w-1/3" />
          </div>
        </div>

        {/* Sunrise/Sunset */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3  border lg:border-none shadow">
          <p class="lg:self-start   text-lightGray">Sunrise & Sunset</p>
          <div class="flex flex-col  ">
            <div class="flex items-end justify-between gap-x-4 text-xs lg:text-base">
              <p>
                {new Date(current.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img src={sunrise} alt="#" class="w-1/4" />
            </div>
            <div class="flex items-end justify-between gap-x-4 text-xs lg:text-base">
              <p>
                {new Date(current.sunset * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img src={sunset} alt="#" class="w-1/4 " />
            </div>
          </div>
        </div>

        {/* UV */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3  border lg:border-none shadow">
          <p class="lg:self-start   text-lightGray">UV Index</p>
          <div class="flex items-center gap-x-4 justify-between">
            {current.uvi}
            <img src={uv} alt="#" class="w-2/3" />
          </div>
        </div>

        {/* Visibility */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-2 py-3 px-3  border lg:border-none shadow">
          <p class="lg:self-start   text-lightGray">Visibility</p>
          <div class="flex items-center gap-x-4 justify-between">
            {Math.round(current.visibility / 1609)} miles
            <img src={visibility} class="w-2/5" alt="#" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights
