import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { ShowTypes } from "../../Store";
import "./index.css";

export type ShowCardProps = {
  show: ShowTypes;
};
const ShowCard: FC<ShowCardProps> = ({ show }) => {
  const navigate = useNavigate();

  function navigateToShowDetails(showId: number) {
    navigate(`/show/${showId}`);
  }

  return (
    <div className="show" onClick={() => navigateToShowDetails(show.id)}>
      <img
        src={show?.image?.medium || show?.image?.original || ""}
        alt="poster"
      />

      <div className="info">
        <p>{show.name}</p>
        <p>rating:{show.rating.average}</p>
      </div>
    </div>
  );
};

export default ShowCard;
