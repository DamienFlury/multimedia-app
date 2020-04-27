import React from 'react';
import Layout from '../components/Layout';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
import ReactCompareImage from 'react-compare-image';

const ImageProcessing: React.FC = () => {
  return (
    <Layout title="Image Processing">
      <Main>
        <Typography variant="h1">Image Processing</Typography>
        <ReactCompareImage
          leftImage="/mountain-edge.jpg"
          rightImage="/changed_colors.jpg"
        />
      </Main>
    </Layout>
  );
};

export default ImageProcessing;
