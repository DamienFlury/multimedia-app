import React from 'react';
import Layout from '../components/Layout';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
import styled from 'styled-components';
import Paper from '../styled-components/Paper';

const Image = styled.img`
  width: 100%;
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 20px;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin: 20px 0;
`;

const Techniques: React.FC = () => (
  <Layout title="Techniken">
    <Main>
      <Typography variant="h1">Techniken</Typography>
      <Typography variant="h2">Tiefenschärfe</Typography>
      <StyledPaper>
        <Typography>Hintergrundunschärfe</Typography>
        <Image src="/bike/20200419_150843.jpg" />
      </StyledPaper>
      <StyledPaper>
        <Typography>Vordergrundunschärfe</Typography>
        <Image src="/skiing/20200314_111709.jpg" />
      </StyledPaper>

      <Typography variant="h2">1/3-Regel</Typography>
      <StyledPaper>
        <Typography>
          Wie man hier sehr schön sieht, ist bei folgenden Bildern der Teil im
          Vordergrund im unteren Drittel.
        </Typography>
        <ImageGrid>
          <Image src="/bike/20200404_151457.jpg" />
          <Image src="/bike/20200404_151457_splitted.jpg" />
        </ImageGrid>
        <Image src="/skiing/20200215_110217.jpg" />
      </StyledPaper>

      <Typography variant="h2">Rote Augen Korrektur</Typography>
      <StyledPaper>
        <Typography>
          Natürlich sind alle Bilder mit Personen Rote-Augen-korrigiert.
        </Typography>
        <ImageGrid>
          <Image src="/bike/20200419_150852.jpg" />
          <Image src="/bike/20200417_190620.jpg" />
        </ImageGrid>
      </StyledPaper>
    </Main>
  </Layout>
);

export default Techniques;
