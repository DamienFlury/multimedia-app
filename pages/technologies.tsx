import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
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

const Logo = styled(motion.img)`
  width: 100%;
  max-width: 620px;
  margin: auto;
  display: block;
`;

const Icon = styled.img`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  table-layout: fixed;
`;
const TableRow = styled.tr``;
const TableCell = styled.td`
  text-align: center;
`;

const TableHead = styled.thead``;
const TableBody = styled.tbody``;

const StyledA = styled.a`
  color: ${(props) => props.theme.colors.primary[0]};
  text-decoration: none;
`;

const Technologies: React.FC = () => {
  const { themeType } = useContext(CustomThemeContext);
  const conclusion = getConclusion();
  return (
    <Layout title="Technologies">
      <Main>
        <Typography variant="h1">Angewandte Technologien</Typography>
        <Typography variant="h2">React</Typography>
        <Logo
          src="/react.svg"
          alt="React"
          animate={{ rotate: 360 }}
          transition={{ loop: Infinity, ease: 'linear', duration: 10 }}
        />
        <Typography>
          React ist ein deklaratives JavaScript Framework, welches sehr komplexe
          Anwendungsfälle ermöglicht. Die Arbeit damit macht sehr viel Spass,
          was neben den Möglichkeiten auch ein Grund ist, weshalb ich mich für
          React entschieden habe. Da ich mich in React bereits sehr gut
          auskenne, aber ich trotzdem noch etwas neues lernen wollte, habe ich
          das React-Framework Next.js verwendet.
        </Typography>
        <Typography>
          Weiter zu <StyledA href="https://reactjs.org/">React</StyledA>
        </Typography>
        <Typography variant="h3">Weshalb React?</Typography>
        <Typography>
          Ich kenne mich aus mit React und Angular. Da React jedoch wesentlich
          einfacher aufgebaut ist, eher als eine Library statt Framework dient,
          und mehr Spass macht, war die Entscheidung für mich relativ klar. Eine
          sicherlich gute Alternative zu React ist Vue, jedoch kenne ich mich
          damit noch nicht so gut aus und mir hat bisher React immer ein wenig
          besser gefallen. Aber Vue interessiert mich dennoch und ich werde
          sicherlich in Zukunft nochmals einen Blick darauf werfen, vor allem da
          bald Version 3.0 veröffentlicht wird.
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>
                <Icon src="/vue.svg" />
              </TableCell>
              <TableCell>
                <Icon src="/react.svg" />
              </TableCell>
              <TableCell>
                <Icon src="/angular.webp" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell />
              <TableCell>
                <Typography variant="h4">Vue</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">React</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h4">Angular</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ratings.map((topic) => (
              <TableRow key={topic.title}>
                <td>
                  <Typography>{topic.title}</Typography>
                </td>
                <TableCell>
                  <StarRatingComponent
                    value={topic.frameworks.vue}
                    name={`${topic.title} (Vue)`}
                    editing={false}
                  />
                </TableCell>
                <TableCell>
                  <StarRatingComponent
                    value={topic.frameworks.react}
                    name={`${topic.title} (React)`}
                    editing={false}
                  />
                </TableCell>
                <TableCell>
                  <StarRatingComponent
                    value={topic.frameworks.angular}
                    name={`${topic.title} (Angular)`}
                    editing={false}
                  />
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <td>
                <Typography>Conclusion</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={conclusion.vue}
                  name={`Conclusion (Vue)`}
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={conclusion.react}
                  name={`Conclusion (React)`}
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={conclusion.angular}
                  name={`Conclusion (Angular)`}
                  editing={false}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography variant="h2">Next.js</Typography>
        <Logo
          src="/nextjs.svg"
          style={{ filter: `invert(${themeType === 'light' ? 0 : 1})` }}
        />
        <Typography>
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
        </Typography>
        <Typography>
          Weiter zu <StyledA href="https://nextjs.org/">Next.js</StyledA>
        </Typography>
        <Typography variant="h2">
          GIMP - GNU Image Manipulation Program
        </Typography>
        <Logo src="/gimp.png" />
        <Typography>
          Um die Bilder zu bearbeiten habe ich das kostenlose Programm GIMP
          verwendet. Es bietet sehr viele Möglichkeiten und ist sehr flexibel.
          Leider ist es manchmal bei schwierigeren Tasks abgestürzt.
        </Typography>
        <Typography>
          Weiter zu <StyledA href="https://www.gimp.org/">GIMP</StyledA>
        </Typography>
      </Main>
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
