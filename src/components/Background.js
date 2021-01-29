import React from 'react'
import ImageSlide from "../components/ImageSlide"
import backgroundStyles from "./background.module.css"
import Div100vh from 'react-div-100vh'


const images = [
    {src:'background_close encounter_background.jpg', title:'close encounter', objectPosition:"50% 40%"},
    {src:'background_the flood_background.jpg', title:'the flood', objectPosition:"50% 30%"},
    {src:'background_the libertine_background.jpg', title:'the libertine', objectPosition:"50% 15%"},
    {src:'background_the pearl of tassis_background.jpg', title:'the pearl of tassis', objectPosition:"50% 35%"},
    {src:'background_the renegade_background.jpg', title:'the renegade', objectPosition:"50% 15%"},
    {src:'background_waiting for the ferry man_background.jpg', title:'waiting for the ferry man', objectPosition:"50% 16%"}
  ]

function Background() {
  return (
    <Div100vh>
      <ImageSlide
        transition= {8}
        images={images}
      />
    </Div100vh>
  )
}

export default Background
