import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./index.css";

const NavigationHeader = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate("/shows");
  }
  return (
    <div className="head">
      <ArrowBackIcon
        onClick={goBack}
        accentHeight={50}
        style={{ cursor: "pointer" }}
      />
      <h2> All Shows</h2>
    </div>
  );
};

export default NavigationHeader;
