import React from 'react';
import Layout from '../components/Layout';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
import styled from 'styled-components';
import Paper from '../styled-components/Paper';

const Image = styled.img`
  width: 100%;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 20px 0;
`;

const FileTypes: React.FC = () => (
  <Layout title="Dateitypen">
    <Main>
      <Typography variant="h1">Verwendete Dateitypen</Typography>
      <StyledPaper>
        <Typography variant="h2">JPEG</Typography>
        <Typography>Die meisten Dateitypen sind .jpg:</Typography>
        <Image src="/skiing/20191228_114008.jpg" />
      </StyledPaper>
      <StyledPaper>
        <Typography variant="h2">SVG</Typography>
        <Typography>Jedoch habe ich auch .SVG verwendet, wie:</Typography>
        <Image src="/react.svg" />
        <Typography>
          SVG haben die tolle Eigenschaft, dass sie nicht Pixel für Pixel
          gespeichert sind, sondern dem Browser eine Anleitung geben, wie es
          gezeichnet werden muss. Somit sind SVG eher leichte Dateien, können
          aber beliebig gezoomt werden, ohne an Auflösung zu verlieren.
        </Typography>
      </StyledPaper>
      <StyledPaper>
        <Typography variant="h2">WebP</Typography>
        <Typography>
          Eine ganz neue Bilddateiart gemacht für das Web ist .webp:
        </Typography>
        <Image src="/angular.webp" />
        <Typography>
          WebP ermöglicht ca. 26% kleinere Dateigrössen als PNG, und unterstützt
          auch Transparenz.
        </Typography>
      </StyledPaper>
    </Main>
  </Layout>
);

export default FileTypes;
