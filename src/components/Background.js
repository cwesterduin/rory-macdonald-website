import React from 'react'
import ImageSlide from "./ImageSlide"
import backgroundStyles from "./background.module.css"
import Div100vh from 'react-div-100vh'


const images = [
    {src:'background_the river of dreams_background.jpg', title:'the river of dreams', objectPosition:"50% 40%"},
    {src:'background_saint florian_background.jpg', title:'saint florian', objectPosition:"50% 30%"},
    {src:'background_saint christina_background.jpg', title:'saint christina', objectPosition:"50% 15%"},
    {src:'background_gabriel_background.jpg', title:'gabriel', objectPosition:"50% 35%"},
    {src:'background_the patron saint of gluttony_background.jpg', title:'the patron saint of gluttony', objectPosition:"50% 15%"},
    {src:'background_the lady of the lake_background.jpg', title:'the lady of the lake', objectPosition:"50% 16%"}
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
