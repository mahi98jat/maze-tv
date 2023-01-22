import React, { FC } from "react";
import { Input } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useAppStore } from "../Store";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const Header: FC = () => {
  const userName = localStorage.getItem("username");

  const navigate = useNavigate();

  const [setSearchParams] = useAppStore((state) => [state.setSearchParams]);

  let id: any;
  const handleSearch: React.ChangeEventHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!id) {
      setSearchParams(e.target.value);
      id = setTimeout(() => {
        clearTimeout(id);
      }, 400);
    } else {
    }
  };

  return (
    <header className="header">
      <img src="https://static.tvmaze.com/images/tvm-header-logo.png" />

      {userName ? (
        <h1>Welcome {userName}!</h1>
      ) : (
        <button onClick={() => navigate("/")}>Login Please</button>
      )}
      <div>
        <SearchIcon />
        <Input
          name="search"
          placeholder="Search here"
          onChange={handleSearch}
        />
      </div>
    </header>
  );
};
