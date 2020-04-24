import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import StarRatingComponent from 'react-star-rating-component';
import Main from '../styled-components/Main';
import Typography from '../styled-components/Typography';
import reactIcon from '../assets/images/react.svg';
import vueIcon from '../assets/images/vue.svg';
import angularIcon from '../assets/images/angular.webp';

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

// type RatingGroup = {
//   flexibility: number;
//   packages: number;
//   performance: number;
//   bundleSize: number;
//   simplicity: number;
//   knowledge: number;
//   fun: number;
// };

// type Ratings = {
//   vue: RatingGroup;
//   react: RatingGroup;
//   angular: RatingGroup;
// };

// const ratings: Ratings = {
//   vue: {
//     flexibility: 4,
//     packages: 2,
//     performance: 4,
//     bundleSize: 4,
//     simplicity: 5,
//     knowledge: 2,
//     fun: 5,
//   },
//   react: {
//     flexibility: 5,
//     packages: 5,
//     performance: 4,
//     bundleSize: 3,
//     simplicity: 3,
//     knowledge: 5,
//     fun: 5,
//   },
//   angular: {
//     flexibility: 2,
//     packages: 2,
//     performance: 4,
//     bundleSize: 1,
//     simplicity: 1,
//     knowledge: 3,
//     fun: 2,
//   },
// };

const Technologies: React.FC = () => (
  <Main>
    <Typography variant="h1">Angewandte Technologien</Typography>
    <Typography variant="h2">React</Typography>
    <Logo
      src={reactIcon}
      alt="React"
      animate={{ rotate: 360 }}
      transition={{ loop: Infinity, ease: 'linear', duration: 10 }}
    />
    <Typography>
      React ist ein deklaratives JavaScript Framework, welches sehr komplexe
      Anwendungsfälle ermöglicht. Die Arbeit damit macht sehr viel Spass, was
      neben den Möglichkeiten auch ein Grund ist, weshalb ich mich für React
      entschieden habe. Da ich mich in React bereits sehr gut auskenne, aber ich
      trotzdem noch etwas neues lernen wollte, habe ich das React-Framework
      Gatsby verwendet.
    </Typography>
    <Typography variant="h3">Weshalb React?</Typography>
    <Typography>
      Ich kenne mich aus mit React und Angular. Da React jedoch wesentlich
      einfacher aufgebaut ist, eher als eine Library statt Framework dient, und
      mehr Spass macht, war die Entscheidung für mich relativ klar. Eine
      sicherlich gute Alternative zu React ist Vue, jedoch kenne ich mich damit
      noch nicht so gut aus und mir hat bisher React immer ein wenig besser
      gefallen. Aber Vue interessiert mich dennoch und ich werde sicherlich in
      Zukunft nochmals einen Blick darauf werfen, vor allem da bald Version 3.0
      veröffentlicht wird.
    </Typography>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell />
          <TableCell>
            <Icon src={vueIcon} />
          </TableCell>
          <TableCell>
            <Icon src={reactIcon} />
          </TableCell>
          <TableCell>
            <Icon src={angularIcon} />
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
            <StarRatingComponent value={5} name="fun-react" editing={false} />
          </TableCell>
          <TableCell>
            <StarRatingComponent value={2} name="fun-angular" editing={false} />
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
  </Main>
);

export default Technologies;
