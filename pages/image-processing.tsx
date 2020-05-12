import React from 'react';
import Layout from '../components/Layout';
import ReactCompareImage from 'react-compare-image';

type Item = {
  leftImage: string;
  rightImage: string;
  title: string;
};
const items: Item[] = [
  {
    title: 'Colour Changes',
    leftImage: '/skiing/20200314_102327.jpg',
    rightImage: '/skiing/20200314_102327_changed_colors.jpg',
  },
  {
    title: 'Gaussian Blur',
    leftImage: '/bike/20200418_145708.jpg',
    rightImage: '/bike/20200418_145708_blur.jpg',
  },
  {
    title: 'Emboss',
    leftImage: '/bike/20200419_150821.jpg',
    rightImage: '/bike/20200419_150821_emboss.jpg',
  },
];

const ImageProcessing: React.FC = () => {
  return (
    <Layout title="Bildbearbeitung">
      <main className="container mx-auto">
        <h1 className="text-5xl py-4">Bildbearbeitung</h1>
        <p>
          Für alle Bildbearbeitungen habe ich das Tool GIMP (GNU Image
          Manipulation Program) verwendet.
        </p>
        {items.map((item) => (
          <div key={item.title} className="pb-4">
            <h2 className="text-3xl py-4">{item.title}</h2>
            <ReactCompareImage
              leftImage={item.leftImage}
              leftImageLabel="Before"
              rightImage={item.rightImage}
              rightImageLabel="After"
            />
          </div>
        ))}
      </main>
    </Layout>
  );
};

export default ImageProcessing;
