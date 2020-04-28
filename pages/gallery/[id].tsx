import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import albums from '../../albums';
import Typography from '../../styled-components/Typography';
import AlbumView from '../../components/AlbumView';

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  box-sizing: border-box;
  overflow: auto;
`;

const Album: React.FC = () => {
  const router = useRouter();
  const album = albums.find((a) => a.path === router.query.id);

  return (
    <Layout title={album?.title ?? 'Album'}>
      <Wrapper>
        <Typography variant="h1">{album?.title}</Typography>
        <AlbumView images={album?.images ?? []} />
      </Wrapper>
    </Layout>
  );
};

export default Album;
