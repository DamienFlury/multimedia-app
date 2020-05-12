import React from 'react';
import Layout from '../components/Layout';

const About: React.FC = () => (
  <Layout title="About">
    <main className="container mx-auto">
      <h1 className="text-5xl my-4">Urheberrecht</h1>
      <p className="my-4">
        Alle verwendeten Medien stammen aus eigener Quelle.
      </p>
      <p className="text-gray-600">&copy;2020 Damien Flury</p>
    </main>
  </Layout>
);

export default About;
