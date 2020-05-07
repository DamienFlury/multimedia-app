import React from 'react';
import Layout from '../components/Layout';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';

const About: React.FC = () => (
  <Layout title="About">
    <Main>
      <Typography variant="h1">Urheberrecht</Typography>
      <Typography>
        Alle verwendeten Medien stammen aus eigener Quelle.
      </Typography>
      <Typography>&copy;2020 Damien Flury</Typography>
    </Main>
  </Layout>
);

export default About;
