import Head from 'next/head'
import axios from 'axios'
import Layout from '../components/layout'
import { Button, Col, Container, Row, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label, Form, FormGroup, Input } from 'reactstrap';
import '../styles/styles.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Dispatch } from 'redux';
import { AppState } from '../store/store';
import { SearchActionTypes } from '../store/search/search.types';
import { BasicSearchResult, StellarClass } from '../types';
import { search } from '../store/search/search.actions';
import Link from 'next/link';
import StarTable from '../components/star-table';

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
    <>
      <Head>
        <title>Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      

      <Container>
        <Row>
          <Col md="4" >
            <Row className="searchTools">
              <h4>
                Search for another world
              </h4>
              <Form inline>
                <FormGroup inline>
                  <Label for="minDist">Min Distance: </Label>
                  <Input type="number" name="email" id="MinDist" placeholder="0" value={minDist} onChange={(e) => setMinDist(Number(e.target.value))}/>
                </FormGroup>
                <FormGroup inline>
                  <Label for="exampleEmail">Max Distance: </Label>
                    <Input type="number" name="email" id="maxDist" placeholder="10" value={maxDist} onChange={(e) => setMaxDist(Number(e.target.value))}/>
                </FormGroup>
                <FormGroup>
                  <Label>Stellar Class: </Label>
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
              <Button onClick={() => beginSearch()}>Search</Button>
            </Row>
          </Col>
          <Col md="8">
            <StarTable entries={entries}/>
          </Col>
        </Row>
      </Container>
      </>
  );
}

// Search.getInitialProps = async function (): Promise<Props> {
  


//   // return { data };
// };

export default Search; 