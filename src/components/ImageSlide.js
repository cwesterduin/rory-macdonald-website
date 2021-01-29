import React, {Fragment, useState, useEffect} from 'react'
import imageSlideStyles from "./imageSlide.module.css"
import SlideControls from '../components/SlideControls'
import { Link } from "gatsby"
import "./layout.css"
import Image from "../components/Image"


function ImageSlide(props) {
  const [counter, setCounter] = useState(0);
  const [intervalVal, setIntervalVal] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, intervalVal);

    return () => {
      clearInterval(interval);
    };
  }, [intervalVal]);

  useEffect(() => {
    if (counter === (props.transition * props.images.length)) {
      setCounter(0)
    }
  },[counter])

  function pause() {
      intervalVal === (1000) ?
      setIntervalVal(Math.pow(2,31) -1) :
      setIntervalVal(1000)
  }
  function skip(e) {
    e.preventDefault()
    if (intervalVal !== 1000) {setIntervalVal(1000)};
      let rounded = Math.ceil(counter / props.transition) * props.transition
      setCounter(rounded)
  }
  function back(e) {
    e.preventDefault()
    if (intervalVal !== 1000) {setIntervalVal(1000)};
    let rounded
      if (counter > props.transition) {
        rounded = (Math.floor(counter / props.transition) * props.transition) - props.transition
        setCounter(rounded)
      }
      else
        rounded = (props.transition * props.images.length) - props.transition
        setCounter(rounded)
  }

  let imageList = props.images.map((image, index) =>
  <div className={imageSlideStyles.paintingCont} Style={counter < ((index+1)*props.transition) && (counter >= (index*props.transition)) ? 'opacity:1' : 'opacity:0'}>
  <Image objectPosition={image.objectPosition} objectFit={'contain '}
  filename={image.src} alt={`${image.title}. A painting by Rory Macdonald, number ${index} in slideshow.`}/>
  </div>
  )

  /*
  let titleList = props.images.map((image, index) =>
  <div className={imageSlideStyles.title} Style={counter < ((index+1)*props.transition) && (counter >= (index*props.transition)) ? 'opacity:1; z-index:1' : 'opacity:0; z-index:-1'}><Link to="/">{image.title}</Link><span> from series : </span><Link className={imageSlideStyles.series} to="/">{image.type}</Link><small>{index + 1}/{props.images.length}</small></div>)
  */

  return (
    <Link to={'/painting/'}>
    <div className={imageSlideStyles.cont}>
      {/*<h1>{counter}</h1>*/}

      {/*
      <div className={imageSlideStyles.titleCont}>
      {titleList}
      </div>
      */}

      <SlideControls skip={skip} pause={e => pause(e)} back={e => back(e)} intervalVal={intervalVal}/>

      {imageList}
    </div>
    </Link>
  )
}

export default ImageSlide
