import React, {Fragment, useState, useEffect} from 'react'
import imageSlideStyles from "./imageSlide.module.css"
import slideControlsStyles from "./slideControls.module.css"
import "./layout.css"

function SlideControls(props) {
  return (
    <div className={imageSlideStyles.buttonGroup}>
      <button aria-label="previous slide" className={`${slideControlsStyles.back} ${slideControlsStyles.button}`} onClick={props.back}>&#8249;</button>
      {/*<button className={`${slideControlsStyles.pause} ${slideControlsStyles.button}`} onClick={props.pause}>{props.intervalVal === (1000) ? <>&#10074;&#10074;</> : <>&#9654;</>}</button>*/}
      <button aria-label="next slide" className={`${slideControlsStyles.skip} ${slideControlsStyles.button}`} onClick={props.skip}>&#8250;</button>
    </div>
  )
}

export default SlideControls;
