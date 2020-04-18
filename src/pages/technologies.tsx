import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Typography from '../styled-components/Typography'
import ReactSvg from '../images/react.svg'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const ReactLogo = styled(motion.img)`
  width: 100%;
  max-width: 620px;
  margin: auto;
`

const Technologies: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <Typography variant="h1">Angewandte Technologien</Typography>
    <Typography variant="h2">React</Typography>
    <ReactLogo
      src={ReactSvg}
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
    <Typography variant="h2">Gatsby</Typography>
    <Typography>
      Gatsby ist ein Framework für React, welches die Performance und die
      Search-Engine-Optimization (SEO) verbessert. Da in einem herkömmlichen
      React-Projekt das gelieferte HTML-File lediglich aus einem Element besteht
      und dann dynamisch der Inhalt über JavaScript dazu geladen wird, braucht
      es länger, bis die Website verwendet werden kann.
    </Typography>
  </Layout>
)

export default Technologies
