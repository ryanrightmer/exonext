import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/styles.scss'
import Markdown from 'react-markdown'
import { Container } from 'reactstrap'

const input = '# Welcome to Exoplanet website.\n\n<hr> \n\n <img src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" width="900" height="500"/>\n\n #### Top 5 Links\n\n[link 1](https://google.com "link 1")\n[link 2](https://google.com)\n[link 3](https://google.com)\n[link 4](https://google.com)\n[link 5](https://google.com)';

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Container className="hero">
      <Markdown className="heroMarkdown" source={input} escapeHtml={false} />
    </Container>

      <style jsx>{`
      .hero {
        width: 100%;
      }
    `}</style>

    

    
  </Layout>
)

export default Home
