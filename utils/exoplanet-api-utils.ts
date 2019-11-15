import { BasicSearchResult, StellarClass } from "../types";
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
