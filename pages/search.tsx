import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import { Button, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/styles.scss'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../store/store';
import { BasicSearchResult } from '../store/search/search.types';
import Link from 'next/link';

type Props = {
  data: BasicSearchResult[];
}

const Search = (props: Props) => {
  console.log(props.data.length)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    
  }, []);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const entries = useSelector((state: AppState) => state.search.searchResults);

  console.log(entries);
  return (
    <Layout>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      

      <Container>
        <Row><p>Search for another world</p></Row>
        <Row>
          <Col md="2">Distance</Col>
          <Col md="2">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret>
                Dropdown
                </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>Some Action</DropdownItem>
                <DropdownItem disabled>Action (disabled)</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          <Col md="1" />
          <Col md="10">
            <table className="starsInfoTable">
              <tr>
                <th></th>
                <th>Distance in Parsecs</th>
                <th>Star Name</th>
                <th></th>
              </tr>
              {
                props.data.map((x, index) =>
                  <tr key={x.pl_name} className="searchEntry">
                    <td>{index + 1}.</td>
                    <td>{x.st_dist} Parsecs</td>
                    <td>{x.pl_hostname}</td>
                    <td>
                      <Link href='/exoplanet/test-planet'>
                        <a>Details</a>
                      </Link>
                    </td>
                  </tr>)
              }
            </table>
          </Col>
          <Col md="1" />
        </Row>
      </Container>
    </Layout>
  );
}

Search.getInitialProps = async function (): Promise<Props> {
  const res = await fetch('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json&select=st_dist,pl_hostname,pl_name&order=st_dist');
  const data: BasicSearchResult[] = await res.json();

  console.log(`Show data fetched. Count: ${data.length}`);

  return { data };
};

export default Search;