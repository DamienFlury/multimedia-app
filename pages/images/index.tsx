import React from 'react';
import Layout from '../../components/Layout';
import Card from '../../components/Card';
import Link from 'next/link';

const Images: React.FC = () => (
  <Layout title="Bilder">
    <main className="container mx-auto">
      <h1 className="text-5xl my-4">Bilder</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link href="/images/gallery">
          <a>
            <Card image="/bike/20200418_145708.jpg" title="Gallerie" />
          </a>
        </Link>
        <Link href="/images/image-processing">
          <a>
            <Card
              image="/skiing/20200314_102327_changed_colors.jpg"
              title="Bildbearbeitung"
            />
          </a>
        </Link>
        <Link href="/images/upload">
          <a>
            <Card
              image="/skiing/20200314_102327_changed_colors.jpg"
              title="Upload"
            />
          </a>
        </Link>
      </div>
    </main>
  </Layout>
);

export default Images;
