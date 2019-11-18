import { PlanetInformation } from "../types";
import Link from "next/link";
import { Card, CardTitle, CardText } from "reactstrap";

type Props = {
  info: PlanetInformation;
};

const PlanetInfo = ({ info }: Props) => {
  return (
    <Card body className="mb-5">
      <CardTitle>{info.name}</CardTitle>
      <CardText>
        <table className="starsInfoTable">
          <tr className="searchEntry">
            <td>Orbital Eccentricity</td>
            <td>
              {info.orbitalEccentricity ? info.orbitalEccentricity : "Unknown"}
            </td>
          </tr>
          <tr className="searchEntry">
            <td>Mass</td>
            <td>{info.mass ? `${(info.mass * 318).toFixed(1)} Earth Masses` : "Unknown"}</td>
          </tr>
        </table>
      </CardText>
    </Card>
  );
};

export default PlanetInfo;
