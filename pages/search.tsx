import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/layout'
import { Button, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Form, FormGroup, Input } from 'reactstrap';
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

  const filter = useSelector((state: AppState) => state.search.filter);
  const [stellarClass, setStellarClass] = useState(filter.stellarClass);
  const [minDist, setMinDist] = useState(filter.minDist);
  const [maxDist, setMaxDist] = useState(filter.maxDist);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(search(StellarClass.Any, 0, 5));
  }, []);
  const beginSearch = () => {
    dispatch(search(stellarClass, minDist, maxDist));
  }

  const toggle = () => setDropdownOpen(prevState => !prevState);
  const entries = useSelector((state: AppState) => state.search.searchResults);
  return (
    <Layout>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      

      <Container>
        <Row><p>Search for another world</p></Row>
        <Row>
          <Col md="4" >
            <Row>
            <Form inline>
              <FormGroup inline>
                <Label for="minDist">Min Distance</Label>
                <Input type="number" name="email" id="MinDist" placeholder="0" value={minDist} onChange={(e) => setMinDist(Number(e.target.value))}/>
              </FormGroup>
              <FormGroup inline>
                <Label for="exampleEmail">Max Distance</Label>
                  <Input type="number" name="email" id="maxDist" placeholder="10" value={maxDist} onChange={(e) => setMaxDist(Number(e.target.value))}/>
              </FormGroup>
              <FormGroup>
                <Label>Stellar Class</Label>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} size="sm">
                  <DropdownToggle caret>
                    {stellarClass === StellarClass.Any ? "Any" : stellarClass}
                    </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.Any)}>Any</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={() => setStellarClass(StellarClass.A)}>{StellarClass.A}</DropdownItem>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.B)}>{StellarClass.B}</DropdownItem>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.F)}>{StellarClass.F}</DropdownItem>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.G)}>{StellarClass.G}</DropdownItem>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.K)}>{StellarClass.K}</DropdownItem>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.M)}>{StellarClass.M}</DropdownItem>
                    <DropdownItem onClick={() => setStellarClass(StellarClass.O)}>{StellarClass.O}</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </FormGroup>
              
            </Form>
            </Row>
            <Row>
            <Button onClick={() => beginSearch()}>Search</Button>
            </Row>
          
            
            <Col md="2"></Col>
          </Col>
          <Col md="8">
            <Row className="searchHeader">
              <Col>Distance in Parsecs</Col>
              <Col>Star Name</Col>
            </Row>
            {
              entries ? entries.map(x =>
                <Row key={x.pl_name} className="searchEntry">
                  <Col>{x.st_dist} Parsecs</Col>
                  <Col>{x.pl_hostname}</Col>
                  <Col>{x.st_spstr}</Col>
                </Row>) : null
            }
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

// Search.getInitialProps = async function (): Promise<Props> {
  


//   // return { data };
// };

export default Search;