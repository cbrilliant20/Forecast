import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faSearchLocation,
  faCloudSun,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons"

const Overview = () => {
  return (
    <section class="bg-white row-span-4 col-span-1 rounded-3xl">
      <div class="p-12 flex flex-col items-start justify-between h-full ">
        <form action="" class="flex items-center gap-6">
          <input
            type="text"
            class="bg-none text-black outline-none"
            placeholder="Search for places..."
          />
          <button
            class="bg-offWhite text-darkGray active:bg-pink-600 font-bold uppercase text-base px-3 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          >
            <FontAwesomeIcon icon={faSearchLocation} />
          </button>
        </form>
        {/* Insert Data */}
        <img
          src="https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/kweather.png"
          class="w-3/4"
        />
        {/* Insert Data */}
        <p class="text-5xl flex">
          12 <span class="text-2xl ">°F</span>
        </p>

        {/* Insert Data */}
        <p>
          Monday, <span class="text-lightGray">16:00</span>
        </p>
        <div class="h-1 w-full bg-offWhite self-center"></div>
        <hr class="text-lightGray" />
        {/* Insert Data */}
        <div class="flex items-center gap-x-4">
          <FontAwesomeIcon icon={faCloudSun} />
          <p>Mostly Cloudy</p>
        </div>
        {/* Insert Data */}
        <div class="flex items-center gap-x-4">
          <FontAwesomeIcon icon={faCloudRain} />
          <p>Rain - 30%</p>
        </div>
        <div>
          <button class="bg-darkGray text-white h-12 px-16 py-8 ">
            About the App
          </button>
        </div>
      </div>
    </section>
  )
}

export default Overview
