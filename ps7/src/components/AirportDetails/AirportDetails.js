import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useParams, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";

export default function AirporttDeTails() {
  let airports = JSON.parse(window.localStorage.getItem("airports"));
  let params = useParams();
  let airportDetails = airports.find((item) => item.id === params.id);

  let navigate = useNavigate(-1);

  const { id } = useParams();

  const back = () => {
    navigate(-1);
  };

  const delById = (event) => {
    console.log(id);
    let filteredAirports = airports.filter((item) => item.id !== id);
    console.log(filteredAirports);
    airports = JSON.stringify([...filteredAirports]);
    localStorage.setItem("airports", airports);
    back();
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Airport Details</p>
        <span>ID: {airportDetails.id}</span>
        <span>Państwo: {airportDetails.country}</span>
        <span>Miasto: {airportDetails.city}</span>
        <span>Nazwa: {airportDetails.name}</span>
        <span>Kod: {airportDetails.iata_code}</span>

        <div>
          <IconButton
            aria-label="primary"
            sx={{ backgroundColor: "darkgray" }}
            onClick={back}
          >
            <ArrowBackIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton
            aria-label="primary"
            sx={{ backgroundColor: "darkgray" }}
            onClick={delById}
          >
            <DeleteIcon sx={{ color: "black" }} />
          </IconButton>
        </div>
      </header>
    </div>
  );
}
