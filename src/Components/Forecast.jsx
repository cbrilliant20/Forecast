import { faCloudSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const Forecast = () => {
  return (
    <section class="bg-offWhite row-span-2 col-span-2 rounded-r-3xl">
      <div class="p-8 flex  items-center justify-between">
        <div class="flex gap-x-4">
          <p>Today</p>
          <p>Week</p>
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

      {/* Cards */}
      <div class="flex flex-row gap-2 mx-8  ">
        {/* Card #1 */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3">
          <p class="">Sun</p>
          <FontAwesomeIcon icon={faCloudSun} />
          <p>
            15° <span class="text-lightGray">-3°</span>
          </p>
        </div>

        {/* Card #1 */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3">
          <p class="">Sun</p>
          <FontAwesomeIcon icon={faCloudSun} />
          <p>
            15° <span class="text-lightGray">-3°</span>
          </p>
        </div>
        {/* Card #1 */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3">
          <p class="">Sun</p>
          <FontAwesomeIcon icon={faCloudSun} />
          <p>
            15° <span class="text-lightGray">-3°</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Forecast
