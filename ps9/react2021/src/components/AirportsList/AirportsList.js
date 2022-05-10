import React from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";
import { Link } from "react-router-dom";
import { Stack, Paper } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import axios from "axios";

import { connect } from "react-redux";

function AirportsList({
  airportsFromRedux,
  airportsLoadingStatus,
  setAirportsLoadingStatus,
}) {
  const handleClose = () => {
    setAirportsLoadingStatus("fail");
  };

  const getAirportDetails = async (id) => {
    try {
      let AirportDetailsFromApi = await axios.get(
        `http://localhost:9000/airports/${id}`
      );
      console.log(AirportDetailsFromApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={commonColumnsStyles.App}>
      <header className={commonColumnsStyles.AppHeader}>
        {airportsLoadingStatus === "loading" && (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
        {airportsLoadingStatus === "success" && (
          <div>
            <>
              <p>Lista lotnisk</p>
              <Stack spacing={2}>
                {airportsFromRedux.map((airport) => (
                  <Link key={airport.id} to={`/airport/details/${airport.id}`}>
                    <Paper>{`${airport.name} - ${airport.id}`}</Paper>
                  </Link>
                ))}
              </Stack>
            </>
          </div>
        )}
      </header>
      <Snackbar
        open={airportsLoadingStatus === "error"}
        autoHideDuration={1000}
        onClose={handleClose}
        message="Note archived"
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  // state - dane pochodzące z redux sotre'a
  return {
    airportsFromRedux: state.airport.airports,
    airportsLoadingStatus: state.airport.airportsLoadingStatus,
    // airportsFromRedux - tak będzie się nazywał props wewnątrz komponentu
    // state.airport.airports - źródło danych które mają być dostępne jako "props.airportsFromRedux"
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setAirportsLoadingStatus: (value) => {
      dispatch({ type: "SET_AIRPORT_LOADING_STATUS", value: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirportsList);
