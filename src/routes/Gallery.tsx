import React from 'react';
import styled from 'styled-components';
import Lightbox from '../styled-components/Lightbox';
import First from '../assets/images/20200215_110217.jpg';
import Second from '../assets/images/20200215_133035.jpg';

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const Gallery: React.FC = () => (
  <div>
    <h3>Gallery</h3>
    <Grid>
      <Lightbox src={First} />
      <Lightbox src={Second} />
    </Grid>
  </div>
);

export default Gallery;
