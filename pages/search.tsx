import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'

type BasicSearchResult = {
  st_dist: number,
  pl_hostname: string,
  pl_name: string,
}

const Search = (props: { data: BasicSearchResult[] }) => {
  console.log(props.data)
  return (
    <Layout>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      

      <p>Search for another world</p>
      <ul>
        {
          props.data.map(x => { <li>{x.st_dist}: {x.pl_name}</li>})
        }
      </ul>
      
    </Layout>
  );
}



Search.getInitialProps = async function() {
  const res = await fetch('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&select=st_dist,pl_hostname,pl_name&order=st_dist');
  const data: BasicSearchResult[] = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return { data };
};

export default Search;