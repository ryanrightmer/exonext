import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/styles.scss'

const Home = () => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

      <div className='hero'>
        content        
      </div>

      <style jsx>{`
      .hero {
        width: 100%;
      }
    `}</style>

    

    
  </Layout>
)

export default Home
