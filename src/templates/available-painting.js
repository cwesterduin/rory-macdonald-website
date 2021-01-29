import React, { useState, useEffect } from "react"
import { Link, graphql, navigate } from 'gatsby'
import Img from "gatsby-image"
import Image from "../components/Image"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import SocialButtons from "../components/SocialButtons"
import ExtraContent from "../components/ExtraContent"
import FadeInSection from "../components/FadeInSection"

import { myContext } from '../components/PageContext';


import { useSwipeable } from "react-swipeable";

import "../components/layout.css"

import paintingStyles from "./painting.module.css"

function NoData({pageContext: {image}, data:data}) {

  const handlers = useSwipeable({
  onSwipedLeft: () => navigate(`/painting/${image.next.name.replace(/ /g,"-")}`),
  onSwipedRight: () => navigate(`/painting/${image.prev.name.replace(/ /g,"-")}`),
  preventDefaultTouchmoveEvent: true,
  trackMouse: true
 });

  const size = <><span>{JSON.parse(image.image.size)[0]}cm <small>&#215;</small> {JSON.parse(image.image.size)[1]}cm</span>
  <small> / </small>
  <span>{Math.round(((JSON.parse(image.image.size)[0]) / 2.54) * 10) / 10}" <small>&#215;</small> {Math.round(((JSON.parse(image.image.size)[1]) / 2.54) * 10) / 10}"</span></>


  const [currentSrc, setCurrentSrc] = useState(`${image.image.name}.jpg`)
  const [loaded, setLoaded] = useState(false)

  const [test, setTest] = useState('the don')
  const [newSize, setNewSize] = useState(true)


  useEffect(() => {
    setTimeout(()=>{
    setLoaded(true)
  },100)
  },)



  function changeSrc(e) {
    setCurrentSrc(e.currentTarget.value)
    console.log(e.currentTarget)
  }

  function changeSize() {
    newSize ? setNewSize(false) : setNewSize(true)
  }

  function linkBack(e) {
    e.changeParentPage(false)
  }

  return (
    <>
    <Helmet htmlAttributes={{ lang : 'en-uk' }}>
      <meta charSet="utf-8" />
      <title>Rory Macdonald | {(image.image.name).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</title>
      <meta charSet="utf-8" />
      <meta name="description" content={`${(image.image.name).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} | Rory Macdonald`}/>
      <meta name="keywords" content="Rory Macdonald Paintings, paintings by Rory Macdonald, Ruaridh Macdonald, Rory Mcdonald, Rory MacDonald, artist, painter, painting, paintings, British artists, British painters, British art, University of St Andrews, Scottish art, Scottish painters"/>
      <meta name="author" content="Rory Macdonald"/>
      <meta property="og:title" content={'Rory Macdonald'} />
      <meta property="og:description" content={image.image.name} />
      <meta property="og:image" content={`https://rory-macdonald-static.s3.eu-west-2.amazonaws.com/og_image/${image.image.name.replace(/ /g,"+")}_og.jpg`} />

    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:site" content="@twitter"/>
    <meta property="twitter:title" content="Rory Macdonald"/>
    <meta property="twitter:description" content={image.name}/>
    <meta name="twitter:creator" content="@Joe84996716" />


      <link rel="canonical" href="" />
    </Helmet>
  <Layout available={true}>
    <div Style="text-align:center">

{/*
    <div className="subHeader">
      <Link to="/"><small className={"subHeaderLink"}>Paintings</small></Link>
      <small className={"spacer"}>&#8250;</small>
      <Link to="/hand"><small className={`${"breadcrumHeader"} ${"subHeaderLink"}`}>{image.series}</small></Link>
      <small className={"spacer"}>&#8250;</small>
      <small className="paintingTitle">{image.name}</small>
    </div>
*/}
{/*
  <button onClick={() => test === 'the don' ? setTest('study') : setTest('the don')}>Test</button>
  <button onClick={() => newSize ? setNewSize(false) : setNewSize(true)}>Size</button>
  */}

      <div className="pageContainer" Style={loaded ? `opacity:1` : `opacity:0`}>
      <div className={paintingStyles.titleCont} Style={`padding-bottom: 24px;`}>
      <myContext.Consumer>
        {context => (
          context.parentPage ?
          <>
          <Link className={`${paintingStyles.backButton} ${newSize ? null : paintingStyles.left}`} to={`../../${context.parentPage}`} aria-label={`back to category: ${context.parentPage}`} onClick={() => linkBack(context)}>&times;</Link>
          </>
          :
          null
        )}
      </myContext.Consumer>
      <button onClick={changeSize} className={`${paintingStyles.zoomButton} ${JSON.parse(image.image.size)[0] <= 19 && !currentSrc.includes("_framed") ? paintingStyles.zoomButton_hide : null} ${newSize ? null : paintingStyles.left}`}>&#8981;<span className={paintingStyles.small}>{newSize ? '+' : '-'}</span></button>

      <div Style="display:flex; justify-content: center; align-items: center; margin: 0 2%;">
      {image.prev ?
        <Link aria-label='previous-painting' to={`/studio-paintings/${image.prev.name.replace(/ /g,"-")}`} className={paintingStyles.navButton}>&#8249;</Link>
      : <div Style="width:48px; height:48px"></div>
      }

      <div onClick={JSON.parse(image.image.size)[0] <= 19 && !currentSrc.includes("_framed") ? null : changeSize} {...handlers} className={`${paintingStyles.image} ${JSON.parse(image.image.size)[0] === 19 && !currentSrc.includes("_framed")  ? paintingStyles.image_small : JSON.parse(image.image.size)[0] === 16 && !currentSrc.includes("_framed") ? paintingStyles.image_smaller : null}`} Style={JSON.parse(image.image.size)[0] <= 19 && !currentSrc.includes("_framed") ? 'cursor:auto; width:50%' : newSize ? `width:50%; cursor: zoom-in; ` : `width:100%; cursor: zoom-out; `}>
      <Image alt={image.image.name} type="square" filename={currentSrc}/>
      </div>

      {image.next ?
        <Link aria-label="next-painting" to={`/studio-paintings/${image.next.name.replace(/ /g,"-")}`} className={paintingStyles.navButton}>&#8250;</Link>
      : <div Style="width:48px; height:48px"></div>
      }
      </div>

      {image.image.framed === "true" ?
      <div className={paintingStyles.extraCont}>
      <ExtraContent src={`${image.image.name}.jpg`} currentSrc={currentSrc} onClick={e => changeSrc(e)} />
      <ExtraContent src={`/framed_${image.image.name}_framed.jpg`} currentSrc={currentSrc} onClick={e => changeSrc(e)} />
      </div> : null }

      <FadeInSection>
      <>
      <p className={paintingStyles.title} Style="color: #ccc; text-transform: capitalize;">{image.image.name}</p><p className={paintingStyles.date} Style="color:#aaa">{image.image.date}</p>
      <p className={paintingStyles.info} Style="color: #999; font-size: 14px;">{size} - {image.image.medium}</p>
      <p className={image.image.available === 'sold' ? `${paintingStyles.sold} ${paintingStyles.priceInfo}` : `${paintingStyles.price} ${paintingStyles.priceInfo}`}>{image.image.available === 'sold' ? 'sold' : `£${image.image.available}`}</p>
      </>
{/*
        <SocialButtons
          url={typeof window !== 'undefined' && window.location.href}
          name={image.image.name}
          bgStyle={{fill:"transparent"}}
          iconFillColor="#fff"
          size={42}
          media={image.image.src}
          />
*/}
      </FadeInSection>
          </div>
          </div>

  </div>
  </Layout>
  </>
)
}


export default NoData
