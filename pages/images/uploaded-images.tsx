import React, { useState, useEffect } from 'react';
import { Image } from '@prisma/client';
import Layout from '../../components/Layout';
import Card from '../../components/Card';

type ImageComparisonProps = {
  original: string;
  processed: string;
  onClick: () => void;
};
const ImageComparison: React.FC<ImageComparisonProps> = ({
  original,
  processed,
  onClick,
}) => (
  <div
    className="fixed top-0 left-0 grid z-10"
    onClick={onClick}
    style={{
      justifyItems: 'center',
      alignItems: 'center',
      gridTemplateColumns: '1fr 1fr',
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.5)',
    }}
  >
    <img src={original} style={{ maxWidth: '100%', maxHeight: '100%' }} />
    <img src={processed} style={{ maxWidth: '100%', maxHeight: '100%' }} />
  </div>
);

const UploadedImages: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [chosenImage, setChosenImage] = useState<Image | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/upload');
      const data = await response.json();
      setImages(data);
    };
    fetchImages();
  }, []);
  return (
    <Layout title="Uploaded Images">
      <main className="container mx-auto">
        <h1 className="text-5xl my-4">Hochgeladene Bilder</h1>
        <div
          className="grid gap-4"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          }}
        >
          {images.map((image) => (
            <Card
              onClick={() => {
                setChosenImage(image);
                setOpen(true);
              }}
              key={image.id}
              image={image.thumbnail}
            />
          ))}
        </div>
        {chosenImage && open && (
          <ImageComparison
            onClick={() => {
              setOpen(false);
            }}
            original={chosenImage.path}
            processed={chosenImage.processedPath}
          />
        )}
      </main>
    </Layout>
  );
};

export default UploadedImages;
