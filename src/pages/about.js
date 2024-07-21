import React, {useEffect, useState} from "react"
import { Helmet } from 'react-helmet'
import Background from "../components/Background"
import Layout from "../components/layout"
import FadeInSection from "../components/FadeInSection"
import aboutStyles from "./about.module.css"


import { Link } from "gatsby"







function About() {
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
    <title>Rory Macdonald | About</title>
    <meta name="description" content="About Rory MacDonald."/>
    <meta name="keywords" content="Rory Macdonald Paintings, paintings by Rory Macdonald, Ruaridh Macdonald, Rory Mcdonald, Rory MacDonald, artist, painter, painting, paintings, British artists, British painters, British art, University of St Andrews, Scottish art, Scottish painters"/>
    <meta name="author" content="Rory MacDonald"/>
    <meta charSet="utf-8" />
    <link rel="canonical" href="" />
    <meta property="og:title" content='Rory Macdonald' />
    <meta property="og:description" content="About Rory Macdonald" />
    <meta property="og:image" content={`https://rory-macdonald-static.s3.eu-west-2.amazonaws.com/og_image/studio_og.jpg`} />
  </Helmet>
  <Layout>
  <div className={"pageContainer"} Style={loaded ? `opacity:1` : `opacity:0`}>

  <div className={aboutStyles.content} Style="width:80%; margin-left:10%;">

  <div className={`${aboutStyles.section} ${aboutStyles.one}`}>
  <b className={aboutStyles.header}>Artist's statement</b>
  <p className={aboutStyles.para}>After completing my postgraduate Art History degree at the University of St Andrews I have been working full-time as an artist. As both my parents — Alan Macdonald and Carolynda Macdonald — are professional painters, I have been taught to paint from an early age. However, it wasn’t until after university that I started to paint full-time in my parents’ studio space in Carnoustie. Their extensive experience has been passed down to me through a traditional studio education since I started working as their assistant in 2010. I continued my artistic training in tandem with my academic work at the University of St Andrews and I have now exhibited in the UK, USA and Australia.</p>
  <p className={aboutStyles.para}>My artistic practice fuses my formal art historical education and the traditional mode of oil painting in order to reframe Renaissance and Baroque painting in the twenty-first century. Through juxtaposition and adjustment of scale I intend to alter the perception of works by canonical artistic figures — such as Diego Velazquez or Luca Giordano. These painted figures are removed from their original context and placed into the palm of a hand, at the top of a cloud or submerged in inky black water. It is through this change that I intend to charge these historical works with alternate meanings which have a contemporary relevance.</p>
  <p className={aboutStyles.para}>My largest art historical work centred on the walking art of Hamish Fulton, whom I interviewed during the writing process of my postgraduate thesis. In addition to walking art, I have written extensively on documentary photography, land art, non-Western modern art, and portrait miniatures. It is with this contemporary focussed art historical background that I approach the work of the Old Masters in my own painting: probing my own practice continuously and questioning its relationship with society in the twenty-first century.</p>
  </div>

 <div className={aboutStyles.section}>
  <b className={aboutStyles.header}>Exhibitions</b>
  <table>
   <tr>
    <td>2024</td>
    <td>House of Macdonald, Kilmorack Gallery, Beauly</td>
  </tr><tr>
    <td>2023</td>
    <td>Heaven & Earth, Solo Show, Heriot Gallery, Edinburgh</td>
  </tr><tr>
    <td>2023</td>
    <td>Art of Antiquity, Haven Gallery, Long Island, New York</td>
  </tr> <tr>
    <td>2023</td>
    <td>Duality, Haven Gallery, Long Island, New York</td>
  </tr> <tr>
    <td>2022</td>
    <td>Winter Show, Heriot Gallery, Edinburgh</td>
  </tr> <tr>
    <td>2022</td>
    <td>Symbiosis, Beinart Gallery, Melbourne</td>
  </tr><tr>
    <td>2022</td>
    <td>Transfigurations, Solo Show, Heriot Gallery, Edinburgh</td>
  </tr><tr>
    <td>2022</td>
    <td>Festival Show, Heriot Gallery, Edinburgh</td>
  </tr><tr>
    <td>2022</td>
    <td>Transfigurations, Solo Show, Heriot Gallery, Edinburgh</td>
  </tr> <tr>
    <td>2021</td>
    <td>Context Art Miami, Quantum Contemporary Art, Miami</td>
  </tr>
 <tr>
    <td>2021</td>
    <td>Boutique Christmas Show: Quantum Contemporary Art, London</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>Christmas Show: Heriot Gallery, Edinburgh</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>Affordable Art Fair New York: Quantum Contemporary Art, New York City</td>
  </tr>  <tr>
    <td>2021</td>
    <td>Figurative Show: Heriot Gallery, Edinburgh</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>At Home in The Compton Gallery: Quantum Contemporary Art, The Cotswolds</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>Battersea Affordable Art Fair: Quantum Contemporary Art, London</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>Summer Show at West Horsely Place: Quantum Contemporary Art, Surrey</td>
  </tr>
  <tr>
    <td>2021</td>
    <td>Champagne Show: Quantum Contemporary Art, London, London</td>
  </tr>
  <tr>
    <td>2020</td>
    <td>ING Discerning Eye Exhibition, London</td>
  </tr>
  <tr>
    <td>2020</td>
    <td>Boutique Christmas Show: Quantum Contemporary Art, London</td>
  </tr>
</table>
</div>

  <div className={aboutStyles.section}>
  <b className={aboutStyles.header}>Timeline</b>
  <table>
  <tr>
    <td>1996</td>
    <td>Born in London, United Kingdom</td>
  </tr>
  <tr>
    <td>2010-2014</td>
    <td>Studio Assistant for Alan and Carolynda Macdonald</td>
  </tr>
  <tr>
    <td>2014-19</td>
    <td>Part-time Oil Painting tuition at Black Betty Studios Ltd.</td>
  </tr>
  <tr>
    <td>2018</td>
    <td>MA Hons. Art History, University of St Andrews</td>
  </tr>
  <tr>
    <td>2019</td>
    <td>MLitt Art History, University of St Andrews
</td>
  </tr>
  <tr>
    <td>2019-2020</td>
    <td>Full-time Oil Painting tuition at Black Betty Studios Ltd.</td>
  </tr>
  <tr>
    <td>2019-present</td>
    <td>Working full-time as a Fine Artist
</td>
  </tr>
</table>
</div>

<div className={aboutStyles.section}>
<b className={aboutStyles.header}>Academic work</b>

  <p className={aboutStyles.timeline_header}>2018</p>

    <ul className={aboutStyles.works_item}>
    <li>Deconstructing the Diminutive: An Examination of the Function and Significance of Intimate Portrait Miniatures in Eighteenth-Century England.</li>
    <li>Documenting the Demonic: An Assessment of the Four Sonderkommando Photographs and their Framing of Auschwitz</li>
    <li>Deconstructing Modernism: Rethinking the Art Historical Approach to Transnational Modern Artists from Beyond the West, with the Gutai Group as a Case Study.</li>
    </ul>

<p className={aboutStyles.timeline_header}>2019</p>
    <ul className={aboutStyles.works_item}>
    <li>Walking for the Wild: An Ecocritical Assessment of Hamish Fulton's Walking Art in the Cairngorms.</li>
    <li>Walking through the Index: An Examination of Role of Text in Hamish Fulton's Walking Art.</li>
    <li>Sculpting Nigerian Identity: An Examination of Representation of Clothing Within State-Commissioned Sculpture in Lagos and an Assessment of its Role in Building a Nigerian National Identity.</li>
    </ul>

</div>


  </div>
  </div>
  </Layout>
  </>
)
}

export default About;
