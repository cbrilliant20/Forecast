import React, { useState } from "react"

const Forecast = ({ forecastDaily, forecastHourly }) => {
  const [toggle, setToggle] = useState(false)

  const handleClick = (e) => {
    setToggle(!toggle)
  }

  return (
    <section class="lg:bg-offWhite row-span-2 col-span-2 lg:rounded-r-3xl">
      <div class="pt-8 lg:px-4 flex pb-4 items-center justify-between ">
        <div class="flex gap-x-4">
          <button
            onClick={handleClick}
            className={`tab-active ${toggle ? "tab-deactive" : ""}`}
          >
            Today
          </button>

          <button
            onClick={handleClick}
            className={`tab-active ${!toggle ? "tab-deactive" : ""}`}
          >
            Weekly
          </button>
        </div>

        {/* F+C Button */}
        <div class="flex gap-x-4">
          <button
            class="bg-darkGray text-white  font-bold uppercase text-base py-2 px-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
            type="button"
          >
            <p class="flex ">°F</p>
          </button>
          {/* <button
            class="bg-white text-darkGray active:bg-pink-600 font-bold uppercase text-base py-2 px-2.5 rounded-full shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
            type="button"
          >
            <p class=" flex ">°C</p>
          </button> */}
        </div>
      </div>

      {/* Forecast Daily */}
      {toggle && (
        <div class="flex flex-row gap-1 lg:gap-2 lg:mx-4  text-center text-sm capitalize mt-6 ">
          {forecastDaily.slice(0, 5).map((data, index) => {
            const iconurl =
              "http://openweathermap.org/img/wn/" +
              `${data.weather[0].icon}` +
              "@2x.png"
            return (
              <div
                class="flex flex-1 flex-col justify-evenly items-center rounded-xl  gap-y-4 py-3 border mb-8 lg:mb-0 lg:border-none shadow"
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
      {!toggle && (
        <div class="flex flex-row gap-1 lg:gap-2 lg:mx-4  text-center text-sm capitalize mt-6 ">
          {forecastHourly.slice(0, 5).map((data, index) => {
            const iconurl =
              "http://openweathermap.org/img/wn/" +
              `${data.weather[0].icon}` +
              "@2x.png"
            return (
              <div
                class="flex flex-1 flex-col justify-evenly items-center rounded-xl  gap-y-4 py-3  mb-8 lg:mb-0 border lg:border-none shadow"
                key={index}
              >
                <p class="">{data.weather[0].main}</p>
                <img src={iconurl} alt="" class="" />
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
