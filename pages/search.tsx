import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import { Button, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import '../styles/styles.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store/store';
import { SearchActionTypes, BasicSearchResult, StellarClass } from '../store/search/search.types';
import { search } from '../store/search/search.actions';

type Props = {
  data: BasicSearchResult[];
}

const Search = (props: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(search(StellarClass.Any, 0, 5));
  }, []);
  

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const entries = useSelector((state: AppState) => state.search.searchResults);

  console.log(entries)
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
            <Row className="searchHeader">
              <Col>Distance in Parsecs</Col>
              <Col>Star Name</Col>
            </Row>
            {
              entries ? entries.map(x =>
                <Row key={x.pl_name} className="searchEntry">
                  <Col>{x.st_dist} Parsecs</Col>
                  <Col>{x.pl_hostname}</Col>
                </Row>) : null
            }
          </Col>
          <Col md="1" />
        </Row>
      </Container>
    </Layout>
  );
}

// Search.getInitialProps = async function (): Promise<Props> {
  


//   // return { data };
// };

export default Search;