import React, { useState, useEffect } from "react"
import "../components/layout.css"
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon
} from "react-share";

import socialButtonsStyles from "./socialButtons.module.css"


function SocialButtons(props) {
const [show, setShow] = useState(false)
const [opacity, setOpacity] = useState(0)


function toggleShow() {
  show ? setShow(false) : setShow(true)
}

useEffect(() => {
  if (show === true) {setOpacity(1)}
},[show])

return (
<div Style="display:flex; align-items: center; justify-content:center;">
  {show ?
<div className={socialButtonsStyles.shareButtonCont} Style={`opacity:${opacity}`}>
<FacebookShareButton className={socialButtonsStyles.shareButton}
  url={props.url}
  quote={props.name}
>
  <FacebookIcon
  size={props.size} round
  bgStyle={props.bgStyle}
  iconFillColor={props.iconFillColor}/>

</FacebookShareButton>

<TwitterShareButton className={socialButtonsStyles.shareButton}
  url={props.url}
  title={props.name}
>
  <TwitterIcon
  size={props.size} round
  bgStyle={props.bgStyle}
  iconFillColor={props.iconFillColor}/>
</TwitterShareButton>

<PinterestShareButton className={socialButtonsStyles.shareButton}
  url={props.url}
  media={props.media}
>
  <PinterestIcon
  size={props.size} round
  bgStyle={props.bgStyle}
  iconFillColor={props.iconFillColor}/>
  </PinterestShareButton>

  <EmailShareButton className={socialButtonsStyles.shareButton}
    url={props.url}
    subject={props.name}
    body={null}
  >
    <EmailIcon
    size={props.size} round
    bgStyle={props.bgStyle}
    iconFillColor={props.iconFillColor}/>
  </EmailShareButton>

  </div>
  :
  <button className={socialButtonsStyles.shareButtonToggle} onClick={toggleShow}>Share &#43;</button>
}


  </div>
)
}

export default SocialButtons;
