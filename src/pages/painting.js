import React, {useEffect, useState} from "react"
import { Helmet } from 'react-helmet'
import Category from "../components/Category"
import Layout from "../components/layout"
import paintingStyles from "./painting.module.css"
import { Link } from "gatsby"

const categories =
  [
    {name: 'portrait', defaultImg: 'the libertine', description: 'description...'},
    {name: 'water', defaultImg: 'the flood', description: 'description...'},
    {name: 'hand', defaultImg: 'el primo', description: 'description...'},
    {name: 'cloud', defaultImg: 'the valley of golden souls', description: 'description...'}
  ]

function Painting() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setTimeout(()=>{
    setLoaded(true)
  },50)
  },)

  const categoryList = categories.map((category,index) =>
  <Category name={`${category.name} series`} link={category.name} description={category.description} src={`${category.defaultImg}.jpg`} index={index}/>
  )

  return (
  <>
  <Helmet htmlAttributes={{ lang : 'en-uk' }}>
    <meta charSet="utf-8" />
    <title>Rory Macdonald | Paintings</title>
    <meta name="description" content="Gallery of paintings by Rory Macdonald."/>
    <meta name="keywords" content="oils, canvas, board, oil painting, art, artist, Scottish, Scotland, Scottish artist"/>
    <meta name="author" content="Rory MacDonald"/>
    <meta charSet="utf-8" />
    <link rel="canonical" href="" />
    <link rel="icon" type="image/png" href="./favicon.png"/>
    <meta property="og:title" content='Rory Macdonald' />
    <meta property="og:description" content='Paintings' />
    <meta property="og:image" content={`https://rory-macdonald-static.s3.eu-west-2.amazonaws.com/og_image/studio_og.jpg`} />
  </Helmet>
  <Layout>
  <div className={paintingStyles.cont} Style={loaded ? `opacity:1` : `opacity:0`}>

  <Category id="selected works" name="selected works" link='selected works' description={""} src='the renegade.jpg'/>

  {categoryList}

  </div>

  </Layout>
  </>
)
}

export default Painting;
