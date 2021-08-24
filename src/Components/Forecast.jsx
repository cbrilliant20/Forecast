import React, { useState } from "react"

const Forecast = ({ forecastDaily, forecastHourly }) => {
  const [toggle, setToggle] = useState(false)

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
            const iconurl =
              "http://openweathermap.org/img/wn/" +
              `${data.weather[0].icon}` +
              ".png"
            return (
              <div
                class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3"
                key={index}
              >
                <p class="">{data.weather[0].main}</p>
                <img src={iconurl} alt="" />
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

      {/* Forecast Weekly */}
      {toggle && (
        <div class="flex flex-row gap-2 mx-4  text-center text-sm capitalize mt-6">
          {forecastHourly.slice(0, 5).map((data, index) => {
            const iconurl =
              "http://openweathermap.org/img/wn/" +
              `${data.weather[0].icon}` +
              ".png"
            return (
              <div
                class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3"
                key={index}
              >
                <p class="">{data.weather[0].main}</p>
                <img src={iconurl} alt="" />
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
