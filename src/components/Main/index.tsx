import axios from "axios";
import { FC, useEffect, useState } from "react";
import { ShowContainer } from "./ShowContainer";
import CircularProgress from "@mui/material/CircularProgress";

import { ShowTypes, useAppStore } from "../Store";
import ShowCard from "../shared/ShowCard";
import "./index.css";

const Main: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [action, setAction] = useState<ShowTypes[]>([]);
  const [crime, setCrime] = useState<ShowTypes[]>([]);
  const [drama, setDrama] = useState<ShowTypes[]>([]);
  const [horror, setHorror] = useState<ShowTypes[]>([]);

  const [
    searchParams,
    searchResults,
    setSearchResults,
    resetSearch,
  ] = useAppStore((state) => [
    state.searchParams,
    state.searchResults,
    state.setSearchResults,
    state.resetSearch,
  ]);

  useEffect(() => {
    if (searchParams) {
      searchShows(searchParams);
    } else {
      getAllShows();
    }

    return resetSearch();
  }, [searchParams]);

  async function searchShows(params: string) {
    const response = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${params}`
    );

    console.log(response.data, "dat");
    setSearchResults([...response.data]);
  }

  async function getAllShows() {
    const { data } = await axios.get("https://api.tvmaze.com/shows");
    mapGeners(data);
  }

  function mapGeners(data: ShowTypes[]) {
    setIsLoading(true);
    let actionMovies = [];
    let dramaShows = [];
    let horrorShows = [];

    for (let i = 0; i < data.length; i++) {
      let genres = data[i]?.genres;
      if (genres && genres.length > 0) {
        for (let j = 0; j < genres?.length; j++) {
          if (genres[j] === "Action" || genres[j] === "Thriller") {
            actionMovies.push(data[i]);
          }
          if (
            genres[j] === "Crime" ||
            genres[j] === "Romance" ||
            genres[j] === "Science-Fiction"
          ) {
            setCrime([...crime, data[i]]);
          }

          if (genres[j] === "Drama") {
            dramaShows.push(data[i]);
            setDrama([...drama, data[i]]);
          }
          if (genres[j] === "Horror") {
            horrorShows.push(data[i]);
            setHorror([...horror, data[i]]);
          }
        }
      }
    }

    setAction(actionMovies);
    setDrama(dramaShows);
    setHorror(horrorShows);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }

  return (
    <main className="main">
      {isLoading ? (
        <div className="loading">
          <CircularProgress size={200} thickness={4} color="secondary" />
        </div>
      ) : searchResults?.length > 0 ? (
        <>
          <h2>Your Search results are here</h2>
          <div className="results-grid">
            {searchResults.map((data) => (
              <ShowCard key={data.score} show={data.show} />
            ))}
          </div>
        </>
      ) : (
        <>
          <ShowContainer genre="Action, Drama" data={action} />
          <ShowContainer genre="Drama" data={drama} />
          <ShowContainer genre="Horror" data={horror} />
          <ShowContainer genre="Crime" data={crime} />
        </>
      )}
    </main>
  );
};

export default Main;
