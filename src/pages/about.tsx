import React from 'react'
import Typography from '../styled-components/Typography'
import Layout from '../components/layout'
import SEO from '../components/seo'

const About: React.FC = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Typography variant="h2">About</Typography>
    </Layout>
  )
}

export default About
