import React from 'react';
import Typography from '../styled-components/Typography';
import Layout from '../components/Layout';
import Main from '../styled-components/Main';
import Card from '../styled-components/Card';
import styled from 'styled-components';
import CardImage from '../styled-components/CardImage';
import CardTitle from '../styled-components/CardTitle';
import Link from 'next/link';

// const ParallaxContainer = styled.div`
//   max-height: 400px;
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Image = styled.img`
//   width: 150%;
// `;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
`;

export default function Home() {
  return (
    <Layout title="Welcome">
      <div className="container">
        <Main>
          <Typography variant="h1">Willkommen</Typography>
          <Typography>
            Dies ist meine Multimedia Applikation, erstellt im Rahmen des
            BBW-Moduls 152.
          </Typography>
          <Cards>
            <Link href="/gallery">
              <a>
                <Card>
                  <CardImage src="/bike/20200418_145706.jpg" />
                  <CardTitle variant="h4">Galerie</CardTitle>
                </Card>
              </a>
            </Link>
            <Link href="/image-processing">
              <a>
                <Card>
                  <CardImage src="/skiing/20200314_102327_changed_colors.jpg" />
                  <CardTitle variant="h4">Bildbearbeitung</CardTitle>
                </Card>
              </a>
            </Link>
            <Link href="/technologies">
              <a>
                <Card>
                  <CardImage src="/react.svg" />
                  <CardTitle variant="h4">Technologien</CardTitle>
                </Card>
              </a>
            </Link>
          </Cards>
        </Main>
      </div>
      <style jsx>
        {`
          a {
            text-decoration: none;
          }
        `}
      </style>
    </Layout>
  );
}
