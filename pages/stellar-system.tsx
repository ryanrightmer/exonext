import React from "react";
import Router, { useRouter } from "next/router";
import {
  Container,
  Row,
  Button,
  Col,
  Card,
  CardTitle,
  CardText
} from "reactstrap";
import { getStarInfo } from "../utils/exoplanet-api-utils";
import { StellarSystemInformation } from "../types";
import PlanetInfo from "../components/planet-info";

type Props = {
  data: StellarSystemInformation;
};

const StellarSystem = ({ data }: Props) => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <Container>
      <Row className="mb-3">
        <Button>Back</Button>
        <Col className="text-center">
          <h1>{name}</h1>
        </Col>
      </Row>
      <Row>
        <Col md="4" className="starDetails">
          <h2>Star Details</h2>
          <img src="/Dwarf_Stars.png" alt="Stellar Classes" className="image" />
          <table className="starsInfoTable">
            <tr className="searchEntry">
              <td>Classification</td>
              <td>{data.spectralClass ? data.spectralClass : "Unknown"}</td>
            </tr>
            <tr className="searchEntry">
              <td>Galactic Longitude</td>
              <td>{data.galacticLongitude}</td>
            </tr>
            <tr className="searchEntry">
              <td>Galactic Latitude</td>
              <td>{data.galacticLatitude}</td>
            </tr>
            <tr className="searchEntry">
              <td>Star Age</td>
              <td>{data.age ? data.age : "Unknown"}</td>
            </tr>
            <tr className="searchEntry">
              <td>Stellar Activity</td>
              <td>{data.stellarActivity ? data.stellarActivity : "Unknown"}</td>
            </tr>
            <tr className="searchEntry">
              <td>Luminosity</td>
              <td>{data.luminosity ? data.luminosity : "Unknown"}</td>
            </tr>
            <tr className="searchEntry">
              <td>Distance</td>
              <td>{(data.distance * 3.26156).toFixed(1)} light-years</td>
            </tr>
          </table>
        </Col>
        <Col md="8">
          <h2 style={{ textAlign: "center" }}>{data.planets.length} Planets</h2>
          {data.planets.map(x => <PlanetInfo info={x} />)}
        </Col>
      </Row>
    </Container>
  );
};

StellarSystem.getInitialProps = async function({
  isServer,
  res,
  query
}: any): Promise<Props> {
  const starName: string = query.name as string;

  return { data: await getStarInfo(starName) };
};

export default StellarSystem;
