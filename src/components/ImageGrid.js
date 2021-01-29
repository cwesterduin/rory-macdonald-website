import React, {useState, Fragment} from "react"
import imageGridStyles from "./imageGrid.module.css"
import Masonry from 'react-masonry-component';
import "./layout.css"
import { Link } from "gatsby"
import Image from "../components/Image"
import FadeInSection from "../components/FadeInSection"

import { myContext } from '../components/PageContext';

const imageData = [{
name: "close encounter",
series: "portrait"
}, {
name: "the pearl of tassis",
series: "water"
}, {
name: "the flood",
series: "water"
},{
name: "always keep a sapphire in your mind",
series: "portrait"
}, {
name: "waiting for the ferry man",
series: "water"
}, {
name: "the renegade",
series: "portrait"
}, {
name: "the libertine",
series: "portrait"
}, {
name: "the spirit of a dreamer",
series: "cloud"
}, {
name: "lifeboat",
series: "water"
}, {
name: "the dove",
series: "hand"
}, {
name: "above the void",
series: "hand"
}, {
name: "study",
series: "portrait"
},
 {
name: "vanguard",
series: "cloud"
},
{
name: "cloud nine",
series: "cloud"
},
{
name: "hitch",
series: "cloud"
}, {
name: "minister for holes",
series: "cloud"
}, {
name: "the valley of golden souls",
series: "cloud"
},
{
name: "first flight",
series: "hand"
}, {
name: "perch",
series: "hand"
},
{
name: "the don",
series: "hand"
}, {
name: "up on high",
series: "hand"
}, {
name: "the vanquishing point",
series: "hand"
}, {
name: "el primo",
series: "hand"
}, {
name: "arise",
series: "hand"
}, {
name: "nightswimmer",
series: "water"
}, {
name: "rise",
series: "hand"
},
]




  const masonryOptions = {
      transitionDuration: 0
  };



function ImageGrid(props) {


  let images

    if (props.series === 'selected-works') {
      images = imageData.map(item =>
      <div id={item.name} Style={item.name === 'cloud nine' || item.name === 'vanguard' ? 'width:100%' : null} className={`${imageGridStyles.subCont} subContainer`}>
      <myContext.Consumer>
        {context => (
      <Link onClick={() => context.changeParentPage(`selected-works#${item.name}`)} to={`/painting/${item.name.replace(/ /g,"-")}`}>
      <FadeInSection>
      <Image filename={`${item.name}.jpg`} alt={item.name}/>
      </FadeInSection>
      </Link>
      )}
      </myContext.Consumer>
      {/*<h4 Style="position: relative; top: 24px; color: #ddd; text-transform: capitalize">{item.name}</h4>*/}
      </div>)
    }
    else if (props.series === 'available-paintings') {
      images = imageData.map(item =>
      <div id={item.name} Style={item.name === 'cloud nine' || item.name === 'vanguard' ? 'width:100%' : null} className={`${imageGridStyles.subCont} subContainer`}>
      <myContext.Consumer>
        {context => (
      <Link onClick={() => context.changeParentPage(`studio-paintings#${item.name}`)} to={`/studio-paintings/${item.name.replace(/ /g,"-")}`}>
      <FadeInSection>
      <Image filename={`${item.name}.jpg`} alt={item.name}/>
      </FadeInSection>
      </Link>
      )}
      </myContext.Consumer>
      {/*<h4 Style="position: relative; top: 24px; color: #ddd; text-transform: capitalize">{item.name}</h4>*/}
      </div>)
    }

    else {
    images = imageData.filter(image => image.series === props.series).filter(image => image.name !== 'cloud nine').filter(image => image.name !== 'vanguard').map(item =>
    <div id={item.name} className={`${imageGridStyles.subCont} subContainer`}>
    <myContext.Consumer>
      {context => (
        <Link onClick={() => context.changeParentPage(`${item.series}#${item.name}`)} to={`/painting/${item.name.replace(/ /g,"-")}`}>
        <FadeInSection>
        <Image filename={`${item.name}.jpg`} alt={item.name}/>
        </FadeInSection>
        </Link>
      )}
    </myContext.Consumer>
    </div>

  )
    }



    return (
      <div>

      {props.series === 'cloud' ?
      <myContext.Consumer>
        {context => (
      <>
      <div className={imageGridStyles.subContWide}>
      <Link onClick={() => context.changeParentPage('cloud#vanguard')} to={`/painting/vanguard`}>
      <FadeInSection>
      <Image filename={'vanguard.jpg'} alt=""/>
      </FadeInSection>
      </Link>
      </div>

      <div className={imageGridStyles.subContWide}>
      <Link onClick={() => context.changeParentPage('cloud#cloud nine')} to={`/painting/cloud-nine`}>
      <FadeInSection>
      <Image filename={'cloud nine.jpg'} alt=""/>
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

  export default ImageGrid;
