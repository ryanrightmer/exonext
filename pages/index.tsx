import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import Markdown from 'react-markdown'
import { Container } from 'reactstrap'

type Props = {
  data: {
    cmsContent: string,
  };
}

const Home = (props: Props) => (
  <>
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
  </>
)

Home.getInitialProps = async function (): Promise<Props> {
  const res = await axios.get('http://demo2027889.mockable.io/home');
  const data = res.data;

  return { data };
};

export default Home
