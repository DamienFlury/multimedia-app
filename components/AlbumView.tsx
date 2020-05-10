import React, { useState } from 'react';
import styled from 'styled-components';
import CardImage from '../styled-components/CardImage';
import Card from '../styled-components/Card';
import FsLightbox from 'fslightbox-react';

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

type Props = {
  images: string[];
};

const AlbumView: React.FC<Props> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Flex>
      {images.map((image, i) => (
        <Card
          key={image}
          onClick={() => {
            setIndex(i);
            setOpen(!open);
          }}
          image={image}
        />
      ))}
      <FsLightbox toggler={open} sources={images} sourceIndex={index} />
    </Flex>
  );
};

export default AlbumView;
