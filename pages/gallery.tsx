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
      '/skiing/20191228_113954.jpg',
      '/skiing/20191228_114008.jpg',
      '/skiing/20191228_114020.jpg',
      '/skiing/20191228_114026.jpg',
      '/skiing/20200215_110217.jpg',
      '/skiing/20200215_133036.jpg',
      '/skiing/20200215_133042.jpg',
      '/skiing/20200215_133045.jpg',
      '/skiing/20200215_133055.jpg',
      '/skiing/20200215_133057.jpg',
      '/skiing/20200215_133059.jpg',
      '/skiing/20200215_134215.jpg',
      // '/skiing/20200314_102105.jpg',
      // '/skiing/20200314_102108.jpg',
      // '/skiing/20200314_102110.jpg',
      // '/skiing/20200314_102324.jpg',
      // '/skiing/20200314_102327.jpg',
      // '/skiing/20200314_102329.jpg',
      // '/skiing/20200314_102603.jpg',
      // '/skiing/20200314_102604.jpg',
      // '/skiing/20200314_102605.jpg',
      // '/skiing/20200314_103050.jpg',
      // '/skiing/20200314_103700.jpg',
      // '/skiing/20200314_105321.jpg',
      // '/skiing/20200314_111641.jpg',
      // '/skiing/20200314_111709.jpg',
      // '/skiing/20200314_112148.jpg',
      // '/skiing/20200314_120758.jpg',
      // '/skiing/20200314_120803.jpg',
      // '/skiing/20200314_120811.jpg',
      // '/skiing/20200314_120919.jpg',
      // '/skiing/20200314_120925.jpg',
      // '/skiing/20200314_120933.jpg',
      // '/skiing/20200314_120935.jpg',
      // '/skiing/20200314_121004.jpg',
      // '/skiing/20200314_121006.jpg',
      // '/skiing/20200314_121014.jpg',
      // '/skiing/20200314_121239.jpg',
      // '/skiing/20200314_121325.jpg',
    ],
  },
  {
    title: 'Biking',
    images: [
      '/bike/20200404_151410.jpg',
      '/bike/20200404_151412.jpg',
      '/bike/20200404_151417.jpg',
      '/bike/20200404_151430.jpg',
      '/bike/20200404_151448.jpg',
      '/bike/20200404_151449.jpg',
      '/bike/20200404_151452.jpg',
      '/bike/20200404_151457.jpg',
      '/bike/20200404_152149.jpg',
      '/bike/20200417_190344.jpg',
      '/bike/20200417_190631.jpg',
      '/bike/20200417_190620.jpg',
      '/bike/20200418_143056.jpg',
      '/bike/20200418_143142.jpg',
      '/bike/20200418_145706.jpg',
      '/bike/20200418_145708.jpg',
      '/bike/20200418_145727.jpg',
      '/bike/20200419_150812.jpg',
      '/bike/20200419_150816.jpg',
      '/bike/20200419_150821.jpg',
      '/bike/20200419_150826.jpg',
      '/bike/20200419_150843.jpg',
      '/bike/20200419_150850.jpg',
      '/bike/20200419_150852.jpg',
      '/bike/20200419_151155.jpg',
      '/bike/20200419_151318.jpg',
    ],
  },
];

const Gallery: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <Layout title="Gallery">
      <Wrapper>
        <Typography variant="h1">Galerie</Typography>
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
