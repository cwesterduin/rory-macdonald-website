import React, { useState, useEffect } from "react"
import paintingStyles from "../templates/painting.module.css"
import Image from './Image.js'


function ExtraContent(props) {
  let active = props.src === props.currentSrc
  return (
    <button disabled={active ? "false" : null} onClick={props.onClick} value={props.src} className={`${paintingStyles.extra} ${active ? paintingStyles.selected : null}`}>
      <Image alt="" filename={props.src}/>
    </button>
  )
}

export default ExtraContent
