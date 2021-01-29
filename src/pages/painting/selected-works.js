import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from "../../components/layout"
import ImageGrid from "../../components/ImageGrid"
import "../../components/layout.css"

import categoryStyles from "../../templates/category.module.css"

import { graphql } from "gatsby"

import { myContext } from '../../components/PageContext';



function SelectedWorks() {

  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    setTimeout(()=>{
    setLoaded(true)
  },50)
  },)

  return (
    <myContext.Consumer>
      {context => (
    <>
    <Helmet htmlAttributes={{ lang : 'en-uk' }}>
    <meta charSet="utf-8" />
    <title>{`Rory Macdonald | Selected Works`}</title>
    <meta name="description" content={`Gallery of paintings from Rory Macdonald's series, Selected Works.`}/>
    <meta name="keywords" content={`selected works, series, oils, canvas, board, oil painting, art, artist, Scottish, Scotland, Scottish artist`}/>
    <meta name="author" content="Rory Macdonald"/>
    <meta property="og:title" content={'Rory Macdonald Paintings'} />
    <meta property="og:description" content="Selected Works" />
    <meta property="og:image" content={`https://rory-macdonald-static.s3.eu-west-2.amazonaws.com/og_image/the renegade_og.jpg`} />
    <meta charSet="utf-8" />
    <link rel="canonical" href="" />
    </Helmet>
    <Layout>

    {/*<div className="subHeader"><Link to="/"><small className={"subHeaderLink"}>Paintings</small></Link><small className={"spacer"}>&#8250;</small><small className={`${"breadcrumHeader"} ${"primary"}`}>HAND</small></div>*/}
    <div className={"pageContainer"} Style={loaded ? `opacity:1` : `opacity:0`}>
    <div className={categoryStyles.titleCont}>
    <Link className={categoryStyles.backButton} to={`../../painting#selected works`} aria-label={`back to paintings`}>&times;</Link>
    <h2 className={categoryStyles.title}>selected works</h2>
    </div>
    <ImageGrid series='selected-works'/>
    </div>
    </Layout>
    </>
  )}
</myContext.Consumer>

  )

}
export default SelectedWorks
