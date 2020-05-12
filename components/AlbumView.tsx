import React, { useState } from 'react';
import Card from './Card';
import FsLightbox from 'fslightbox-react';

type Props = {
  images: string[];
};

const AlbumView: React.FC<Props> = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
    >
      {images.map((image, i) => (
        <Card
          key={image}
          onClick={() => {
            setIndex(i);
            setOpen(!open);
          }}
          image={image}
        />
      ))}
      <FsLightbox toggler={open} sources={images} sourceIndex={index} />
    </div>
  );
};

export default AlbumView;
