import React from "react"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import { Link } from "gatsby"

function Home() {


  return (
  <>
  <Helmet htmlAttributes={{ lang : 'en-uk' }}>
    <meta charSet="utf-8" />
    <title>Rory Macdonald | 404</title>
  </Helmet>
  <Layout>
  <div Style="display:flex; flex-direction:column; justify-content:center;" className={"pageContainer"}>
  <div Style="font-size: 2em; text-align:center; color: #ddd; margin-top: -120px;">Sorry, page not found</div><div Style="text-align:center;margin: 1em; font-size: 1.2em"><Link Style="color:#aaa" to="/">&#8249; back to site</Link></div>
  </div>
  </Layout>
  </>
)
}

export default Home;
