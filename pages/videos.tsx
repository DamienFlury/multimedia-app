import React from 'react';
import Layout from '../components/Layout';
import ReactPlayer from 'react-player';
import StarRatingComponent from 'react-star-rating-component';

const Wrapper: React.FC = ({ children }) => (
  <div className="rounded shadow">{children}</div>
);

const Videos: React.FC = () => (
  <Layout title="Videos">
    <main className="container mx-auto">
      <h1 className="text-5xl my-4">Videos</h1>
      <ReactPlayer
        className="mx-auto"
        url="/BikingMovieAltberg.mp4"
        controls
        wrapper={Wrapper}
      />
      <h2 className="text-4xl my-4">Tools</h2>
      <div className="shadow rounded flex flex-col">
        <h3 className="text-3xl m-4">Davinci Resolve 16</h3>
        <div className="mx-auto rounded overflow-hidden">
          <img src="/davinci_resolve.jpg" />
        </div>
        <p className="m-4">
          Davinci Resolve ist ein kostenloser Video Editor, mit welchem man sehr
          professionell Videos bearbeiten kann. Es hält mit anderen, sehr teuren
          Editoren mit, wie Adobe Premiere Pro. Das Tool ist meiner Meinung nach
          sehr einfach gestaltet für den grossen Funktionsumfang. Die simpleren
          Tools sind immer bereit zum Einsatz, die etwas fortgeschritteneren
          Tools durch Menus verfügbar.
        </p>
        <div className="shadow rounded p-4 my-4">
          <table className="w-full table-fixed text-center">
            <thead>
              <tr>
                <td />
                <td className="p-2">
                  <img src="/davinci_resolve.jpg" />
                </td>
                <td className="p-2">
                  <img src="/adobe_premiere_pro.png" />
                </td>
                <td className="p-2">
                  <img src="/camtasia.png" />
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left py-4">Funktionsumfang</td>
                <td>
                  <StarRatingComponent
                    value={5}
                    name="functionality-davinci"
                    editing={false}
                  />
                </td>
                <td>
                  <StarRatingComponent
                    value={5}
                    name="functionality-premiere"
                    editing={false}
                  />
                </td>
                <td>
                  <StarRatingComponent
                    value={4}
                    name="functionality-camtasia"
                    editing={false}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-left py-4">Einfachheit</td>
                <td>
                  <StarRatingComponent
                    value={4}
                    name="simplicity-davinci"
                    editing={false}
                  />
                </td>
                <td>
                  <StarRatingComponent
                    value={3}
                    name="simplicity-premiere"
                    editing={false}
                  />
                </td>
                <td>
                  <StarRatingComponent
                    value={5}
                    name="simplicity-camtasia"
                    editing={false}
                  />
                </td>
              </tr>
              <tr>
                <td className="text-left py-4">Kosten</td>
                <td>
                  Kostenlos (Davinci Resolve Studio:{' '}
                  <span className="whitespace-no-wrap">$ 299</span>)
                </td>
                <td>$ 20.99 pro Monat</td>
                <td>Kostenlose Testversion, Vollversion: CHF 266</td>
              </tr>
              <tr>
                <td className="text-left py-4">Watermark</td>
                <td>Nope</td>
                <td>Nope</td>
                <td>Bei der Testversion</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </Layout>
);

export default Videos;
