import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout title="Welcome">
      <main className="container mx-auto">
        <h1 className="text-5xl pt-4">Willkommen</h1>
        <p className="py-6">
          Dies ist meine Multimedia Applikation, erstellt im Rahmen des
          BBW-Moduls 152.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link href="/gallery/highlights">
            <a>
              <Card image="/bike/20200418_145706.jpg" title="Highlights" />
            </a>
          </Link>
          <Link href="/image-processing">
            <a>
              <Card
                image="/skiing/20200314_102327_changed_colors.jpg"
                title="Bildbearbeitung"
              />
            </a>
          </Link>
          <Link href="/technologies">
            <a>
              <Card image="/react.svg" title="Technologien" />
            </a>
          </Link>
          <Link href="/datatypes">
            <a>
              <Card image="/skiing/20200215_133057.jpg" title="Dateitypen" />
            </a>
          </Link>
        </div>
      </main>
    </Layout>
  );
}
