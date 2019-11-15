export type BasicSearchResult = {
  st_dist: number;
  pl_hostname: string;
  pl_name: string;
  st_spstr: string;
  pl_pnum: number;
};

export enum StellarClass {
  Any = "",
  O = "O",
  B = "B",
  A = "A",
  F = "F",
  G = "G",
  K = "K",
  M = "M"
}

export type StellarSystemInformation = {
  spectralClass: string | null;
  galacticLongitude: number;
  galacticLatitude: number;
  age: number | null;
  stellarActivity: string | null;
  luminosity: string | null;
  distance: number;
  planets: PlanetInformation[];
};

export type PlanetInformation = {
  name: string;
  orbitalEccentricity: number;
  mass: number;
};
