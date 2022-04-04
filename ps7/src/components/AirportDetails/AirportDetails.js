import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { SvgIcon } from "@mui/material";

export default function AirporttDeTails() {
  let airports = JSON.parse(window.localStorage.getItem("airports"));
  let params = useParams();
  let airportDetails = airports.find((item) => item.id === params.id);
  console.log(airportDetails);

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <p>Airport Details</p>
        <span>ID: {airportDetails.id}</span>
        <span>Państwo: {airportDetails.country}</span>
        <span>Miasto: {airportDetails.city}</span>
        <span>Nazwa: {airportDetails.name}</span>
        <span>Kod: {airportDetails.iata_code}</span>
        <svg data-testid="ArrowBack Icon"></svg>
      </header>
    </div>
  );
}
