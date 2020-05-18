import React from 'react';
import Layout from '../components/Layout';

const Techniques: React.FC = () => (
  <Layout title="Techniken">
    <main className="container mx-auto">
      <h1 className="text-5xl py-4">Techniken</h1>
      <section className="mb-8">
        <h2 className="text-3xl">Tiefenschärfe</h2>
        <div className="shadow rounded overflow-hidden my-4 bg-default-700">
          <img src="/bike/20200419_150843.jpg" />
          <h4 className="text-xl m-4">Hintergrundunschärfe</h4>
        </div>
        <div className="shadow rounded overflow-hidden my-4 bg-default-700">
          <img src="/skiing/20200314_111709.jpg" />
          <h4 className="text-xl m-4">Vordergrundunschärfe</h4>
        </div>
      </section>
      <section className="my-4">
        <h2 className="text-3xl">1/3-Regel</h2>
        <div className="shadow rounded overflow-hidden my-4 bg-default-700">
          <div className="grid grid-cols-2 gap-5 mb-5">
            <img src="/bike/20200404_151457.jpg" />
            <img src="/bike/20200404_151457_splitted.jpg" />
          </div>
          <img src="/skiing/20200215_110217.jpg" />
          <p className="m-4">
            Wie man hier sehr schön sieht, ist bei diesen Bildern der Teil im
            Vordergrund im unteren Drittel.
          </p>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-3xl">Rote Augen Korrektur</h2>
        <div className="shadow rounded overflow-hidden my-4 bg-default-700">
          <p className="m-4">
            Natürlich sind alle Bilder mit Personen Rote-Augen-korrigiert.
          </p>
          <div className="grid grid-cols-2 gap-4" style={{ height: 900 }}>
            <img src="/bike/20200419_150852.jpg" />
            <img src="/bike/20200417_190620.jpg" />
          </div>
        </div>
      </section>
    </main>
  </Layout>
);

export default Techniques;
