import React from 'react';
import sampleSize from 'lodash/sampleSize';
import { getAllPhotos } from '../../albums';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import Typography from '../../styled-components/Typography';
import AlbumView from '../../components/AlbumView';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  overflow: auto;
`;

const Highlights: React.FC = () => {
  const images = sampleSize(getAllPhotos(), 10);

  return (
    <Layout title="Highlights">
      <Wrapper>
        <Typography variant="h1">Highlights</Typography>
        <AlbumView images={images} />
      </Wrapper>
    </Layout>
  );
};

export default Highlights;
