import React from 'react'
import Layout from '../components/layout'
import Typography from '../styled-components/Typography'
import SEO from '../components/seo'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import Card from '../styled-components/Card'
import Lightbox from '../components/Lightbox'

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
          fluid(maxWidth: 1200) {
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
        <Lightbox fluid={data.tower.childImageSharp.fluid} />
      </ImageWrapper>
    </Layout>
  )
}

export default Gallery
