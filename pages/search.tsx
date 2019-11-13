import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import { Button, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/styles.scss'
import { useEffect, useState } from 'react';

type BasicSearchResult = {
  st_dist: number,
  pl_hostname: string,
  pl_name: string,
}

type Props = {
  data: BasicSearchResult[];
}

const Search = (props: Props) => {
  console.log(props.data.length)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  useEffect(() => {
    
  }, []);

  const toggle = () => setDropdownOpen(prevState => !prevState);

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
            <Row className="searchHeader">
              <Col>Distance in Parsecs</Col>
              <Col>Star Name</Col>
            </Row>
            {
              props.data.map(x =>
                <Row key={x.pl_name} className="searchEntry">
                  <Col>{x.st_dist} Parsecs</Col>
                  <Col>{x.pl_hostname}</Col>
                </Row>)
            }
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