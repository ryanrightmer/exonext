import React from 'react'
import Head from 'next/head';
import StarTable from '../../components/star-table';
import { Container } from 'reactstrap';
import Router, { useRouter } from 'next/router';
import { StellarClass, BasicSearchResult } from '../../store/search/search.types';
import { exoSearch } from '../../store/search/search.actions';

type Props = {
  data: BasicSearchResult[];
}

const StellarClassList = ({ data }: Props) => {
  const router = useRouter();

  const stellarClass: string = router.query.class as string;

  return (
    <>
      <Head>
        <title>Stellar Class G</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Container>
        <h1>{`There are ${data.length} class ${stellarClass.toUpperCase()} star systems within 100 parsecs`}</h1>
        <StarTable entries={data} />
      </Container>
    </>
  );
}
 
StellarClassList.getInitialProps = async function ({ isServer, res, query }: any): Promise<Props> {
  
  let sc: StellarClass;

  const stellarClass: string = query.class as string;
  switch (stellarClass.toLocaleLowerCase()) {
    case 'a': {
      sc = StellarClass.A;
      break;
    }
    default:
      console.log("doesn't exist")
      if (isServer) {
        res.writeHead(302, {
          Location: '/stellar-class'
        })
        res.end()
      } else {
        Router.push('/stellar-class');
      }
      return {data: []};
  }
  const data = await exoSearch(StellarClass.G, 0, 100);

  return { data };
};

export default StellarClassList;