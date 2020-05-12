import React from 'react';
import Layout from '../../components/Layout';
import albums from '../../albums';
import AlbumView from '../../components/AlbumView';

const All: React.FC = () => (
  <Layout title="Gallery">
    <div className="container mx-auto">
      {albums.map((album) => (
        <div key={album.title}>
          <h1 className="text-5xl my-4">{album.title}</h1>
          <AlbumView images={album.images} />
        </div>
      ))}
    </div>
  </Layout>
);

export default All;
