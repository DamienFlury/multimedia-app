import React from 'react';
import Typography from '../../styled-components/Typography';
import Layout from '../../components/Layout';
import Main from '../../styled-components/Main';
import Link from 'next/link';
import styled from 'styled-components';
import Card from '../../styled-components/Card';
import CardImage from '../../styled-components/CardImage';
import CardTitle from '../../styled-components/CardTitle';
import albums from '../../albums';

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Gallery: React.FC = () => (
  <Layout title="Gallery">
    <Main>
      <Typography variant="h1">Gallery</Typography>
      <Cards>
        <Link href="/gallery/all">
          <a>
            <Card image="/bike/20200419_150812.jpg" title="All Photos" />
          </a>
        </Link>
        {albums.map((album) => (
          <Link
            as={`/gallery/${album.path}`}
            href="/gallery/[id]"
            key={album.title}
          >
            <a>
              <Card image={album.images[9]} title={album.title} />
            </a>
          </Link>
        ))}
      </Cards>
    </Main>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </Layout>
);

export default Gallery;
