import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export default (props) => {

  const { filename, type = 'default', alt, imgStyle } = props;

  const images = useStaticQuery(graphql`
    query ImageQuery {
      data: allFile {
        edges {
          node {
            relativePath
            default: childImageSharp {
              fluid(maxWidth: 3080, quality:65) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
            square: childImageSharp {
              fluid(maxWidth: 3080, quality:65) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const image = images.data.edges.find(n => {
    return n.node.relativePath.endsWith(filename);
  });

  if (!image) {
    return null;
  }

  return (
    <Img loading="lazy" alt={alt}
    imgStyle={{
      objectFit: "cover",
      objectPosition: props.objectPosition ? props.objectPosition : "50% 50%"
    }}

    fluid={{
      ...image.node[type].fluid,
    }} />
  )
}
