import React, {useState, Fragment} from "react"
import imageGridStyles from "./imageGrid.module.css"
import Masonry from 'react-masonry-component';
import "./layout.css"
import { Link } from "gatsby"
import Image from "./Image"
import FadeInSection from "./FadeInSection"

import { myContext } from './PageContext';

const imageData = [{
name: "this charming man (2024)",
series: "2024",
},{
name: "dandy in the underworld",
series: "2024",
},{
name: "dragon heart",
series: "2024",
},{
name: "self portrait if my father had been dutch",
series: "2024",
},{
name: "self portrait if my father had been french",
series: "2024",
},{
name: "self portrait if my father had been a monk",
series: "2024",
},{
name: "self portrait if my father had been a nudist",
series: "2024",
},{
name: "the three ages",
series: "2024",
available: false,
},{
name: "the reckoning",
series: "2024",
available: false,
},{
name: "the embrace",
series: "2024",
available: false,
},{
name: "the blessed",
series: "2024",
available: false,
},{
name: "shifting sands",
series: "2024",
available: false,
},{
name: "blood from a stone",
series: "2024",
available: false,
},{
name: "the devotee",
series: "2024",
available: false,
},{
name: "the general",
series: "2024",
available: false,
},{
name: "the diplomat",
series: "2024",
available: false,
},{
name: "the blue madonna",
series: "2024",
available: false,
},{
name: "hot head",
series: "2024",
available: false,
},{
name: "the voyager",
series: "2024",
available: false,
},{
name: "the passenger",
series: "2024",
available: false,
},{
name: "the river of acheron",
series: "2024",
available: false,
},{
name: "the last judgement",
series: "2023",
available: false,
},{
name: "the river of dreams",
series: "2023",
},{
name: "the duke",
series: "2023",
},{
name: "a king's harvest",
series: "2023",
available: false,
},{
name: "saint florian",
series: "2023",
},{
name: "saint christina",
series: "2023",
},{
name: "the patron saint of gluttony",
series: "2023",
},{
name: "the patron saint of lust",
series: "2023",
},{
name: "the patron saint of avarice",
series: "2023",
},{
name: "the patron saint of envy",
series: "2023",
},{
name: "the patron saint of sloth",
series: "2023",
},{
name: "the patron saint of hubris",
series: "2023",
},{
name: "the patron saint of wrath",
series: "2023",
available: false,
},{
name: "the annunciation i",
series: "2023",
available: false
},{
name: "the annunciation ii",
series: "2023",
available: false
},{
name: "the romantic minotaur",
series: "2023",
available: false
},{
name: "saint balthazar",
series: "2023",
available: false,
},{
name: "the virgin mary",
series: "2023",
available: false,
},{
name: "saint kaspar",
series: "2023",
available: false,
},{
name: "saint jerome",
series: "2023",
available: false,
},{
name: "the lady of the lake",
series: "2023",
available: false,
},{
name: "the silver siren",
series: "2023",
available: false,
},{
name: "waiting for the wind",
series: "2023",
available: false,
},{
name: "the holy hour",
series: "2023",
available: false,
},{
name: "the fall",
series: "2022",
available: false,
},{
name: "la donna rosa",
series: "2022",
available: false,
},{
name: "this charming man",
series: "2022",
available: false,
},{
name: "la vie en rose",
series: "2022",
available: false,
},{
name: "george and the dragon",
series: "2022",
available: false,
},{
name: "in the balance",
series: "2021",
available: false,
},{
name: "the nightswimmers l",
series: "2022",
available: false,
},{
name: "the nightswimmers r",
series: "2022",
available: false,
},{
name: "flying high",
series: "2022",
available: false,
},{
name: "charity",
series: "2022",
},{
name: "the spirit of a romanticist",
series: "2022",
available: false,
},{
name: "old soak",
series: "2021",
available: false,
},{
name: "the water of venus",
series: "2021",
available: false,
},{
name: "lady falconer",
series: "2022",
available: false,
},{
name: "the admiral",
series: "2022",
available: false,
},{
name: "the dragon king",
series: "2022",
available: false,
},{
name: "eau de vie",
series: "2022",
available: false,
},{
name: "adrift",
series: "2022",
available: false,
}, {
name: "close encounter",
series: "2020",
available: false,
}, {
name: "out of the blue",
series: "2021",
available: false,
},{
name: "the pearl of tassis ii",
series: "2021",
available: false,
}, {
name: "the golden siren",
series: "2021",
available: false,
},{
name: "the flood",
series: "2020",
},{
name: "fishing for pearls",
series: "2021",
available: false,
},{
name: "if hearts could fly",
series: "2021",
available: false,
},{
name: "holding the line",
series: "2021",
},{
name: "the incredible disappearing man",
series: "2021",
available: false,
},{
name: "free spirit",
series: "2021",
available: false,
},{
name: "madame de chardonnay",
series: "2021",
available: false,
},{
name: "il portale",
series: "2021",
},{
name: "the expeditionist",
series: "2021",
available: false,
},{
name: "spa",
series: "2021",
available: false,
},{
name: "magi i",
series: "2023",
},{
name: "magi ii",
series: "2023",
},{
name: "magi iii",
series: "2023",
},{
name: "like a thief in the night",
series: "2021",
available: false,
},{
name: "moon tower",
series: "2021",
available: false,
},{
name: "across the sea",
series: "2021",
available: false,
},{
name: "always keep a sapphire in your mind",
series: "2020",
available: false,
},{
name: "flagship",
series: "2021",
available: false,
},{
name: "rearguard",
series: "2021",
}, {
name: "waiting for the ferry man",
series: "2020",
available: false,
}, {
name: "the renegade",
series: "2020",
available: false,
},{
name: "taking the plunge",
series: "2021",
available: false,
}, {
name: "the libertine",
series: "2020", 
},{
name: "nightswimming",
series: "2021",
available: false,
},{
name: "a safe place",
series: "2021",
},{
name: "raft of the minutia",
series: "2021",
available: false,
}, {
name: "the spirit of a dreamer",
series: "2020",
}, {
name: "lifeboat",
series: "2020",
available: false,
}, {
name: "the dove",
series: "2020",
available: false,
}, {
name: "above the void",
series: "2019",
available: false,
},{
name: "the pearl of tassis",
series: "2020",
available: false,
}, {
name: "study",
series: "2020",
available: false,
},
 {
name: "vanguard",
series: "2020",
},
{
name: "cloud nine",
series: "2020",
},
{
name: "hitch",
series: "2020",
available: false,
}, {
name: "minister for holes",
series: "2020",
}, {
name: "the valley of golden souls",
series: "2020",
},
{
name: "first flight",
series: "2019",
available: false,
}, {
name: "perch",
series: "2019",
available: false,
},
{
name: "the don",
series: "2019",
available: false,
}, {
name: "up on high",
series: "2019",
available: false,
}, {
name: "the vanquishing point",
series: "2019",
available: false,
}, {
name: "el primo",
series: "2019",
available: false,
}, {
name: "arise",
series: "2019",
available: false,
}, {
name: "nightswimmer",
series: "2019",
available: false,
}, {
name: "rise",
series: "2019",
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
      images = imageData.filter(item => item.available !== false).map(item =>
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
