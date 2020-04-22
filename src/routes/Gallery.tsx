import React from 'react';
import styled from 'styled-components';
import Card from '../styled-components/Card';
import Typography from '../styled-components/Typography';
import mom from '../assets/images/mom.jpg';
import cocaCola from '../assets/images/coca-cola.jpg';
import first from '../assets/images/first.jpg';
import mountains from '../assets/images/mountains.jpg';
import sis from '../assets/images/sis.jpg';
import skiLift from '../assets/images/ski-lift.jpg';
import skiLift2 from '../assets/images/ski-lift2.jpg';
import tower from '../assets/images/tower.jpg';

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Gallery: React.FC = () => (
  <Wrapper>
    <Typography variant="h1">Gallery</Typography>
    <Flex>
      <Card>
        <Image src={mom} />
      </Card>
      <Card>
        <Image src={cocaCola} />
      </Card>
      <Card>
        <Image src={first} />
      </Card>
      <Card>
        <Image src={mountains} />
      </Card>
      <Card>
        <Image src={sis} />
      </Card>
      <Card>
        <Image src={skiLift} />
      </Card>
      <Card>
        <Image src={skiLift2} />
      </Card>
      <Card>
        <Image src={tower} />
      </Card>
    </Flex>
  </Wrapper>
);

export default Gallery;
