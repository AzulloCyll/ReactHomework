import React from "react";
import { useNavigate } from "react-router-dom";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";

function ProductsList() {
  let airports = JSON.parse(localStorage.getItem("airports"));
  let navigate = useNavigate();

  const onNameClick = (e) => {
    navigate(`/airport/details/${e}`);
  };

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
    </div>
  );
}

export default ProductsList;
