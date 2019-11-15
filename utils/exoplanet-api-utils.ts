import {
  BasicSearchResult,
  StellarClass,
  StellarSystemInformation,
  PlanetInformation
} from "../types";
import { uniqBy } from "lodash";
import axios from "axios";

const baseUrl =
  "https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?&table=exoplanets&format=json";

export const exoSearch = async (
  stellarClass: StellarClass,
  minDist: number,
  maxDist: number
): Promise<BasicSearchResult[]> => {
  const columns = "&select=st_dist,pl_hostname,pl_name,st_spstr,pl_pnum";
  const filter = `&where=st_dist>${minDist}%20and%20st_dist<${maxDist}%20and%20st_spstr%20like%20%27%25${stellarClass}%25%27`;
  const order = "&order=st_dist";

  const searchUrl = `${baseUrl}${columns}${filter}${order}`;

  console.log(searchUrl);
  const res = await axios.get(searchUrl);

  const data = uniqBy(res.data as BasicSearchResult[], x => x.pl_hostname);
  return data;
};

export const getStarInfo = async (
  name: string
): Promise<StellarSystemInformation> => {
  const columns =
    "&select=pl_name,st_spstr,st_glon,st_glat,st_age,st_acts,st_lum,st_dist,pl_orbeccen,pl_bmassj";
  const filter = `&where=pl_hostname like '${name}'`;
  const order = "&order=pl_name";
  const searchUrl = `${baseUrl}${columns}${encodeURI(filter)}${order}`;
  const res = await axios.get(searchUrl);
  const data = res.data as any[];

  const planetInfo: PlanetInformation[] = data.map(x => ({
    name: x.pl_name,
    orbitalEccentricity: x.pl_orbeccen,
    mass: x.pl_bmassj
  }));

  const first = data[0];
  const systemInfo: StellarSystemInformation = {
    spectralClass: first.st_spstr,
    galacticLatitude: first.st_glat,
    galacticLongitude: first.st_glon,
    age: first.st_age,
    stellarActivity: first.st_acts,
    luminosity: first.st_lum,
    distance: first.st_dist,
    planets: planetInfo
  };
  console.log(searchUrl, data);
  return systemInfo;
};
