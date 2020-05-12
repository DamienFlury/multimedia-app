import React from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Card from '../../components/Card';
import albums from '../../albums';

const Gallery: React.FC = () => (
  <Layout title="Gallery">
    <main className="container mx-auto">
      <h1 className="text-5xl py-4">Gallery</h1>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}
      >
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
      </div>
    </main>
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </Layout>
);

export default Gallery;
