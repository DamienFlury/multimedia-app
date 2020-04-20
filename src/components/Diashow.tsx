import React, { useState } from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

const DiashowContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
`

type Props = {
  images: (FluidObject | FluidObject[] | undefined)[]
  position?: number
}

const Diashow: React.FC<Props> = ({ images, position: pos }) => {
  const [position, setPosition] = useState(pos ?? 0)
  return (
    <DiashowContainer>
      <Img
        fluid={images[position]}
        style={{
          objectFit: 'contain !important',
        }}
      />
    </DiashowContainer>
  )
}

export default Diashow
