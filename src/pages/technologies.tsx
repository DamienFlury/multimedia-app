import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Typography from '../styled-components/Typography'
import ReactSvg from '../images/react.svg'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Image from 'gatsby-image'

const Logo = styled(motion.img)`
  width: 100%;
  max-width: 620px;
  margin: auto;
  display: block;
`

const GatsbyLogo = styled(Logo)`
  max-width: 340px;
  margin: 40px auto;
`

const Main = styled.div`
  max-width: 860px;
  margin: auto;
`
const Technologies: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      gatsbyIcon: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Home" />
      <Main>
        <Typography variant="h1">Angewandte Technologien</Typography>
        <Typography variant="h2">React</Typography>
        <Logo
          src={ReactSvg}
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
        <Typography variant="h2">Gatsby</Typography>
        <GatsbyLogo as={Image} fluid={data.gatsbyIcon.childImageSharp.fluid} />
        <Typography>
          Gatsby ist ein Framework für React, welches die Performance und die
          Search-Engine-Optimization (SEO) verbessert. Da in einem herkömmlichen
          React-Projekt das gelieferte HTML-File lediglich aus einem Element
          besteht und dann dynamisch der Inhalt über JavaScript dazu geladen
          wird, braucht es länger, bis die Website verwendet werden kann. Gatsby
          generiert bereits bei einem Build voll umfängliche, statische
          HTML-Pages, welche dann durch React dynamisch werden.
        </Typography>
      </Main>
    </Layout>
  )
}

export default Technologies
