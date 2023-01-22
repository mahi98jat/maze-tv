export type StoreProps = {
  searchParams: string;
  setSearchParams: (str: string) => void;

  searchResults: SearchResultTypes[];
  setSearchResults: (data: SearchResultTypes[]) => void;

  resetSearch: () => void;
};

export type SearchResultTypes = {
  score: number;
  show: ShowTypes;
};

export type Externals = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
};

export type Image = {
  medium: string;
  original: string;
};

export type Country = {
  name: string;
  code: string;
  timezone: string;
};
export type Network = {
  id: number;
  name: string;
  officialSite: string;
  country: Country;
};
export type Schedule = {
  time: string;
  days: string[];
};
export type ShowTypes = {
  averageRuntime: number;
  dvdCountry?: string;
  ended: string;
  externals: Externals;
  genres: GenreTypes[];
  id: number;
  image: Image;
  language: string;
  name: string;
  network: Network;
  officialSite: string;
  permiered: string;
  rating: { average: number };
  runtime: number;
  status: string;
  summary: string;
  type: string;
  url: string;
  webChannel?: string;
  weight: number;
  _links: {
    self: { href: string };
    previousepisode: { href: string };
  };
};

export type GenreTypes =
  | "Drama"
  | "Science-Fiction"
  | "Thriller"
  | "Horror"
  | "Romance"
  | "Comedy"
  | "Family"
  | "Action"
  | "Crime"
  | "Mystery";
