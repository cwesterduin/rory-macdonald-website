import React, { useState, Fragment } from "react"
import imageGridStyles from "./imageGrid.module.css"
import Masonry from "react-masonry-component"
import "./layout.css"
import { Link } from "gatsby"
import Image from "./Image"
import FadeInSection from "./FadeInSection"

import { myContext } from "./PageContext"

const masonryOptions = {
  transitionDuration: 0
}

let imageData = require("../../static/data/paintings.json")

function ImageGrid(props) {

  let images

  if (props.series === "selected-works") {
    images = imageData.filter(item => !item.deselected).map(item =>
      <div id={item.name} Style={item.name === "cloud nine" || item.name === "vanguard" ? "width:100%" : null}
           className={`${imageGridStyles.subCont} subContainer`}>
        <myContext.Consumer>
          {context => (
            <Link onClick={() => context.changeParentPage(`selected-works#${item.name}`)}
                  to={`/painting/${item.name.replace(/ /g, "-")}`}>
              <FadeInSection>
                <Image filename={`${item.name}.jpg`} alt={item.name} />
              </FadeInSection>
            </Link>
          )}
        </myContext.Consumer>
        {/*<h4 Style="position: relative; top: 24px; color: #ddd; text-transform: capitalize">{item.name}</h4>*/}
      </div>)
  }
  else if (props.series === "studio-paintings") {
      images = imageData.filter(item => item.available).map(item =>
        <div id={item.name} Style={item.name === "cloud nine" || item.name === "vanguard" ? "width:100%" : null}
             className={`${imageGridStyles.subCont} subContainer`}>
          <myContext.Consumer>
            {context => (
              <Link onClick={() => context.changeParentPage(`studio-paintings#${item.name}`)}
                    to={`/studio-paintings/${item.name.replace(/ /g, "-")}`}>
                <FadeInSection>
                  <Image filename={`${item.name}.jpg`} alt={item.name} />
                </FadeInSection>
              </Link>
            )}
          </myContext.Consumer>
          {/*<h4 Style="position: relative; top: 24px; color: #ddd; text-transform: capitalize">{item.name}</h4>*/}
        </div>)
  }
    else if (props.series === "sale") {
      images = imageData.filter(item => item.sale).map(item =>
        <div id={item.name} Style={item.name === "cloud nine" || item.name === "vanguard" ? "width:100%" : null}
             className={`${imageGridStyles.subCont} subContainer`}>
          <myContext.Consumer>
            {context => (
              <Link onClick={() => context.changeParentPage(`sale#${item.name}`)}
                    to={`/sale/${item.name.replace(/ /g, "-")}`}>
                <FadeInSection>
                  <Image filename={`${item.name}.jpg`} alt={item.name} />
                </FadeInSection>
              </Link>
            )}
          </myContext.Consumer>
          {/*<h4 Style="position: relative; top: 24px; color: #ddd; text-transform: capitalize">{item.name}</h4>*/}
        </div>)
    }
  else {
    images = imageData.filter(image => image.series === props.series).filter(image => image.name !== "cloud nine").filter(image => image.name !== "vanguard").map(item =>
      <div id={item.name} className={`${imageGridStyles.subCont} subContainer`}>
        <myContext.Consumer>
          {context => (
            <Link onClick={() => context.changeParentPage(`${item.series}#${item.name}`)}
                  to={`/painting/${item.name.replace(/ /g, "-")}`}>
              <FadeInSection>
                <Image filename={`${item.name}.jpg`} alt={item.name} />
              </FadeInSection>
            </Link>
          )}
        </myContext.Consumer>
      </div>
    )
  }


  return (
    <div>

      {props.series === "cloud" ?
        <myContext.Consumer>
          {context => (
            <>
              <div className={imageGridStyles.subContWide}>
                <Link onClick={() => context.changeParentPage("cloud#vanguard")} to={`/painting/vanguard`}>
                  <FadeInSection>
                    <Image filename={"vanguard.jpg"} alt="" />
                  </FadeInSection>
                </Link>
              </div>

              <div className={imageGridStyles.subContWide}>
                <Link onClick={() => context.changeParentPage("cloud#cloud nine")} to={`/painting/cloud-nine`}>
                  <FadeInSection>
                    <Image filename={"cloud nine.jpg"} alt="" />
                  </FadeInSection>
                </Link>
              </div>
            </>
          )}
        </myContext.Consumer>

        :
        null}

      <Masonry options={masonryOptions} className={imageGridStyles.cont}>
        {images}
      </Masonry>


    </div>
  )
}

export default ImageGrid
