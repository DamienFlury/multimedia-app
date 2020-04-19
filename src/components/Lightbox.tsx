import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion, useDomEvent } from 'framer-motion'

type Props = {
  open?: boolean
}

const ImageContainer = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 66.66%;
  cursor: ${props => (props.open ? 'zoom-out' : 'zoom-in')};
  margin: 50px 0;
`

const Shade = styled(motion.div)<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${props => (props.open ? 'auto' : 'none')};
  opacity: ${props => (props.open ? 1 : 0)};
  background: rgba(0, 0, 0, 0.9);
  z-index: ${props => (props.open ? 2 : 1)};
`

const Image = styled(motion.img)<Props>`
  position: ${props => (props.open ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${props => (props.open ? 'auto' : '100%')};
  height: ${props => (props.open ? 'auto' : '100%')};
  max-width: ${props => props.open && '100%'};
  margin: auto;
  z-index: ${props => (props.open ? 2 : 1)};
`

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
}

const Lightbox: React.FC = () => {
  const [open, setOpen] = useState(false)

  useDomEvent(useRef(window as any), 'scroll', () => open && setOpen(false))

  return (
    <ImageContainer open={open}>
      <Shade
        open={open}
        animate={{ opacity: open ? 1 : 0 }}
        transition={transition}
        onClick={() => setOpen(false)}
      />
      <Image
        open={open}
        src="https://uiaa-web.azureedge.net/wp-content/uploads/2017/11/RTM19-banner-web.jpg"
        alt="Some weird image"
        onClick={() => setOpen(!open)}
        layoutTransition={transition}
      />
    </ImageContainer>
  )
}

export default Lightbox
