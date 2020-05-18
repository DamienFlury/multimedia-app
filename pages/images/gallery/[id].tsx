import React from 'react';
import { useRouter } from 'next/dist/client/router';
import Layout from '../../../components/Layout';
import albums from '../../../albums';
import AlbumView from '../../../components/AlbumView';

const Album: React.FC = () => {
  const router = useRouter();
  const album = albums.find((a) => a.path === router.query.id);

  return (
    <Layout title={album?.title ?? 'Album'}>
      <div className="container mx-auto">
        <h1 className="text-5xl my-4">{album?.title}</h1>
        <AlbumView images={album?.images ?? []} />
      </div>
    </Layout>
  );
};

export default Album;
