import React from "react"

const ForecastCards = () => {
  return (
    <div>
      {/* Forecast Daily */}
      <div class="flex flex-row gap-2 mx-4  text-center text-sm ">
        {forecastDaily.slice(0, 5).map((data, index) => {
          return (
            <div
              class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3"
              key={index}
            >
              <p class="">{data.weather[0].description}</p>
              {weatherIcons}
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

      {/* Forecast Hourly */}
      <div class="flex flex-row gap-2 mx-4  text-center text-sm ">
        {forecastHourly.slice(0, 5).map((data, index) => {
          return (
            <div
              class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3"
              key={index}
            >
              <p class="">{data.weather[0].description}</p>
              {weatherIcons}
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
    </div>
  )
}

export default ForecastCards
