import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
import Layout from '../components/Layout';
import { CustomThemeContext } from '../providers/CustomThemeProvider';

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

const Technologies: React.FC = () => {
  const { themeType } = useContext(CustomThemeContext);
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
          das React-Framework Gatsby verwendet.
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
            <TableRow>
              <td>
                <Typography>Flexibility</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="flexibility-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={5}
                  name="flexibility-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={2}
                  name="flexibility-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Available Packages</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={2}
                  name="packages-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={5}
                  name="packages-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={2}
                  name="packages-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Performance</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="performance-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="performance-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="performance-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Bundle Size</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="bundle-size-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={3}
                  name="bundle-size-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={1}
                  name="bundle-size-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Simplicity</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={5}
                  name="simplicity-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={3}
                  name="simplicity-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={1}
                  name="simplicity-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Knowledge</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={2}
                  name="knowledge-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={5}
                  name="knowledge-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={3}
                  name="knowledge-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Fun</Typography>
              </td>
              <TableCell>
                <StarRatingComponent value={5} name="fun-vue" editing={false} />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={5}
                  name="fun-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={2}
                  name="fun-angular"
                  editing={false}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <td>
                <Typography>Conclusion</Typography>
              </td>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="conclusion-vue"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={4}
                  name="conclusion-react"
                  editing={false}
                />
              </TableCell>
              <TableCell>
                <StarRatingComponent
                  value={2}
                  name="conclusion-angular"
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
          Bei allen heutigen JavaScript-Frameworks ist es üblich, nur ein
          {' '}
          <pre>index.html</pre>
          -file an den Browser zu schicken. Darin existiert
          ein Root-Element in welchem dann der ganze Inhalt durch JavaScript
          dynamisch gerendert wird. Dabei leidet die Search Engine Optimization
          (SEO) und die Performance. Next.js ist ein beliebtes Server Side
          Rendering Framework (SSR) für React. Dabei kann das Markup auf dem
          Server oder sogar beim Build generiert werden anstatt das ganze
          dynamisch im Browser machen zu müssen. Dabei wird die SEO massiv
          verbessert und normalerweise sind Server sehr leistungsstark, somit
          wird ein grosser Teil der Arbeit vorab auf dem Server erledigt anstatt
          auf den eventuell langsameren Geräten der Benutzer.
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
