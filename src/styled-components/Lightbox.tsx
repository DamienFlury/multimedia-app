import React, { useState, useRef } from 'react';
import { motion, useDomEvent } from 'framer-motion';
import styled from 'styled-components';

type Props = {
  isOpen: boolean;
};

const ImageContainer = styled.div<Props>`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 66.66%;
  cursor: ${props => (props.isOpen ? 'zoom-out' : 'zoom-in')};
  z-index: ${props => (props.isOpen ? 2 : 0)};
`;

const Shade = styled(motion.div)<Props>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: ${props => (props.isOpen ? 'auto' : 'none')};
  opacity: ${props => (props.isOpen ? 1 : 0)};
  background: rgba(0, 0, 0, 0.9);
`;

const Img = styled(motion.img)<Props>`
  position: ${props => (props.isOpen ? 'fixed' : 'absolute')};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: ${props => (props.isOpen ? 'auto' : '100%')};
  height: ${props => (props.isOpen ? 'auto' : '100%')};

  max-width: 100%;
  margin: auto;
`;

const transition = {
  type: 'spring',
  damping: 25,
  stiffness: 120,
};

const Lightbox: React.FC<Partial<HTMLImageElement>> = ({ src, className }) => {
  const [isOpen, setOpen] = useState(false);
  const ref = useRef(window);
  useDomEvent(ref as any, 'scroll', () => {
    setOpen(false);
  });

  return (
    <div className={className}>
      <ImageContainer isOpen={isOpen}>
        <Shade
          isOpen={isOpen}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={transition}
          onClick={() => setOpen(false)}
        />
        <Img
          isOpen={isOpen}
          src={src}
          alt="Bimhuis in Amsterdam"
          onClick={() => setOpen(prev => !prev)}
          layoutTransition={transition}
        />
      </ImageContainer>
    </div>
  );
};

export default Lightbox;
