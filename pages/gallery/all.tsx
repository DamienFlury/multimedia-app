import React from 'react';
import styled from 'styled-components';
import Typography from '../../styled-components/Typography';
import Layout from '../../components/Layout';
import albums from '../../albums';
import AlbumView from '../../components/AlbumView';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  overflow: auto;
`;

const All: React.FC = () => (
  <Layout title="Gallery">
    <Wrapper>
      <Typography variant="h1">Galerie</Typography>
      {albums.map((album) => (
        <div key={album.title}>
          <Typography variant="h2">{album.title}</Typography>
          <AlbumView images={album.images} />
        </div>
      ))}
    </Wrapper>
  </Layout>
);

export default All;
