import React, {useEffect, useState} from "react"
import { Helmet } from 'react-helmet'
import Background from "../components/Background"
import Layout from "../components/layout"
import ContactForm from "../components/ContactForm"

import { useFormik } from "formik";


import { Link } from "gatsby"

function Contact() {

  const [loaded, setLoaded] = useState(false)


  useEffect(() => {
    setTimeout(()=>{
    setLoaded(true)
  },50)
  },)

  return (
  <>
  <Helmet htmlAttributes={{ lang : 'en-uk' }}>
    <meta charSet="utf-8" />
    <title>Rory Macdonald | Contact</title>
    <meta name="description" content="Contact Rory Macdonald."/>
    <meta name="keywords" content="Rory Macdonald Paintings, paintings by Rory Macdonald, Ruaridh Macdonald, Rory Mcdonald, Rory MacDonald, artist, painter, painting, paintings, British artists, British painters, British art, University of St Andrews, Scottish art, Scottish painters"/>
    <meta name="author" content="Rory Macdonald"/>
    <meta charSet="utf-8" />
    <link rel="canonical" href="" />
    <meta property="og:title" content='Rory Macdonald' />
    <meta property="og:description" content="Contact" />
    <meta property="og:image" content={`https://rory-macdonald-static.s3.eu-west-2.amazonaws.com/og_image/studio_og.jpg`} />
  </Helmet>
  <Layout>
  <div className={"pageContainer"} Style={loaded ? `opacity:1` : `opacity:0`}>

  <div Style="color:#ddd; width:80%; margin-left:10%">


  <ContactForm/>


  </div>

  </div>
  </Layout>
  </>
)
}

export default Contact;
