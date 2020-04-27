import React from 'react';
import Layout from '../components/Layout';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
import ReactCompareImage from 'react-compare-image';
import styled from 'styled-components';

const ItemWrapper = styled.div`
  margin-bottom: 30px;
`;
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
      <Main>
        <Typography variant="h1">Bildbearbeitung</Typography>
        <Typography>
          Für alle Bildbearbeitungen habe ich das Tool GIMP (GNU Image
          Manipulation Program) verwendet.
        </Typography>
        {items.map((item) => (
          <ItemWrapper key={item.title}>
            <Typography variant="h2">{item.title}</Typography>
            <ReactCompareImage
              leftImage={item.leftImage}
              leftImageLabel="Before"
              rightImage={item.rightImage}
              rightImageLabel="After"
            />
          </ItemWrapper>
        ))}
      </Main>
    </Layout>
  );
};

export default ImageProcessing;
