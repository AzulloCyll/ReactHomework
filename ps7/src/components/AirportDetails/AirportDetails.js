import React, { useState } from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { useParams, useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
  DialogActions,
} from "@mui/material";

export default function AirporttDeTails() {
  let airports = JSON.parse(window.localStorage.getItem("airports"));
  let params = useParams();
  let airportDetails = airports.find((item) => item.id === params.id);

  let navigate = useNavigate(-1);

  const { id } = useParams();

  const [alertOpen, setAlertOpen] = useState(false);

  const back = () => {
    navigate(-1);
  };

  const handleAlertOpen = () => {
    setAlertOpen(true);
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  const handleYes = () => {
    delById(id);

    navigate("/airports/list", {
      id: id,
      name: airports[id - 1].name,
    });
    console.log("backed", id);
  };

  const handleNo = () => {
    handleAlertClose();
  };

  const delById = () => {
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
            onClick={handleAlertOpen}
          >
            <DeleteIcon sx={{ color: "black" }} />
          </IconButton>

          <Dialog
            open={alertOpen}
            onClose={handleAlertClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Confirm deletion!"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Do you realy want to delete {airports[id - 1].name} airport?
              </DialogContentText>
              <DialogActions>
                <Button onClick={handleYes}>Yes</Button>
                <Button onClick={handleNo} autoFocus>
                  No
                </Button>
              </DialogActions>
            </DialogContent>
          </Dialog>
        </div>
      </header>
    </div>
  );
}
