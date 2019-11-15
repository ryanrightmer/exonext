import React from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/styles.scss'
import Markdown from 'react-markdown'
import { Container } from 'reactstrap'

type Props = {
  data: {
    cmsContent: string,
  };
}

const Home = (props: Props) => (
  <Layout>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Container className="hero">
      <Markdown className="heroMarkdown" source={props.data.cmsContent} escapeHtml={false} />
    </Container>

      <style jsx>{`
      .hero {
        width: 100%;
      }
    `}</style>   
  </Layout>
)

Home.getInitialProps = async function (): Promise<Props> {
  const res = await fetch('http://demo2027889.mockable.io/');
  const data= await res.json();

  return { data };
};

export default Home
