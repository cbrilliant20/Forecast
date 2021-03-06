import React from "react"
import ReactCircleModal from "react-circle-modal"
import { faLinkedin, faGithubSquare } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const About = () => {
  return (
    <ReactCircleModal
      backgroundColor="white"
      toogleComponent={(onClick) => (
        <button onClick={onClick}>About this App</button>
      )}
      // Optional fields and their default values
      offsetX={0}
      offsetY={0}
    >
      {(onClick) => (
        <div class="bg-offWhite text-darkGray py-4 rounded-xl w-full px-3 text-lg flex flex-col gap-y-10 ">
          <p>Thanks for visiting the Forecast Weather Dashboard! </p>
          <p>
            This app was built using React, Tailwind CSS, and the
            OpenWeatherMaps API.{" "}
          </p>
          <p>
            If you'd like to get in touch, please feel free to message me on my
            socials or email me directly.{" "}
          </p>
          <div class="flex gap-x-5 items-center justify-center text-6xl">
            <a
              href="https://www.linkedin.com/in/cameron-brilliant/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/cbrilliant20"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a
              href="mailto:cbrilliant20@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </a>
          </div>
          <button
            onClick={onClick}
            class="w-full bg-darkGray text-white rounded-md py-3"
          >
            Back
          </button>
        </div>
      )}
    </ReactCircleModal>
  )
}

export default About
