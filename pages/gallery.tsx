import React, { useState } from 'react';
import styled from 'styled-components';
import FsLightbox from 'fslightbox-react';
import Card from '../styled-components/Card';
import Typography from '../styled-components/Typography';
import Layout from '../components/Layout';

type ImageProps = {
  src: string;
};

const Image = styled.div<ImageProps>`
  background: url(${(props) => props.src});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 200px;
`;

const Wrapper = styled.div`
  width: 80%;
  margin: auto;
`;

const Flex = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const imageGroups = [
  {
    title: 'Skiing',
    images: [
      '/skiing/mom.jpg',
      '/skiing/coca-cola.jpg',
      '/skiing/first.jpg',
      '/skiing/mountains.jpg',
      '/skiing/sis.jpg',
      '/skiing/tower.jpg',
      '/skiing/ski-lift.jpg',
      '/skiing/ski-lift2.jpg',
    ],
  },
  {
    title: 'Biking',
    images: [
      '/biking/20200404_151410.jpg',
      '/biking/20200404_151412.jpg',
      '/biking/20200404_151417.jpg',
      '/biking/20200404_151430.jpg',
      '/biking/20200404_151448.jpg',
      '/biking/20200404_151449.jpg',
      '/biking/20200404_151452.jpg',
      '/biking/20200404_151457.jpg',
      '/biking/20200404_152149.jpg',
      '/biking/20200417_190344.jpg',
      '/biking/20200417_190631.jpg',
      '/biking/20200417_190620.jpg',
      '/biking/20200418_143056.jpg',
      '/biking/20200418_143142.jpg',
      '/biking/20200418_145706.jpg',
      '/biking/20200418_145708.jpg',
      '/biking/20200418_145727.jpg',
      '/biking/20200419_150812.jpg',
      '/biking/20200419_150816.jpg',
      '/biking/20200419_150821.jpg',
      '/biking/20200419_150826.jpg',
      '/biking/20200419_150843.jpg',
      '/biking/20200419_150850.jpg',
      '/biking/20200419_150852.jpg',
      '/biking/20200419_151155.jpg',
      '/biking/20200419_151318.jpg',
    ],
  },
];

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Layout title="Gallery">
      <Wrapper>
        <Typography variant="h1">Gallery</Typography>
        {imageGroups.map((group, groupIndex) => (
          <div key={group.title}>
            <Typography variant="h2">{group.title}</Typography>
            <Flex>
              {group.images.map((image, i) => (
                <Card
                  onClick={() => {
                    setIndex(
                      imageGroups
                        .slice(0, groupIndex)
                        .map((g) => g.images.length)
                        .reduce((acc, cur) => acc + cur, 0) + i
                    );
                    setOpen(!open);
                  }}
                  key={image}
                >
                  <Image src={image} />
                </Card>
              ))}
            </Flex>
          </div>
        ))}
        <FsLightbox
          toggler={open}
          sources={imageGroups.flatMap((group) => group.images)}
          sourceIndex={index}
        />
      </Wrapper>
    </Layout>
  );
};

export default Gallery;
