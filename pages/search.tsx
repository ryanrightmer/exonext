import Head from 'next/head'
import Layout from '../components/layout'

export default function Search() {
  return (
    <Layout>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <p>Search for another world</p>
    </Layout>
  );
}