import React from 'react'
import Layout from '../components/layout'
import Typography from '../styled-components/Typography'
import SEO from '../components/seo'
import styled from 'styled-components'
// import Image1 from '../images/20200314_102105.jpg'
// import Image2 from '../images/20200314_102110.jpg'
// import Image3 from '../images/20200314_102324.jpg'
// import Image4 from '../images/20200314_111709.jpg'
// import Image5 from '../images/20200314_120743.jpg'
// import Image6 from '../images/20200314_120758.jpg'
// import Image7 from '../images/20200314_120811.jpg'
// import Image8 from '../images/20200314_121015.jpg'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Card from '../styled-components/Card'

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin-top: 20px;
`

type ImageProps = {
  src?: string
}

const StyledBgImage = styled(BackgroundImage)`
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
`

const Gallery: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      first: file(relativePath: { eq: "first.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cocaCola: file(relativePath: { eq: "coca-cola.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sis: file(relativePath: { eq: "sis.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mom: file(relativePath: { eq: "mom.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mountains: file(relativePath: { eq: "mountains.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skiLift: file(relativePath: { eq: "ski-lift.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skiLift2: file(relativePath: { eq: "ski-lift2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tower: file(relativePath: { eq: "tower.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Gallery" />
      <Typography variant="h3">Gallery</Typography>
      <ImageWrapper>
        <Card>
          <StyledBgImage fluid={data.first.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.cocaCola.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.sis.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.mom.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.mountains.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.skiLift.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.skiLift2.childImageSharp.fluid} />
        </Card>
        <Card>
          <StyledBgImage fluid={data.tower.childImageSharp.fluid} />
        </Card>
        {/* <Image src={Image1} /> */}
        {/* <Image src={Image2} />
        <Image src={Image3} />
        <Image src={Image4} />
        <Image src={Image5} />
        <Image src={Image8} />
        <Image src={Image6} />
        <Image src={Image7} /> */}
      </ImageWrapper>
    </Layout>
  )
}

export default Gallery
