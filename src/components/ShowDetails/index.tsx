import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Rating from "@mui/material/Rating";
import axios from "axios";
import { ShowTypes } from "../Store";
import Header from "./Header";

import "./index.css";

export const ShowDetails: FC = () => {
  const [showDetails, setShowDetails] = useState<ShowTypes>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { showId } = useParams();

  useEffect(() => {
    if (showId) getShowDetails(showId);
  }, [showId]);

  async function getShowDetails(showId: string) {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.tvmaze.com/shows/${showId}`
      );

      if (data) setShowDetails(data);
    } catch (error) {
      alert("Error While fetching the data!");
    } finally {
      setIsLoading(false);
    }
  }

  return showDetails ? (
    <>
      <Header />

      <div className="container">
        <div className="imageContainer">
          <img src={showDetails?.image.original} alt="poster" />
        </div>
        <div className="detailsContainer">
          <div>
            <h1>{showDetails.name}</h1>
            <Rating
              name="read-only"
              value={showDetails.rating.average / 2}
              readOnly
            />{" "}
          </div>

          <div>
            <p>{showDetails?.dvdCountry}</p>
            <p>{showDetails?.language}</p>
            <p>{showDetails?.type}</p>
            <p>Cast:{showDetails?.permiered}</p>
          </div>
          <div>
            <div
              dangerouslySetInnerHTML={{ __html: showDetails?.summary }}
            ></div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <h5>Loading....</h5>
  );
};
