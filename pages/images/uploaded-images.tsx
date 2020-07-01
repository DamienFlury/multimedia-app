import React, { useState, useEffect } from 'react';
import { Image } from '@prisma/client';
import Layout from '../../components/Layout';

const UploadedImages: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/upload');
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);
  return (
    <Layout title="Uploads">
      <div>
        {images.map((image) => (
          <img src={image.processedPath} key={image.id} />
        ))}
      </div>
    </Layout>
  );
};

export default UploadedImages;
