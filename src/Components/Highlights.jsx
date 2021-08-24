import React from "react"
import { faCloudSun, faCloudRain } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Highlights = () => {
  return (
    <section class="bg-offWhite row-span-2 col-span-2 rounded-r-3xl">
      <div class="p-8 flex  items-center justify-between">
        <div class="flex gap-x-4">
          <p>Today's Highlights</p>
        </div>
      </div>

      {/* Cards */}
      <div class="flex flex-row gap-2 mx-8  ">
        {/* Card #1 */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">UV Index</p>
        </div>
        {/* Card #1 */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">UV Index</p>
        </div>
        {/* Card #1 */}
        <div class="flex flex-1 flex-col justify-evenly items-center rounded-xl bg-white gap-y-8 py-3 px-3">
          <p class="self-start text-lightGray">UV Index</p>
        </div>
      </div>
    </section>
  )
}

export default Highlights
