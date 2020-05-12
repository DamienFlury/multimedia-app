import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import StarRatingComponent from 'react-star-rating-component';
import Layout from '../components/Layout';
import { CustomThemeContext } from '../providers/CustomThemeProvider';

type Frameworks = {
  vue: number;
  react: number;
  angular: number;
};

type Topic = {
  title: string;
  frameworks: Frameworks;
};

const ratings: Topic[] = [
  {
    title: 'Flexibility',
    frameworks: {
      vue: 4,
      react: 5,
      angular: 2,
    },
  },
  {
    title: 'Available Packages',
    frameworks: {
      vue: 2,
      react: 5,
      angular: 2,
    },
  },
  {
    title: 'Performance',
    frameworks: {
      vue: 4,
      react: 4,
      angular: 4,
    },
  },
  {
    title: 'Bundle Size',
    frameworks: {
      vue: 4,
      react: 3,
      angular: 1,
    },
  },
  {
    title: 'Simplicity',
    frameworks: {
      vue: 5,
      react: 3,
      angular: 1,
    },
  },
  {
    title: 'Knowledge',
    frameworks: {
      vue: 2,
      react: 5,
      angular: 3,
    },
  },
  {
    title: 'Fun',
    frameworks: {
      vue: 5,
      react: 5,
      angular: 2,
    },
  },
];

const getAverage = (fun: (topic: Topic) => number) =>
  Math.round(
    ratings.map(fun).reduce((acc, cur) => acc + cur, 0) / ratings.length
  );

const getConclusion = () => ({
  vue: getAverage((topic) => topic.frameworks.vue),
  react: getAverage((topic) => topic.frameworks.react),
  angular: getAverage((topic) => topic.frameworks.angular),
});

const Technologies: React.FC = () => {
  const { themeType } = useContext(CustomThemeContext);
  const conclusion = getConclusion();
  return (
    <Layout title="Technologies">
      <main className="container mx-auto">
        <h1 className="text-5xl my-4">Angewandte Technologien</h1>
        <h2 className="text-4xl my-4">React</h2>
        <motion.img
          src="/react.svg"
          alt="React"
          animate={{ rotate: 360 }}
          transition={{ loop: Infinity, ease: 'linear', duration: 10 }}
        />
        <p>
          React ist ein deklaratives JavaScript Framework, welches sehr komplexe
          Anwendungsfälle ermöglicht. Die Arbeit damit macht sehr viel Spass,
          was neben den Möglichkeiten auch ein Grund ist, weshalb ich mich für
          React entschieden habe. Da ich mich in React bereits sehr gut
          auskenne, aber ich trotzdem noch etwas neues lernen wollte, habe ich
          das React-Framework Next.js verwendet.
        </p>
        <p>
          Weiter zu{' '}
          <a href="https://reactjs.org/" className="text-blue-600">
            React
          </a>
        </p>
        <h3 className="text-2xl my-4">Weshalb React?</h3>
        <p>
          Ich kenne mich aus mit React und Angular. Da React jedoch wesentlich
          einfacher aufgebaut ist, eher als eine Library statt Framework dient,
          und mehr Spass macht, war die Entscheidung für mich relativ klar. Eine
          sicherlich gute Alternative zu React ist Vue, jedoch kenne ich mich
          damit noch nicht so gut aus und mir hat bisher React immer ein wenig
          besser gefallen. Aber Vue interessiert mich dennoch und ich werde
          sicherlich in Zukunft nochmals einen Blick darauf werfen, vor allem da
          bald Version 3.0 veröffentlicht wird.
        </p>
        <div className="shadow rounded p-4 my-4">
          <table className="w-full table-fixed text-center">
            <thead>
              <tr>
                <td />
                <td>
                  <img src="/vue.svg" />
                </td>
                <td>
                  <img src="/react.svg" />
                </td>
                <td>
                  <img src="/angular.webp" />
                </td>
              </tr>
              <tr className="text-xl text-gray-800 my-4">
                <td />
                <td>
                  <h4>Vue</h4>
                </td>
                <td>
                  <h4>React</h4>
                </td>
                <td>
                  <h4>Angular</h4>
                </td>
              </tr>
            </thead>
            <tbody>
              {ratings.map((topic) => (
                <tr key={topic.title}>
                  <td className="py-3 text-left">
                    <h5>{topic.title}</h5>
                  </td>
                  <td>
                    <StarRatingComponent
                      value={topic.frameworks.vue}
                      name={`${topic.title} (Vue)`}
                      editing={false}
                    />
                  </td>
                  <td className="text-center">
                    <StarRatingComponent
                      value={topic.frameworks.react}
                      name={`${topic.title} (React)`}
                      editing={false}
                    />
                  </td>
                  <td className="text-center">
                    <StarRatingComponent
                      value={topic.frameworks.angular}
                      name={`${topic.title} (Angular)`}
                      editing={false}
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-3 text-left">
                  <h4>Conclusion</h4>
                </td>
                <td className="text-center">
                  <StarRatingComponent
                    value={conclusion.vue}
                    name={`Conclusion (Vue)`}
                    editing={false}
                  />
                </td>
                <td className="text-center">
                  <StarRatingComponent
                    value={conclusion.react}
                    name={`Conclusion (React)`}
                    editing={false}
                  />
                </td>
                <td className="text-center">
                  <StarRatingComponent
                    value={conclusion.angular}
                    name={`Conclusion (Angular)`}
                    editing={false}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2 className="text-4xl my-4">Next.js</h2>
        <img
          src="/nextjs.svg"
          style={{ filter: `invert(${themeType === 'light' ? 0 : 1})` }}
        />
        <p className="my-3">
          Bei allen heutigen JavaScript-Frameworks ist es üblich, nur ein{' '}
          <pre>index.html</pre>
          -file an den Browser zu schicken. Darin existiert ein Root-Element in
          welchem dann der ganze Inhalt durch JavaScript dynamisch gerendert
          wird. Dabei leidet die Search Engine Optimization (SEO) und die
          Performance. Next.js ist ein beliebtes Server Side Rendering Framework
          (SSR) für React. Dabei kann das Markup auf dem Server oder sogar beim
          Build generiert werden anstatt das ganze dynamisch im Browser machen
          zu müssen. Dabei wird die SEO massiv verbessert und normalerweise sind
          Server sehr leistungsstark, somit wird ein grosser Teil der Arbeit
          vorab auf dem Server erledigt anstatt auf den eventuell langsameren
          Geräten der Benutzer.
        </p>
        <p>
          Weiter zu{' '}
          <a href="https://nextjs.org/" className="text-blue-600">
            Next.js
          </a>
        </p>
        <h2 className="text-4xl mt-4">GIMP - GNU Image Manipulation Program</h2>
        <img src="/gimp.png" />
        <p>
          Um die Bilder zu bearbeiten habe ich das kostenlose Programm GIMP
          verwendet. Es bietet sehr viele Möglichkeiten und ist sehr flexibel.
          Leider ist es manchmal bei schwierigeren Tasks abgestürzt.
        </p>
        <p className="my-3">
          Weiter zu{' '}
          <a href="https://www.gimp.org/" className="text-blue-600">
            GIMP
          </a>
        </p>
      </main>
      <style jsx>
        {`
          pre {
            display: inline;
          }
        `}
      </style>
    </Layout>
  );
};

export default Technologies;
