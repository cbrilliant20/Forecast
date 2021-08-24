import React from "react"

const Highlights = ({ current }) => {
  return (
    <section class="bg-offWhite row-span-2 col-span-2 rounded-r-3xl  -mt-4">
      <div class="px-4 flex  items-center justify-between pb-4">
        <div class="flex gap-x-4 ">
          <p>Today's Highlights</p>
        </div>
      </div>

      {/* Cards */}

      <div class="grid grid-cols-3 grid-rows-2 gap-2 mx-4   ">
        {/* Humidity */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3 ">
          <p class="self-start text-lightGray">Humidity</p>
          {Math.floor(current.humidity)} %
        </div>

        {/* WindSpeed*/}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">Wind Speed</p>
          {Math.floor(current.wind_speed)} mp/h
        </div>

        {/* Sunrise/Sunset */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">Sunrise & Sunset</p>
          <div class="flex flex-col ">
            <p>
              {new Date(current.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              {new Date(current.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </div>

        {/* UV */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">UV Index</p>
          {current.uvi}
        </div>

        {/* Visibility */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">Visibility</p>
          {current.visibility / 1000} miles
        </div>

        {/* Feels Like */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">Feels Like</p>
          {Math.round(current.feels_like)}°F
        </div>
      </div>
    </section>
  )
}

export default Highlights
