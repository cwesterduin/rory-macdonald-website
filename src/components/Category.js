import React from 'react'
import paintingStyles from "../pages/painting.module.css"
import { Link } from "gatsby"
import Image from "../components/Image"
import FadeInSection from "../components/FadeInSection"


function Category(props) {
  return (

    <div className={paintingStyles.categoryCont} Style={props.index % 2 === 0 ? 'flex-direction:row-reverse' : 'flex-direction:row'}>
    <div className={paintingStyles.categoryTitle}>
      <Link to={`/painting/${props.link.replace(/ /g,"-")}`}>
      <FadeInSection>
      <b className={paintingStyles.categoryTitle}>{String(props.name).toUpperCase()}</b>
      </FadeInSection>
      </Link>
    </div>

    <div id={props.link}  className={paintingStyles.categoryImage}>
    <Link tabindex="-1" to={`/painting/${props.link.replace(/ /g,"-")}`}>
    <FadeInSection>
    <Image filename={props.src} alt=""/>
    </FadeInSection>
    </Link>
    </div>

    </div>

  )
}

export default Category;
