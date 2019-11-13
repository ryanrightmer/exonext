import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/styles.scss'
import Markdown from 'react-markdown'

const input = "# Welcome to Exoplanet website.\n\n<hr>";

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

      <div className='hero'>
      <Markdown source={input} escapeHtml={false}/>     
      </div>

      <style jsx>{`
      .hero {
        width: 100%;
      }
    `}</style>

    

    
  </Layout>
)

export default Home
