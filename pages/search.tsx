import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

const Search = () => {
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

Search.getInitialProps = async function() {
  const res = await fetch('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&where=pl_kepflag=1');
  const data = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return data;
};

export default Search;