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
