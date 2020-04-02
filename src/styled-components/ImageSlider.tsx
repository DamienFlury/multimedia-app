import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

type Props = {
  images: string[]
}

const Wrapper = styled.div`
  width: 800px;
  height: 400px;
  position: relative;
  overflow: hidden;
`

const Image = styled(motion.img)`
  width: 100%;
  position: absolute;
  top: 0;
`

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background: none;
  border: none;
  cursor: pointer;
`

const PreviousButton = styled(ArrowButton)`
  left: 10px;
`

const NextButton = styled(ArrowButton)`
  right: 10px;
`

const ImageSlider: React.FC<Props> = ({ images }) => {
  const [index, setIndex] = useState(0)

  const increaseIndex = () => {
    setIndex(prev => (prev >= images.length - 1 ? 0 : prev + 1))
  }
  const lowerIndex = () => {
    setIndex(prev => (prev <= 0 ? images.length - 1 : prev - 1))
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      increaseIndex()
    }, 3000)
    return () => {
      clearTimeout(timeout)
    }
  })

  return (
    <Wrapper>
      <PreviousButton onClick={increaseIndex}>
        <i className="material-icons md-36">chevron_left</i>
      </PreviousButton>
      <AnimatePresence>
        <Image
          src={images[index]}
          animate={{ x: 0 }}
          style={{ x: 100 }}
          exit={{ x: -100 }}
          key={images[index]}
        />
      </AnimatePresence>
      <NextButton onClick={lowerIndex}>
        <i className="material-icons md-36">chevron_right</i>
      </NextButton>
    </Wrapper>
  )
}

export default ImageSlider
