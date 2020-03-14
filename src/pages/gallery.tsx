import React from 'react'
import Layout from '../components/layout'
import Typography from '../styled-components/Typography'
import SEO from '../components/seo'
import styled from 'styled-components'
import Image1 from '../images/20200314_102105.jpg'
import Image2 from '../images/20200314_102110.jpg'
import Image3 from '../images/20200314_102324.jpg'
import Image4 from '../images/20200314_111709.jpg'
import Image5 from '../images/20200314_120743.jpg'
import Image6 from '../images/20200314_120758.jpg'
import Image7 from '../images/20200314_120811.jpg'
import Image8 from '../images/20200314_121015.jpg'

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`

type ImageProps = {
  src: string
}

const Image = styled.div<ImageProps>`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 150px;
  margin: 10px;
  border-radius: 5px;
  background-color: #fff;
  background: url(${props => props.src});
  background-size: cover;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  &::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }
  &:hover::after {
    opacity: 1;
  }
`

const Gallery: React.FC = () => (
  <Layout>
    <SEO title="Gallery" />
    <Typography variant="h3">Gallery</Typography>
    <ImageWrapper>
      <Image src={Image1} />
      <Image src={Image2} />
      <Image src={Image3} />
      <Image src={Image4} />
      <Image src={Image5} />
      <Image src={Image8} />
      <Image src={Image6} />
      <Image src={Image7} />
    </ImageWrapper>
  </Layout>
)

export default Gallery
