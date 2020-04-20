import React from 'react';
import styled from 'styled-components';
import Card from '../styled-components/Card';
import Typography from '../styled-components/Typography';
import Mom from '../assets/images/mom.jpg';

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  width: 400px;
  height: 200px;
`;

const Gallery: React.FC = () => (
  <div>
    <Typography variant="h1">Gallery</Typography>
    <Card>
      <Image src={Mom} />
      <Typography>Mom</Typography>
    </Card>
  </div>
);

export default Gallery;
