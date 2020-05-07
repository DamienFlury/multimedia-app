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

export default function Home() {
  return (
    <Layout title="Welcome">
      <div className="container">
        <Main>
          <Typography variant="h1" className="rellax">
            Willkommen
          </Typography>
          <Typography>
            Dies ist meine Multimedia Applikation, erstellt im Rahmen des
            BBW-Moduls 152.
          </Typography>
          <div className="flex flex-wrap">
            <Link href="/gallery/highlights">
              <a>
                <Card>
                  <img
                    className="w-full"
                    src="/bike/20200418_145706.jpg"
                    alt="Highlights"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl text-gray-800 mb-2">
                      Highlights
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
            <Link href="/image-processing">
              <a>
                <Card>
                  <img
                    className="w-full"
                    src="/skiing/20200314_102327_changed_colors.jpg"
                    alt="Changed Colours"
                  />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl text-gray-800 mb-2">
                      Bildbearbeitung
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
            <Link href="/technologies">
              <a>
                <Card>
                  <img className="w-full" src="/react.svg" alt="React" />
                  <div className="px-6 py-4">
                    <div className="font-bold text-xl text-gray-800 mb-2">
                      Technologien
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
            <Link href="/datatypes">
              <a>
                <Card>
                  <CardImage src="/skiing/20200215_133057.jpg" />
                  <CardTitle variant="h4">Dateitypen</CardTitle>
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
