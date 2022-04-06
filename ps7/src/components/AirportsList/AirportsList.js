import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";

function ProductsList() {
  let airports = JSON.parse(localStorage.getItem("airports"));
  let navigate = useNavigate();
  let location = useLocation();
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackName, setSnackName] = useState("");
  const [snackCountry, setSnackCountry] = useState("");

  useEffect(() => {
    if (location.state) {
      setSnackOpen(true);
      setSnackName(location.state.name);
      setSnackCountry(location.state.country);
    }
  }, [location]);

  const onNameClick = (e) => {
    navigate(`/airport/details/${e}`);
  };

  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={() => {
          setSnackOpen(false);
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        <Typography variant="h3" component="div">
          Lista lotnisk
        </Typography>
        {airports.map((airport) => {
          return (
            <Stack
              spacing={2}
              onClick={() => onNameClick(airport.id)}
              key={airport.id}
            >
              <Paper
                sx={{
                  m: "2px",
                  p: "5px 10px",
                  backgroundColor: "gray",
                  cursor: "pointer",
                }}
                elevation={3}
              >
                {airport.id}. {airport.name}
              </Paper>
            </Stack>
          );
        })}
      </header>

      <Snackbar open={snackOpen} autoHideDuration={3000}>
        <Alert severity="success" action={action}>
          {"Deleted " + snackName + " / " + snackCountry + " airport"}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default ProductsList;
