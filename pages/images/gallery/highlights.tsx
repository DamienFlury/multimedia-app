import React from 'react';
import sampleSize from 'lodash/sampleSize';
import { getAllPhotos } from '../../../albums';
import Layout from '../../../components/Layout';
import AlbumView from '../../../components/AlbumView';

const Highlights: React.FC = () => {
  const images = sampleSize(getAllPhotos(), 10);

  return (
    <Layout title="Highlights">
      <div className="container mx-auto">
        <h1 className="text-5xl py-4">Highlights</h1>
        <AlbumView images={images} />
      </div>
    </Layout>
  );
};

export default Highlights;
