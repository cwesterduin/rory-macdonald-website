import React, { useState, useEffect } from "react"
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import ImageGrid from "../components/ImageGrid"
import "../components/layout.css"

import categoryStyles from "./category.module.css"

import { graphql } from "gatsby"


function Category({pageContext: {category}}) {

  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
    setLoaded(true)
  },50)
  },)

  function linkBack(e) {
    e.changeParentPage(false)
  }

  function getName() {
    switch (category.name) {
      case "selected-works":
        return "selected works";
      case "sale":
        return "sale";
      case "studio-paintings":
        return "studio paintings";
      default:
        return `${category.name} series`;
    }
  }

  return (
    <>
    <Helmet htmlAttributes={{ lang : 'en-uk' }}>
    <meta charSet="utf-8" />
    <title>{`Rory Macdonald | ${(category.name).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`}</title>
    <meta name="description" content={`Gallery of paintings from Rory Macdonald's series on ${(category.name).split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}.`}/>
    <meta name="keywords" content={`Rory Macdonald Paintings, paintings by Rory Macdonald, Ruaridh Macdonald, Rory Mcdonald, Rory MacDonald, artist, painter, painting, paintings, British artists, British painters, British art, University of St Andrews, Scottish art, Scottish painters, ${(category.name)}`}/>
    <meta name="author" content="Rory Macdonald"/>
    <meta property="og:title" content={'Rory Macdonald Paintings'} />
    <meta property="og:description" content={category.name} />
    <meta property="og:image" content={`https://rory-macdonald-static.s3.eu-west-2.amazonaws.com/og_image/${category.defaultImg.replace(/ /g,"+")}_og.jpg`} />
    <meta charSet="utf-8" />
    <link rel="canonical" href="" />
    </Helmet>
    <Layout>

    {/*<div className="subHeader"><Link to="/"><small className={"subHeaderLink"}>Paintings</small></Link><small className={"spacer"}>&#8250;</small><small className={`${"breadcrumHeader"} ${"primary"}`}>HAND</small></div>*/}
    <div className={"pageContainer"} Style={loaded ? `opacity:1` : `opacity:0`}>

    <div className={categoryStyles.titleCont}>
    <Link className={categoryStyles.backButton} to={`../../painting#${category.name}`} aria-label={`back to paintings`}>&times;</Link>
    <h2 className={categoryStyles.title}>{getName()}</h2>
    </div>

    <ImageGrid series={category.name}/>
    </div>
    </Layout>
    </>


  )



}
export default Category
