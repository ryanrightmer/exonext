import React from 'react'
import Head from 'next/head';
import StarTable from '../../components/star-table';
import { Container } from 'reactstrap';
import Router, { useRouter } from 'next/router';
import { StellarClass, BasicSearchResult } from '../../store/search/search.types';
import { exoSearch } from '../../store/search/search.actions';

type Props = {
  data: BasicSearchResult[];
  stellarClass: StellarClass;
}

const StellarClassList = ({ data, stellarClass}: Props) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Stellar Class G</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Container>
        <h2>{`There ${data.length === 1 ? "is" : "are"} ${data.length} class ${stellarClass.toUpperCase()} star system${data.length === 1 ? "" : "s"} with exoplanets within 100 parsecs`}</h2>
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
    case 'b': {
      sc = StellarClass.B;
      break;
    }
    case 'f': {
      sc = StellarClass.F;
      break;
    }
    case 'g': {
      sc = StellarClass.G;
      break;
    }
    case 'k': {
      sc = StellarClass.K;
      break;
    }
    case 'm': {
      sc = StellarClass.M;
      break;
    }
    case 'o': {
      sc = StellarClass.O;
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
      return {data: [], stellarClass: StellarClass.Any};
  }
  const data = await exoSearch(sc, 0, 100);

  return { data, stellarClass: sc };
};

export default StellarClassList;