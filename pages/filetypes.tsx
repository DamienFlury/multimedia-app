import React from 'react';
import Layout from '../components/Layout';

const FileTypes: React.FC = () => (
  <Layout title="Dateitypen">
    <main className="container mx-auto">
      <h1 className="text-5xl py-4">Verwendete Dateitypen</h1>
      <div className="shadow p-4 rounded bg-default-700 transition duration-200 my-4">
        <h2 className="text-3xl">JPEG</h2>
        <p className="py-4">Die meisten Dateitypen sind .jpg:</p>
        <img src="/skiing/20191228_114008.jpg" />
      </div>
      <div className="shadow p-4 rounded bg-default-700 transition duration-200 my-4">
        <h2 className="text-3xl">SVG</h2>
        <p>Jedoch habe ich auch .SVG verwendet, wie:</p>
        <img src="/react.svg" />
        <p>
          SVG haben die tolle Eigenschaft, dass sie nicht Pixel für Pixel
          gespeichert sind, sondern dem Browser eine Anleitung geben, wie es
          gezeichnet werden muss. Somit sind SVG eher leichte Dateien, können
          aber beliebig gezoomt werden, ohne an Auflösung zu verlieren.
        </p>
      </div>
      <div className="shadow p-4 rounded bg-default-700 transition duration-200 my-4">
        <h2 className="text-3xl">WebP</h2>
        <p>Eine ganz neue Bilddateiart gemacht für das Web ist .webp:</p>
        <div className="flex justify-center">
          <img src="/angular.webp" />
        </div>
        <p>
          WebP ermöglicht ca. 26% kleinere Dateigrössen als PNG, und unterstützt
          auch Transparenz.
        </p>
      </div>
    </main>
  </Layout>
);

export default FileTypes;
